import { Post } from '../../pages/api/api';
import { blogReadingTime, reformatDate } from '../../utils';
import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import {
  // dark,
  // prism,
  // coy,
  darcula
  //, dracula
  // , tomorrow,
  // vscDarkPlus
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
  AuthorImage,
  ContainerArticle,
  Facebook,
  FeedbackLikes,
  Linkedin,
  Reddit,
  SocialMedia,
  StyledLink,
  SubTitle,
  SubTitleAuthor,
  // Tag,
  Tags,
  Twitter,
  Whatsapp
} from './styles';
import Link from 'next/link';
import { Tag } from '../Tag';
import { ViewsCounter } from '../ViewsCounter';
import { LikeButton } from '../LikeButton';
import { LikesCounter } from '../LikesCounter';

type BlogPostProps = {
  slug: string;
  post: Post;
};

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const shareOnLinkedin = (slug: string, post: Post) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const summary = encodeURI(post?.excerpt);
  const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&t=${title}&summary=${summary}`;
  return shareUrl;
};

const shareOnTwitter = (slug: string, post: Post) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const text = encodeURI(post?.title);
  const via = 'nunorralves';
  const hashtags = post?.tags.toString();
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${via}&hashtags=${hashtags}`;
  return shareUrl;
};

const shareOnFacebook = (slug: string, post: Post) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const hashtags = post?.tags.toString();
  const shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}&hashtag=${hashtags}`;
  return shareUrl;
};

function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

const shareOnWhatsapp = (slug: string, post: Post) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const shareUrl = `https://web.whatsapp.com/send?text=${title}%20${url}`;
  return shareUrl;
};

const shareOnReddit = (slug: string, post: Post) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const shareUrl = `http://www.reddit.com/submit?url=${url}&title=${title}`;
  return shareUrl;
};

export const BlogPost: React.FC<BlogPostProps> = ({ slug, post }) => {
  const { title, excerpt } = post;

  const CodeBlock = ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={darcula}>
        {value}
      </SyntaxHighlighter>
    );
  };

  const ImageRenderer = props => {
    return <img {...props} style={{ maxWidth: '100%' }} />;
  };

  return (
    <ContainerArticle>
      <h1>{title}</h1>
      <h3>{excerpt}</h3>
      <SocialMedia>
        <Link href={shareOnLinkedin(slug, post)} passHref>
          <StyledLink target="_blank">
            <Linkedin />
          </StyledLink>
        </Link>
        <Link href={shareOnTwitter(slug, post)} passHref>
          <StyledLink target="_blank">
            <Twitter />
          </StyledLink>
        </Link>
        <Link href={shareOnFacebook(slug, post)} passHref>
          <StyledLink target="_blank">
            <Facebook />
          </StyledLink>
        </Link>
        <Link href={shareOnWhatsapp(slug, post)} passHref>
          <StyledLink target="_blank" data-action="share/whatsapp/share">
            <Whatsapp />
          </StyledLink>
        </Link>
        <Link href={shareOnReddit(slug, post)} passHref>
          <StyledLink target="_blank">
            <Reddit />
          </StyledLink>
        </Link>
      </SocialMedia>
      <SubTitle>
        {/* <p>{`${views ? views : '–––'} views`}</p> */}
        <SubTitleAuthor>
          <AuthorImage src="/photo.jpg" />
          <h4>
            Posted by {post.author} on {reformatDate(post.date)}
          </h4>
        </SubTitleAuthor>
        <h4>
          {blogReadingTime(post.content)} &middot;{' '}
          <ViewsCounter id={post.slug} increment={true} /> &middot;{' '}
          <LikesCounter id={post.slug} />
        </h4>
      </SubTitle>
      <Tags>
        {post.tags && post.tags.map(tag => <Tag key={tag} tag={tag} />)}
      </Tags>
      <br />
      <ReactMarkdown
        escapeHtml={false}
        source={post.content}
        renderers={{
          code: CodeBlock,
          image: ImageRenderer
        }}
      />
      <br />
      <FeedbackLikes>
        <LikeButton id={post.slug} />
      </FeedbackLikes>
    </ContainerArticle>
  );
};

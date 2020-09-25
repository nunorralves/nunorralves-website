import Link from 'next/link';
import { Post } from '../../lib/api';
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
  BlogEntriesList,
  BlogEntriesWrapper,
  Categories,
  Category,
  Container,
  SideBar,
  Tag,
  Tags,
  StyledLink,
  StyledCoverImage
} from './styles';

interface IBlogEntryProps {
  post: Post;
  categories: string[];
  tags: string[];
}
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const BlogEntry: React.FC<IBlogEntryProps> = ({ post, categories, tags }) => {
  const CodeBlock = ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={darcula}>
        {value}
      </SyntaxHighlighter>
      // <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
    );
  };

  return (
    <Container>
      <BlogEntriesWrapper>
        <BlogEntriesList>
          <h1>{post.title}</h1>
          <h1>{post.excerpt}</h1>
          <h1>{post.language}</h1>
          <h1>{post.author}</h1>
          <p>
            {reformatDate(post.date)} &middot; {blogReadingTime(post.content)}
          </p>
          <StyledCoverImage src={`/${post.coverImage}`} alt="" />
          <ReactMarkdown
            escapeHtml={false}
            source={post.content}
            renderers={{ code: CodeBlock }}
          />
        </BlogEntriesList>
        <SideBar>
          <h1>Categories</h1>
          <Categories>
            {categories &&
              categories.map(category => {
                return (
                  <Category key={category}>
                    <Link href={`/categories/${category}`}>
                      <StyledLink>{category}</StyledLink>
                    </Link>
                  </Category>
                );
              })}
          </Categories>
          <h1>Tags</h1>
          <Tags>
            {tags &&
              tags.map(tag => {
                return (
                  <Tag key={tag}>
                    <Link href={`/tags/${tag}`}>
                      <StyledLink>{tag}</StyledLink>
                    </Link>
                  </Tag>
                );
              })}
          </Tags>
        </SideBar>
      </BlogEntriesWrapper>
    </Container>
  );
};

export default BlogEntry;

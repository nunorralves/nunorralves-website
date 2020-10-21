import Hero from '../components/Hero';
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { PostsList } from '../components/PostsList';
import useTranslation from '../intl/useTranslation';
import { NextSeo } from 'next-seo';

const Index: React.FC = () => {
  const { translate } = useTranslation();
  const DESCRIPTION = `${translate('site_description')}`;

  const filteredBlogPosts =
    blogPosts &&
    blogPosts
      .filter(post => post.slug !== 'empty') // To remove empty/dummy required to have blogPost defined
      .sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
      .slice(0, 3);

  const tags = blogPosts && blogPosts.map(bp => bp.tags);

  return (
    <>
      <NextSeo
        description={DESCRIPTION}
        openGraph={{ description: DESCRIPTION }}
        additionalMetaTags={[
          {
            property: 'tags',
            content: tags.toString()
          }
        ]}
      />
      <section>
        <Hero />
        {filteredBlogPosts && (
          <PostsList
            title={translate('latest_posts')}
            subTitle=""
            postsMetadata={filteredBlogPosts}
          />
        )}
      </section>
    </>
  );
};

export default Index;

import Hero from '../components/Hero';
import { NextSeo } from 'next-seo';
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { PostsList } from '../components/PostsList';
import PostsViewedList from '../components/PostsViewedList';
import useTranslation from '../intl/useTranslation';

// Updated on 2021-06-08
const Index: React.FC = () => {
  const { translate } = useTranslation();
  const DESCRIPTION = `${translate('site_description')}`;

  const publishedBlogPosts = blogPosts.filter(
    post => post.status === 'published'
  );

  const latestBlogPosts =
    publishedBlogPosts
      ?.sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
      .slice(0, 3) ?? [];

  const tags = blogPosts?.map(bp => bp.tags) ?? [];

  return (
    <>
      <NextSeo
        description={DESCRIPTION}
        openGraph={{ description: DESCRIPTION }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: tags.toString()
          }
        ]}
      />
      <section>
        <Hero />
        {publishedBlogPosts && (
          <PostsViewedList
            title={translate('most_viewed_posts')}
            subTitle=""
            postsMetadata={publishedBlogPosts}
          />
        )}
        <hr />
        {latestBlogPosts && (
          <PostsList
            title={translate('latest_posts')}
            subTitle=""
            postsMetadata={latestBlogPosts}
          />
        )}
      </section>
    </>
  );
};

export default Index;

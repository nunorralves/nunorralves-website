import Hero from '../components/Hero';
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { PostsList } from '../components/PostsList';
import useTranslation from '../intl/useTranslation';

const Index: React.FC = () => {
  const { translate } = useTranslation();

  const filteredBlogPosts = blogPosts
    .sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
    .slice(0, 3);

  return (
    <section>
      <Hero />
      {filteredBlogPosts && (
        <PostsList
          title={translate('latest_posts')}
          postsMetadata={filteredBlogPosts}
        />
      )}
    </section>
  );
};

export default Index;

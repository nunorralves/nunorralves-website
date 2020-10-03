import Hero from '../components/Hero';
import { getAllPosts, Post } from './api/api';
import { GetStaticProps } from 'next';
import { PostsList } from '../components/PostsList';
import useTranslation from '../intl/useTranslation';

type IndexProps = {
  allPosts: Post[];
};

const Index: React.FC<IndexProps> = ({ allPosts }: IndexProps) => {
  const { translate } = useTranslation();

  const filteredBlogPosts = allPosts
    .sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
    .slice(0, 3);

  return (
    <section>
      <Hero />
      {filteredBlogPosts && (
        <PostsList
          title={translate('latest_posts')}
          posts={filteredBlogPosts}
        />
      )}
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: Post[] = getAllPosts();

  return {
    props: { allPosts }
  };
};

export default Index;

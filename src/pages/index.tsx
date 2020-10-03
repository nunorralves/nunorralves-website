import Hero from '../components/Hero';
import { getAllPosts, Post } from './api/api';
import { GetStaticProps } from 'next';
import { PostsList } from '../components/PostsList';

type IndexProps = {
  allPosts: Post[];
};

const Index: React.FC<IndexProps> = ({ allPosts }: IndexProps) => {
  const filteredBlogPosts = allPosts
    .sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
    .slice(0, 3);

  return (
    <section>
      <Hero />
      {(!filteredBlogPosts.length && 'No posts found.') ||
        (filteredBlogPosts.length && (
          <PostsList title={'Latest Posts'} posts={filteredBlogPosts} />
        ))}
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

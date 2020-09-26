import Hero from '../components/Hero';
import LatestEntries from '../components/LatestEntries';
import { getAllPosts, Post } from '../lib/api';
import { GetStaticProps } from 'next';

interface IndexProps {
  allPosts: Post[];
}

const Index: React.FC<IndexProps> = ({ allPosts }: IndexProps) => {
  return (
    <>
      <Hero />
      <LatestEntries latestPosts={allPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: Post[] = getAllPosts(0, 3, true);

  return {
    props: { allPosts }
  };
};

export default Index;

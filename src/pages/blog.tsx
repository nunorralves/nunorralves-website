import Header from '../components/Header';

import { Footer } from '../components/Footer';
import BlogEntries from '../components/BlogEntries';
import { getAllPosts, Post } from '../lib/api';
import { GetStaticProps } from 'next';

const categories = ['SW Development', 'Electronics'];
const tags = [
  'Javascript',
  'ReactJS',
  'NextJS',
  'Arduino',
  'CSS',
  'NodeJS',
  'Express'
];

interface BlogProps {
  allPosts: Post[];
}
const Home: React.FC<BlogProps> = ({ allPosts }: BlogProps) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <BlogEntries posts={allPosts} categories={categories} tags={tags} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: Post[] = getAllPosts();

  return {
    props: { allPosts }
  };
};
export default Home;

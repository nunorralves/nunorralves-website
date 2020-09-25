import Header from '../components/Header';

import { Footer } from '../components/Footer';
import BlogEntries from '../components/BlogEntries';
import { getAllCategories, getAllPosts, getAllTags, Post } from '../lib/api';
import { GetStaticProps } from 'next';

interface BlogProps {
  allPosts: Post[];
  allCategories: string[];
  allTags: string[];
}
const Home: React.FC<BlogProps> = ({
  allPosts,
  allCategories,
  allTags
}: BlogProps) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <BlogEntries
          posts={allPosts}
          categories={allCategories}
          tags={allTags}
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: Post[] = getAllPosts();
  const allCategories: string[] = getAllCategories();
  const allTags: string[] = getAllTags();

  return {
    props: { allPosts, allCategories, allTags }
  };
};
export default Home;

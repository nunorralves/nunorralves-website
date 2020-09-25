import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestEntries from '../components/LatestEntries';
import { Footer } from '../components/Footer';
import { getAllPosts, Post } from '../lib/api';
import { GetStaticProps } from 'next';

interface IndexProps {
  allPosts: Post[];
}

const Index: React.FC<IndexProps> = ({ allPosts }: IndexProps) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <LatestEntries latestPosts={allPosts} />
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

export default Index;

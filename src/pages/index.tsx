import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestEntries from '../components/LatestEntries';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <LatestEntries latestPosts={[{ title: 'Post 1' }]} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

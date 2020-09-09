import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestEntries from '../components/LatestEntries';
import { Footer } from '../components/Footer';

const posts = [
  {
    title: 'Post #1',
    date: '1-03-2020',
    image: 'blog1.jpg',
    content: 'lorem ipsum dfgsdjkfhs sduhfslgjks dghslghdf ghdfllgdhs'
  },
  {
    title: 'Second Post',
    date: '1-03-2020',
    image: 'blog2.jpg',
    content: 'lorem ipsum dfgsdjkfhs sduhfslgjks dghslghdf ghdfllgdhs'
  },
  {
    title: 'Latest Post dsgdgdfgd fdgd fd',
    date: '1-03-2020',
    image: 'blog3.jpg',
    content: 'lorem ipsum dfgsdjkfhs sduhfslgjks dghslghdf ghdfllgdhs'
  }
];

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <LatestEntries latestPosts={posts} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

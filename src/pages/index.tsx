import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestEntries from '../components/LatestEntries';
import { Footer } from '../components/Footer';

const posts = [
  {
    title: 'Post #1',
    date: '1-03-2020',
    image: 'blog1.jpg',
    tags: ['Javascript', 'ReactsJS'],
    content:
      'lorem ipsum dfgsdjkfhs sduhfslgjks dghslghdf asfafd sdfsdjsl sdgdsjsdhgsdfjghdlfjhgdlhgd jfghdfjgh ghdfllgdhs'
  },
  {
    title: 'Second Post',
    date: '1-03-2020',
    image: 'blog2.jpg',
    tags: ['Javascript', 'ReactsJS', 'NextJS', 'CSS', 'HTML'],
    content:
      'lorem ipsum dfgsdjkfhs sduhfslgjks dghslghdf asfafd sdfsdjsl sdgdsjsdhgsdfjghdlfjhgdlhgd jfghdfjgh ghdfllgdhs'
  },
  {
    title: 'Latest Post dsgdgdfgd fdgd fd',
    date: '1-03-2020',
    image: 'blog3.jpg',
    tags: ['Electronics', 'Arduino'],
    content:
      'lorem ipsum dfgsdjkfhs sduhfslgjks dghslghdf asfafd sdfsdjsl sdgdsjsdhgsdfjghdlfjhgdlhgd jfghdfjgh ghdfllgdhs'
  }
];

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
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

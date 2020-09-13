import Header from '../components/Header';

import { Footer } from '../components/Footer';
import BlogEntries from '../components/BlogEntries';

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

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {console.log('cat1:', categories)}
        <BlogEntries posts={posts} categories={categories} tags={tags} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

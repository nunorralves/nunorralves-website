import Header from '../../components/Header';

import { Footer } from '../../components/Footer';
import { getPostBySlug, Post } from '../../lib/api';
import { GetStaticProps } from 'next';
import { Params } from 'next/dist/next-server/server/router';
import BlogEntry from '../../components/BlogEntry';

interface BlogProps {
  post: Post;
  categories: string[];
  tags: string[];
}
const PostEntry: React.FC<BlogProps> = ({
  post,
  categories,
  tags
}: BlogProps) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <BlogEntry post={post} categories={categories} tags={tags} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const getServerSideProps: GetStaticProps = async ({
  params
}: Params) => {
  const post: Post = getPostBySlug(params.slug);
  const categories: string[] = post.categories;
  const tags: string[] = post.tags;

  return {
    props: { post, categories, tags }
  };
};

export default PostEntry;

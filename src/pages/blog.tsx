import BlogEntries from '../components/BlogEntries';
import { getAllCategories, getAllPosts, getAllTags, Post } from '../lib/api';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

type BlogProps = {
  allPosts: Post[];
  allCategories: string[];
  allTags: string[];
};

const Blog: React.FC<BlogProps> = ({
  allPosts,
  allCategories,
  allTags
}: BlogProps) => {
  return (
    <BlogEntries posts={allPosts} categories={allCategories} tags={allTags} />
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { search } = context.query;

  const searchParam = Array.isArray(search) ? search[0] : search;

  const allPosts: Post[] = getAllPosts(
    0,
    100,
    true,
    'none',
    'none',
    searchParam
  );
  const allCategories: string[] = getAllCategories();
  const allTags: string[] = getAllTags();

  return {
    props: { allPosts, allCategories, allTags }
  };
};

export default Blog;

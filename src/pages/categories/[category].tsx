import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import BlogEntries from '../../components/BlogEntries';
import { getAllCategories, getAllPosts, getAllTags, Post } from '../../lib/api';

type BlogProps = {
  allPosts: Post[];
  allCategories: string[];
  allTags: string[];
};

const Categories: React.FC<BlogProps> = ({
  allPosts,
  allCategories,
  allTags
}) => {
  return (
    <BlogEntries posts={allPosts} categories={allCategories} tags={allTags} />
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { category } = context.params;
  const categoryParam = Array.isArray(category) ? category[0] : category;

  const allPosts: Post[] = getAllPosts(
    0,
    100,
    true,
    categoryParam,
    'none',
    'none'
  );
  const allCategories: string[] = getAllCategories();
  const allTags: string[] = getAllTags();

  return {
    props: { allPosts, allCategories, allTags }
  };
};

export default Categories;

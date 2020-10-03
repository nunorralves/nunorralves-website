import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths
} from 'next';
import BlogEntries from '../../components/BlogEntries';
import { getAllCategories, getAllPosts, getAllTags, Post } from '../api/api';

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

export const getStaticProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { category } = context.params;
  const categoryParam = Array.isArray(category) ? category[0] : category;

  const allPosts: Post[] = await getAllPosts(
    0,
    100,
    true,
    categoryParam,
    'none',
    'none'
  );
  const allCategories: string[] = await getAllCategories();
  const allTags: string[] = await getAllTags();

  return {
    props: { allPosts, allCategories, allTags }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCategories: string[] = await getAllCategories();

  const pathsArr = allCategories.map(cat => ({
    params: {
      category: cat
    }
  }));
  return { paths: pathsArr, fallback: false };
};

export default Categories;

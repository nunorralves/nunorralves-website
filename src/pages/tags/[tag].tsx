import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import BlogEntries from '../../components/BlogEntries';
import { getAllCategories, getAllPosts, getAllTags, Post } from '../../lib/api';

type BlogProps = {
  allPosts: Post[];
  allCategories: string[];
  allTags: string[];
};

const Tags: React.FC<BlogProps> = ({ allPosts, allCategories, allTags }) => {
  return (
    <BlogEntries posts={allPosts} categories={allCategories} tags={allTags} />
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { tag } = context.params;
  const tagParam = Array.isArray(tag) ? tag[0] : tag;

  const allPosts: Post[] = getAllPosts(0, 100, true, 'none', tagParam, 'none');
  const allCategories: string[] = getAllCategories();
  const allTags: string[] = getAllTags();

  return {
    props: { allPosts, allCategories, allTags }
  };
};

export default Tags;

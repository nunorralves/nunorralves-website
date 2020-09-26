import { getPostBySlug, Post } from '../../lib/api';
import { Params } from 'next/dist/next-server/server/router';
import BlogEntry from '../../components/BlogEntry';
import { GetServerSideProps } from 'next';

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
  return <BlogEntry post={post} categories={categories} tags={tags} />;
};

export const getServerSideProps: GetServerSideProps = async ({
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

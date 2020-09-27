import { getPostBySlug, getPostSlugs, Post } from '../../lib/api';
import BlogEntry from '../../components/BlogEntry';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths
} from 'next';

type BlogProps = {
  post: Post;
  categories: string[];
  tags: string[];
};
const PostEntry: React.FC<BlogProps> = ({
  post,
  categories,
  tags
}: BlogProps) => {
  return <BlogEntry post={post} categories={categories} tags={tags} />;
};

export const getStaticProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.params;
  const slugParam = Array.isArray(slug) ? slug[0] : slug;

  const post: Post = getPostBySlug(slugParam);
  const categories: string[] = post.categories;
  const tags: string[] = post.tags;

  return {
    props: { post, categories, tags }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostsSlug: string[] = (await getPostSlugs()).map(slug =>
    slug.replace(/\.md$/, '')
  );

  const slugArr = allPostsSlug.map(slug => ({
    params: {
      slug: slug
    }
  }));
  return { paths: slugArr, fallback: false };
};

export default PostEntry;

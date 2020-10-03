import { getPostBySlug, getPostSlugs, Post } from '../api/api';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { BlogPost } from '../../components/BlogPost';

type BlogProps = {
  slug: string;
  post: Post;
};
const PostEntry: React.FC<BlogProps> = ({ slug, post }: BlogProps) => {
  return <BlogPost slug={slug} post={post} />;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { slug } = context.params;
  const slugParam = Array.isArray(slug) ? slug[0] : slug;

  const post: Post = getPostBySlug(slugParam);

  return {
    props: { slug, post }
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

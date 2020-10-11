/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BlogPost } from '../../components/BlogPost';
import BlogSeo from '../../components/BlogSeo';

export default function BlogPostLayout({ children, frontMatter }) {
  return (
    <>
      <BlogSeo {...frontMatter} />
      <BlogPost postMetadata={frontMatter} postContent={children} />
    </>
  );
}

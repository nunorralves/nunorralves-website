/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BlogPost } from '../../BlogPost';
import BlogSeo from '../../BlogSeo';

export default function BlogPostLayout({ children, frontMatter }) {
  return (
    <>
      <BlogSeo {...frontMatter} />
      <BlogPost postMetadata={frontMatter} postContent={children} />
    </>
  );
}

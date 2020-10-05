/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BlogPost } from '../../BlogPost';

export default function BlogPostLayout({ children, frontMatter }) {
  return <BlogPost postMetadata={frontMatter} postContent={children} />;
}

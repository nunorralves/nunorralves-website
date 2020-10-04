import { ReactNode } from 'react';
import { PostMetadata } from '../../../../types/PostMetadata';
import { BlogPost } from '../../BlogPost';

type BlogPostLayoutProps = {
  children: ReactNode;
  frontMatter: PostMetadata;
};

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  children,
  frontMatter
}) => {
  return <BlogPost postMetadata={frontMatter} postContent={children} />;
};

export default BlogPostLayout;

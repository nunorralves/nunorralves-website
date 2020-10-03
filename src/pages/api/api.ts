import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/posts');

export type Post = {
  title: string;
  slug: string;
  language: string;
  author: string;
  date: string;
  coverImage: string;
  excerpt: string;
  tags: string[];
  content: string;
};

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8').toString();
  const { data, content } = matter(fileContents);

  const post: Post = {
    title: '',
    slug: '',
    language: '',
    author: '',
    date: '',
    coverImage: '',
    excerpt: '',
    tags: [],
    content: ''
  };

  post.title = data.title ? data.title : '';
  post.slug = realSlug;
  post.language = data.language ? data.language : '';
  post.author = data.author ? data.author : '';
  post.date = data.date ? data.date : '';
  post.coverImage = data.coverImage;
  post.excerpt = data.excerpt ? data.excerpt : '';
  post.tags = data.tags ? data.tags : [];
  post.content = content;

  return post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs.map(slug => getPostBySlug(slug));
}

export function getAllTags(): string[] {
  const slugs = getPostSlugs();
  const tags = slugs.flatMap(slug => getPostBySlug(slug).tags);
  return Array.from(new Set(tags));
}

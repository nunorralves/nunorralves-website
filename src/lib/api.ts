import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Tags } from '../components/CardPost/styles';

const postsDirectory = join(process.cwd(), 'src/posts');

export type Post = {
  title: string;
  slug: string;
  language: string;
  author: string;
  date: string;
  coverImage: string;
  excerpt: string;
  categories: string[];
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
    categories: [],
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
  post.categories = data.categories ? data.categories : [];
  post.tags = data.tags ? data.tags : [];
  post.content = content;

  return post;
}

export function getAllPosts(
  offset = 0,
  limit = 3,
  latest = true,
  category = 'none',
  tag = 'none',
  search = 'none'
): Post[] {
  const slugs = getPostSlugs();
  let posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter(post => {
      if (category === 'none' && tag === 'none' && search === 'none') {
        return post;
      }

      console.log('CATS:', post.categories.toString().toLowerCase());
      console.log('TAGS:', post.tags.toString().toLowerCase());
      return (
        (category !== 'none' && post.categories.includes(category)) ||
        (tag !== 'none' && post.tags.includes(tag)) ||
        (search !== 'none' &&
          (post.tags.toString().toLowerCase().includes(search.toLowerCase()) ||
            post.categories
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            post.content.toLowerCase().includes(search.toLowerCase())))
      );
    });

  if (latest) {
    posts = posts.sort((post1, post2) => (post1.date >= post2.date ? -1 : 1));
  }
  // sort posts by date in descending order
  return posts.slice(offset, offset + limit);
}

export function getAllCategories(): string[] {
  const slugs = getPostSlugs();
  const categories = slugs.flatMap(slug => getPostBySlug(slug).categories);
  return Array.from(new Set(categories));
}

export function getAllTags(): string[] {
  const slugs = getPostSlugs();
  const tags = slugs.flatMap(slug => getPostBySlug(slug).tags);
  return Array.from(new Set(tags));
}

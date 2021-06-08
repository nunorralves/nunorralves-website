export type PostMetadata = {
  layout?: string;

  language: string;
  title: string;
  author: string;
  excerpt: string;
  date: string;
  coverImage: string;
  tags: string[];
  // Generated
  slug: string;
  readingTime: string;
  __resourcePath: string;
  // Added Later
  views: string;
};

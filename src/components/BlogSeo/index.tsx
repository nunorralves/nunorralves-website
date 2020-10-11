import { NextSeo, ArticleJsonLd } from 'next-seo';
import { PostMetadata } from '../../types/PostMetadata';
import siteConfig from '../../../site.config';

const BlogSeo: React.FC<PostMetadata> = ({
  title,
  excerpt,
  date,
  slug,
  coverImage,
  author
}) => {
  const dateISO = new Date(date).toISOString();
  const blogUrl = `${siteConfig.url}/${slug}`;
  const featuredImage = {
    url: `${siteConfig.url}${coverImage}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={title}
        description={excerpt}
        canonical={blogUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: dateISO
          },
          url: blogUrl,
          title,
          description: excerpt,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        url={blogUrl}
        title={title}
        images={[featuredImage.url]}
        datePublished={dateISO}
        dateModified={dateISO}
        authorName={author}
        publisherName={author}
        publisherLogo={siteConfig.default_publisher_logo}
        description={excerpt}
      />
    </>
  );
};

export default BlogSeo;

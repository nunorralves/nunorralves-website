import Hero from '../components/Hero';
import { frontMatter as enBlogPosts } from './blog/en/**/*.mdx';
import { frontMatter as ptBlogPosts } from './blog/pt/**/*.mdx';
import { PostsList } from '../components/PostsList';
import useTranslation from '../intl/useTranslation';
import { useContext } from 'react';
import { LanguageContext } from '../intl/LanguageProvider';

const Index: React.FC = () => {
  const { translate } = useTranslation();
  const [locale] = useContext(LanguageContext);

  const filterBlogPosts = () => {
    const scannedBlogPosts = locale === 'en' ? enBlogPosts : ptBlogPosts;
    return scannedBlogPosts
      .sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
      .slice(0, 3);
  };
  const filteredBlogPosts = filterBlogPosts();

  return (
    <section>
      <Hero />
      {filteredBlogPosts && (
        <PostsList
          title={translate('latest_posts')}
          subtitle={translate('on_language')}
          postsMetadata={filteredBlogPosts}
        />
      )}
    </section>
  );
};

export default Index;

import { PostSummary } from '../PostSummary';
import { ContainerSection } from './styles';
import useTranslation from '../../intl/useTranslation';
import { PostMetadata } from '../../../types/PostMetadata';

type PostsListProps = {
  title: string;
  postsMetadata: PostMetadata[];
};

export const PostsList: React.FC<PostsListProps> = ({
  title,
  postsMetadata
}) => {
  const { translate } = useTranslation();

  return (
    <ContainerSection>
      <h2>{title}</h2>
      {(!postsMetadata || !postsMetadata.length) && translate('no_posts_found')}
      {postsMetadata &&
        postsMetadata.map(postMetadata => (
          <PostSummary key={postMetadata.title} postMetadata={postMetadata} />
        ))}
    </ContainerSection>
  );
};

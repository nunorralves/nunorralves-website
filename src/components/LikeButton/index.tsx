import { useState } from 'react';
import { Container, Heart, HeartFilled } from './styles';
import useTranslation from '../../intl/useTranslation';

type LikesProps = {
  id: string;
};

export const LikeButton: React.FC<LikesProps> = ({ id }) => {
  const [liked, setLiked] = useState('');
  const { translate } = useTranslation();

  const toggleLike = () => {
    if (liked === 'like') {
      fetch(`/api/decrement-likes?id=${encodeURIComponent(id)}`);
      setLiked('');
    } else {
      fetch(`/api/increment-likes?id=${encodeURIComponent(id)}`);
      setLiked('like');
    }
  };

  return (
    <Container onClick={toggleLike}>
      {translate('btn_like_text')}&nbsp;
      {liked === 'like' ? <HeartFilled /> : <Heart />}
    </Container>
  );
};

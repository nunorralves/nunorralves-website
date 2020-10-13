import { useState } from 'react';
import { Container, Heart, HeartFilled } from './styles';
import useTranslation from '../../intl/useTranslation';
import * as gtag from '../../lib/gtag';

type LikesProps = {
  id: string;
};

export const LikeButton: React.FC<LikesProps> = ({ id }) => {
  const [liked, setLiked] = useState('');
  const { translate } = useTranslation();

  const toggleLike = () => {
    if (liked === 'like') {
      fetch(`/api/decrement-likes?id=${encodeURIComponent(id)}`);

      gtag.event({
        action: 'Remove_Like',
        category: 'LikePage',
        label: encodeURIComponent(id),
        value: 1
      });

      setLiked('');
    } else {
      fetch(`/api/increment-likes?id=${encodeURIComponent(id)}`);

      gtag.event({
        action: 'Add_Like',
        category: 'LikePage',
        label: encodeURIComponent(id),
        value: 1
      });
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

import { useState } from 'react';
import { Container, Heart, HeartFilled } from './styles';

type LikesProps = {
  id: string;
};

export const LikeButton: React.FC<LikesProps> = ({ id }) => {
  const [liked, setLiked] = useState('oodt');

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
      Like&nbsp;
      {liked === 'like' ? <HeartFilled /> : <Heart />}
    </Container>
  );
};

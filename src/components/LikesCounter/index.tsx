import { ContainerSpan } from './styles';
import loadDb from '../../lib/db';
import { useEffect, useState } from 'react';
import useTranslation from '../../intl/useTranslation';

type LikesCounterProps = {
  id: string;
};

export const LikesCounter: React.FC<LikesCounterProps> = ({ id }) => {
  const [likes, setLikes] = useState('');
  const { translate } = useTranslation();

  useEffect(() => {
    const onLikes = newLikes => setLikes(newLikes.val());
    let db;

    const fetchData = async () => {
      db = await loadDb('likes');
      db.child(id).on('value', onLikes);
    };

    fetchData();

    return () => {
      if (db) {
        db.child(id).off('value', onLikes);
      }
    };
  }, [id]);

  const likesStr = likes
    ? parseInt(likes) === 1
      ? `${likes} ${translate('like')}`
      : `${likes} ${translate('likes')}`
    : translate('no_likes');

  return <ContainerSpan>{likesStr}</ContainerSpan>;
};

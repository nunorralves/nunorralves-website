import { ContainerSpan } from './styles';
import useTranslation from '../../intl/useTranslation';
import useSWR from 'swr';

type LikesCounterProps = {
  id: string;
};

export const LikesCounter: React.FC<LikesCounterProps> = ({ id }) => {
  const { translate } = useTranslation();

  const fetcher = async url => {
    const res = await fetch(url);
    return res.json();
  };

  const { data } = useSWR(
    `/api/page-likes?id=${id}`,
    fetcher
    // , {
    //   refreshInterval: 1
    // }
  );
  const likes = data?.total;
  // console.log('PAGE LIKES:', id, likes);

  const likesStr = likes
    ? parseInt(likes) === 1
      ? `${likes} ${translate('like')}`
      : `${likes} ${translate('likes')}`
    : translate('no_likes');

  return <ContainerSpan>{likesStr}</ContainerSpan>;
};

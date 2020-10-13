import { ContainerSpan } from './styles';
import useTranslation from '../../intl/useTranslation';
import useSWR from 'swr';

type ViewsCounterProps = {
  id: string;
};

export const ViewsCounter: React.FC<ViewsCounterProps> = ({ id }) => {
  const { translate } = useTranslation();

  const fetcher = async url => {
    const res = await fetch(url);
    return res.json();
  };

  const { data } = useSWR(`/api/page-views?id=${id}`, fetcher, {
    refreshInterval: 1
  });
  const views = data?.total;
  // console.log('PAGE VIEWS:', id, views);

  const viewsStr = views
    ? parseInt(views) === 1
      ? `${views} ${translate('view')}`
      : `${views} ${translate('views')}`
    : translate('no_views');

  return <ContainerSpan>{viewsStr}</ContainerSpan>;
};

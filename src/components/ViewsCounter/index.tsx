import { ContainerSpan } from './styles';
import loadDb from '../../lib/db';
import { useEffect, useState } from 'react';
import useTranslation from '../../intl/useTranslation';

type ViewsCounterProps = {
  id: string;
};

export const ViewsCounter: React.FC<ViewsCounterProps> = ({ id }) => {
  const [views, setViews] = useState('');
  const { translate } = useTranslation();

  useEffect(() => {
    const onViews = newViews => setViews(newViews.val());
    let db = null;

    const fetchData = async () => {
      db = await loadDb('views');
      db.child(id).on('value', onViews);
    };

    fetchData();
    //   const registerView = () =>
    //     fetch(`/api/increment-views?id=${encodeURIComponent(id)}`);

    //   if (increment) {
    //     registerView();
    //   }
    //   fetchData();

    return () => {
      if (db) {
        db.child(id).off('value', onViews);
      }
    };
  }, [id]);

  const viewsStr = views
    ? parseInt(views) === 1
      ? `${views} ${translate('view')}`
      : `${views} ${translate('views')}`
    : translate('no_views');

  return <ContainerSpan>{viewsStr}</ContainerSpan>;
};

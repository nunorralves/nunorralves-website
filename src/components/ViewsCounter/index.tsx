import { ContainerSpan } from './styles';
import loadDb from '../../lib/db';
import { useEffect, useState } from 'react';
import useTranslation from '../../intl/useTranslation';

type ViewsCounterProps = {
  id: string;
  increment: boolean;
};

export const ViewsCounter: React.FC<ViewsCounterProps> = ({
  id,
  increment = false
}) => {
  const [views, setViews] = useState('');
  const { translate } = useTranslation();

  useEffect(() => {
    const onViews = newViews => setViews(newViews.val());
    let db;

    const fetchData = async () => {
      db = await loadDb('views');
      db.child(id).on('value', onViews);
    };

    const registerView = () =>
      fetch(`/api/increment-views?id=${encodeURIComponent(id)}`);

    if (increment) {
      registerView();
    }
    fetchData();

    return () => {
      if (db) {
        db.child(id).off('value', onViews);
      }
    };
  }, [id]);

  // const viewsStr = `${views || 'no'} ${
  //   views && parseInt(views) === 1 ? translate('view') : translate('views')
  // }`;
  const viewsStr = views
    ? parseInt(views) === 1
      ? `${views} ${translate('view')}`
      : `${views} ${translate('views')}`
    : translate('no_views');

  // return `${views ? format(views) : '–––'} views`;
  return <ContainerSpan>{viewsStr}</ContainerSpan>;
};

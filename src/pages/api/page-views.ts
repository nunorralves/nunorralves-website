import { NextApiRequest, NextApiResponse } from 'next';
import dbAdmin from '../../lib/db-admin';

export default (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | firebase.database.DataSnapshot> => {
  if (!req.query.id) {
    return dbAdmin.ref('views').once('value', snapshot => {
      const views = snapshot.val();
      const allViews = Object.values(views).reduce(
        (total: number, value: number) => total + value
      );

      return res.status(200).json({
        total: allViews
      });
    });
  }

  const ref = dbAdmin.ref('views').child(req.query.id[0]);

  return ref.once('value', snapshot => {
    res.status(200).json({
      total: snapshot.val()
    });
  });
};

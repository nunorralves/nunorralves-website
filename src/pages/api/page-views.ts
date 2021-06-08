import { NextApiRequest, NextApiResponse } from 'next';
import dbAdmin from '../../lib/db-admin';
import { DataSnapshot } from 'firebase/database/dist/index.cjs';

export default (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<DataSnapshot> => {
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

  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const ref = dbAdmin.ref('views').child(id);

  return ref.once('value', snapshot => {
    // console.log('ID, VIEWS:', id, snapshot.val());
    res.status(200).json({
      total: snapshot.val()
    });
  });
};

import { NextApiRequest, NextApiResponse } from 'next';
import dbAdmin from '../../lib/db-admin';
import { DataSnapshot } from 'firebase/database/dist/index.cjs';

export default (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<DataSnapshot> => {
  if (!req.query.id) {
    return dbAdmin.ref('likes').once('value', snapshot => {
      const likes = snapshot.val();
      const allLikes = Object.values(likes).reduce(
        (total: number, value: number) => total + value
      );

      return res.status(200).json({
        total: allLikes
      });
    });
  }

  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const ref = dbAdmin.ref('likes').child(id);

  return ref.once('value', snapshot => {
    // console.log('ID, LIKES:', id, snapshot.val());
    res.status(200).json({
      total: snapshot.val()
    });
  });
};

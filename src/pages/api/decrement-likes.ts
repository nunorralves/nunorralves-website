import { NextApiRequest, NextApiResponse } from 'next';
import dbAdmin from '../../lib/db-admin';

const decrementLikes = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (!req.query.id) {
    return res.status(400).json({
      error: 'Missing "id" query parameter'
    });
  }

  const ref = dbAdmin.ref('likes').child(req.query.id[0]);
  const { snapshot } = await ref.transaction(currentLikes => {
    if (currentLikes === null || currentLikes <= 0) {
      return 0;
    }

    return currentLikes - 1;
  });

  return res.status(200).json({
    total: snapshot.val()
  });
};

export default decrementLikes;

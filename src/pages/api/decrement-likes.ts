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

  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const ref = dbAdmin.ref('likes').child(id);
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

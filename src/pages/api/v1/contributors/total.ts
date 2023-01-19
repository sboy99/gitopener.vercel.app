import { getTotalContributors } from '&/controllers/contributors';
import connectDB from '&/db/connectDB';
import { NextApiHandler } from 'next';

// end-point: origin/api/v1/contributors
const handler: NextApiHandler = async (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    // handle get request
    return getTotalContributors(req, res);
  } else {
    // error no supported method
    res.status(405).json({ message: `method is not supported` });
  }
};

export default connectDB(handler);

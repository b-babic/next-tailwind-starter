// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

export const Hello = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

// eslint-disable-next-line import/no-default-export
export default Hello;

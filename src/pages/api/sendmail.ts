import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      expires: 1484314697598
    }
  });

  try {
    // send mail with defined transport object
    console.log(req.body.from, req.body.email, req.body.message);
    await transporter.sendMail({
      from: `${req.body.from} from @${req.body.email} <${req.body.mail}>`, // sender address
      replyTo: req.body.email,
      to: process.env.GMAIL_USER, // list of receivers
      subject: 'Contact From My Blog', // Subject line
      // text: 'Hello world?', // plain text body
      html: req.body.message // html body
    });

    // console.log('Message sent: %s', info, info.accepted, info.messageId);
    res.status(200).send({ msg: 'Message sent successfully.' });
  } catch (error) {
    console.log('ERROR', error);
    res.status(500).send({ msg: 'There was an error, please try again.' });
  }
};

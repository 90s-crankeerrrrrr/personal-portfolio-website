import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {name, email, message} = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "jakechisholm06@gmail.com",
            pass: process.env.SMTP_KEY,
        }
    })

    try{
      await transporter.sendMail({
        from: email,
        to: 'jakechisholm06@gmail.com',
        subject: `Message from ${name}`,
        html: `Reply to: ${email}<br><br/>${message}`  
      })
      
      return res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (err: unknown){
      console.error(err);
      return res.status(500).json({ error: 'Failed to send email', details: err });
    }
}

import { NextApiRequest } from "next"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

export default function (req: NextApiRequest, res: any) {
  const PASSWORD = process.env.password
  const emailAuth = "vincentcapek@gmail.com"
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: emailAuth,
      pass: PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: req.body.email,
    to: emailAuth,
    subject: `Message from ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })

  return res.status(200).json({ success: true })
}

import { NextApiRequest } from "next"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import * as yup from "yup"
import { withValidation } from "next-validations"
dotenv.config()

// Validate
const schema = yup.object().shape({
  name: yup.string().required().min(3).max(255),
  email: yup.string().required().email().min(5).max(255),
  message: yup.string().required().min(10),
})

const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
})

// eslint-disable-next-line import/no-anonymous-default-export
const handler = (req: NextApiRequest, res: any) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .send({ success: false, message: "Only POST requests allowed" })
  }

  const PASSWORD = process.env.GMAIL_PASSWORD
  const emailAuth = process.env.GMAIL_MAIL
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
    replyTo: req.body.email,
    subject: `Message depuis ${req.body.name}`,
    text: req.body.message + " | Message envoyé par: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      return res.status(200).json({ success: false, message: err })
    }
  })

  return res.status(200).json({ success: true })
}

export default validate(handler)

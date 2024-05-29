import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== "development",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options);

type sendEmailDto = {
  sender: Mail.Address;
  receipients: Mail.Address[];
  subject: string;
  message: string;
};

export const sendEmail = async (dto: sendEmailDto) => {
  const { sender, receipients, subject, message } = dto;

  return await transport.sendMail({
    from: sender,
    to: receipients,
    subject,
    html: message,
    text: message,
  });
};

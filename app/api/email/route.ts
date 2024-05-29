import { sendEmail } from "@/utils/mailService";

export async function POST(req: Request) {
  const { senderEmail, senderSubject } = await req.json();

  const mailSender = process.env.MAIL_USER;

  if (!mailSender) {
    throw new Error("MAIL_SENDER is not set");
  }

  const sender = {
    name: "Portfolio App",
    address: mailSender,
  };

  const mailReceiver = process.env.MAIL_RECEIVER;

  if (!mailReceiver) {
    throw new Error("MAIL_RECEIVER is not set");
  }

  const receipients = [
    {
      name: "John Doe",
      address: mailReceiver,
    },
  ];

  try {
    const result = await sendEmail({
      sender,
      receipients,
      subject: senderSubject,
      message: `Email: ${senderEmail} Subject: ${senderSubject}`,
    });
    return Response.json({ accepted: result });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
}

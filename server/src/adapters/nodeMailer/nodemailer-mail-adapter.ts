import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from "nodemailer";

// como é de testes, tanto faz...
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5fb67acf8ee73d",
    pass: "993a2d0052aa43"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail(data: SendMailData) {
    const {subject, body} = data;

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>", 
      to: "Luiz Claudio <luizclaudiocardoso@yahoo.com>",
      subject,
      html: body
    })
  }
}
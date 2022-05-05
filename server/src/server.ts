import express from "express"
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5fb67acf8ee73d",
    pass: "993a2d0052aa43"
  }
});

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informaçõ única de uma entidade

app.post("/feedbacks", async (req, res) => {
  const {type, comment, screenshot} = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type: type,
      comment, // short sintax
      screenshot
    }
  })

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>", 
    to: "Luiz Claudio <luizclaudiocardoso@yahoo.com>",
    subject: `Novo Feedback (${type})`,
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join("\n")
  })

  return res.status(201).json({data: feedback})
})

app.listen(3333, () => {
  console.log("HTTP server is running!")
})

import nodemailer from "nodemailer"

export const emailUseCase = {
  async send({
    to,
    subject,
    body,
  }: {
    to: string
    subject: string
    body: string
  }) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ORIGIN,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter
      .sendMail({
        from: '"Qual é a Boa?" <no-reply@qualeaboa.com.br>',
        to,
        subject,
        html: body, // Aceita HTML
      })
      .then(() => {
        console.log("Email enviado com sucesso!")
      })
      .catch((err) => console.log(`erro ao enviar email: ${err}`))
  },
}

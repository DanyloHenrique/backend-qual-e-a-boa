import type { Request, Response } from "express"
import z from "zod"

import { emailUseCase } from "@/useCases/contact-useCase.js"
import { getWelcomeTemplate } from "@/utils/email-template.js"

const contactSchame = z.object({
  email: z.email(),
})

export const contactController = {
  async sendContact(request: Request, response: Response) {
    const { email } = contactSchame.parse(request.body)

    await emailUseCase.send({
      to: email,
      subject: `Obrigado por se inscrever!`,
      body: getWelcomeTemplate(),
    })

    return response.status(200).send({ message: "Email enviado com sucesso!" })
  },
}

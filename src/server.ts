import cors from "cors"
import express, { type Request, type Response } from "express"
import { z } from "zod"

import { prisma } from "../lib/prisma.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // credentials: true
}
app.use(cors(corsOptions))

app.get("/category", async (_req: Request, response: Response) => {
  const allCategory = await prisma.category.findMany()

  response.status(200).send({
    data: allCategory,
    message: "Dados encontrados com sucesso",
  })
})

app.post("/category", async (request: Request, response: Response) => {
  const categorySchema = z.object({
    name: z.string(),
  })

  const { name } = categorySchema.parse(request.body)

  await prisma.category.create({
    data: {
      name,
    },
  })

  response.status(201).send({ message: "Categoria criada com sucesso!" })
})

const port = process.env.PORT ? Number(process.env.PORT) : 3000
app.listen(port, "0.0.0.0", () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`)
})

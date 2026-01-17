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

app.get("/", (req, res) => {
  res.send("Hello World!")
})

const port = process.env.PORT ? Number(process.env.PORT) : 3000
app.listen(port, "0.0.0.0", () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`)
})

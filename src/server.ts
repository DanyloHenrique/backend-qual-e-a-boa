import cors from "cors"
import express from "express"

import routerCategory from "@/routes/category-router.js"
import { routerEvent } from "@/routes/event-router.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // credentials: true
}
app.use(cors(corsOptions))

app.use(routerCategory)
app.use(routerEvent)

const port = process.env.PORT ? Number(process.env.PORT) : 3000
app.listen(port, "0.0.0.0", () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`)
})

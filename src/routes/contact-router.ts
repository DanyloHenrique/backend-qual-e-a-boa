import express from "express"

import { contactController } from "@/controller/contact-controller.js"

const contactRouter = express.Router()

contactRouter.post("/contact", contactController.sendContact)

export {contactRouter}
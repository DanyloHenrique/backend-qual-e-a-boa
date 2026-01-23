import express from "express"

import { eventController } from "@/controller/event-controller.js"

const routerEvent = express.Router()

routerEvent.post("/event", eventController.create)
routerEvent.get("/event", eventController.getMany)
routerEvent.get("/event/:id", eventController.getById)
routerEvent.put("/event/:id", eventController.update)
routerEvent.delete("/event/:id", eventController.delete)

export { routerEvent }

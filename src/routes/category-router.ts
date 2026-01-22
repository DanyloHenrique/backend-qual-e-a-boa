import express from "express"

import { categoryController } from "@/controller/category-controller.js"

const routerCategory = express.Router()

routerCategory.get("/category", categoryController.getMany)

routerCategory.post('/category', categoryController.create)

routerCategory.delete('/category/:id', categoryController.delete)

export default routerCategory

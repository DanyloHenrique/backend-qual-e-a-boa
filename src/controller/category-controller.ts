import type { Request, Response } from "express"
import z from "zod"

import { categoryUseCase } from "@/useCases/category-useCase.js"

const categorySchema = z.object({
  name: z.string(),
})

export const categoryController = {
  async create(request: Request, response: Response) {
    try {
      const { name } = categorySchema.parse(request.body)
      const { category } = await categoryUseCase.create({ name })

      return response.status(201).json({
        success: true,
        message: "Categoria criada com sucesso!",
        payload: category,
      })
    } catch (err: any) {
      if (err.name === "ZodError") {
        return response.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: err.errors,
        })
      }
      return response.status(400).json({
        success: false,
        message: err.message,
      })
    }
  },

  async getMany(request: Request, response: Response) {
    try {
      const categorylist = await categoryUseCase.getMany()

      return response.status(200).json({
        message: "Categorias encontradas!",
        payload: categorylist,
      })
    } catch (err: any) {
      console.log(err)
      // return response.status(500).json({
      //   message: "Erro ao buscar categorias",
      // })
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const id = z.coerce.number().parse(request.params.id) //converte id para numero

      await categoryUseCase.delete(id)

      return response.status(204).send()
    } catch (err: any) {
      return response.status(400).json({
        message: err.message,
      })
    }
  },
}

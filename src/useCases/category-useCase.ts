import type { CategoryDTO } from "@/domain/category/category.DTO.js"
import { Category } from "@/domain/category/category.model.js"
import { categoryRepository } from "@/repository/category-repository.js"

export const categoryUseCase = {
  async create({ name }: CategoryDTO) {
    if (!name) throw new Error("Dados faltando na requisição")

    const categoryObj = new Category({
      name,
    })

    const categoryCreated = await categoryRepository.create(categoryObj)

    if (!categoryCreated) throw new Error("Erro ao criar categoria")

    return categoryCreated
  },

  async getMany() {
    const { categoryList } = await categoryRepository.getMany()

    return categoryList
  },

  async delete(id: number) {
    await categoryRepository.delete({ id })
  },
}

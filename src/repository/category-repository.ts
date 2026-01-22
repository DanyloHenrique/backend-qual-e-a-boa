import { Category } from "@/domain/category/category.model.js"
import { prisma } from "@/lib/prisma.js"

export const categoryRepository = {
  async create(categoryData: Category) {
    const categoryCreated = await prisma.category.create({
      data: {
        name: categoryData.getName(),
      },
      select: {
        name: true,
      },
    })

    if (!categoryCreated) return null

    const categoryObjResult = new Category(categoryCreated)
    return { category: categoryObjResult.toObject() }
  },

  async getMany() {
    const categorylist = await prisma.category.findMany()

    const categoryObjResult = categorylist.map(
      (categoryItem) => new Category(categoryItem),
    )
    return {
      categoryList: categoryObjResult.map((category) => category.toObject()),
    }
  },

  async delete({ id }: { id: number }) {
    await prisma.category.delete({
      where: { id },
    })
  },
}

import type { CategoryDTO } from "./category.DTO.js"

export class Category {
  readonly id: number
  private name: string

  constructor({ name, id }: CategoryDTO & { id?: number }) {
    this.id = id || 0
    this.name = name
  }

  public toObject() {
    return {
      id: this.id,
      name: this.name,
    }
  }

  public getName() {
    return this.name
  }

  public setName(name: string) {
    this.name = name
    return this.name
  }
}

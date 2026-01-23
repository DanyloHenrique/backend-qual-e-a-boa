export interface EventDTO {
  title: string
  description: string
  date: Date
  location: string
  address: string

  price?: number
  capacity?: number
  coverImage?: string
  tags: string[]

  organization: string

  categoryId: number
}

export interface EventCreatedDTO {
  id: string
  title: string
  createdAt: Date
}

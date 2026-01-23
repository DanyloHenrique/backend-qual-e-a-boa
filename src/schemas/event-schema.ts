import z from "zod"

const eventSchema = z.object({
  title: z.string(),
  description: z.string(),

  date: z.coerce.date(),

  location: z.string(),
  address: z.string(),

  price: z.number().optional(),
  capacity: z.number().int().optional(),
  coverImage: z.url().optional(),

  tags: z.array(z.string()),

  organization: z.string(),
  categoryId: z.number().int(),
})

const eventCreateBodySchema = eventSchema
const eventUpdateBodySchame = eventSchema.partial()
const eventParamsSchema = z.object({
  id: z.uuid("ID inválido"),
})

export { eventCreateBodySchema, eventUpdateBodySchame, eventParamsSchema }

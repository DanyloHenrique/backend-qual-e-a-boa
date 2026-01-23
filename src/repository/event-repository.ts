import { Event } from "@/domain/event/event.model.js"
import { prisma } from "@/lib/prisma.js"

export const eventRepository = {
  async create(eventData: Event) {
    const data = eventData.toObject()
    const eventCreated = await prisma.event.create({
      data: {
        title: data.title,
        description: data.description,
        date: data.date,
        location: data.location,
        address: data.address,

        price: data.price,
        capacity: data.capacity,
        coverImage: data.coverImage,
        tags: data.tags,

        organization: data.organization,

        categoryId: data.categoryId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      },
      select: {
        title: true,
      },
    })
    return eventCreated
  },

  async getUnique({ id }: { id: string }) {
    const eventFound = await prisma.event.findUnique({
      where: {
        id: id,
      },
    })

    if (!eventFound) return null

    const {
      title,
      description,
      date,
      location,
      address,
      price,
      capacity,
      coverImage,
      tags,
      organization,
      categoryId,
      createdAt,
      updatedAt,
    } = eventFound

    const eventObj = new Event({
      id: eventFound.id,
      title,
      description,
      date,
      location,
      address,
      price: price ?? undefined,
      capacity: capacity ?? undefined,
      coverImage: coverImage ?? undefined,
      tags,
      organization,
      categoryId,
      createdAt,
      updatedAt,
    })

    return eventObj
  },

  async getMany() {
    const eventsList = await prisma.event.findMany()

    const eventsListObj: Event[] = eventsList.map((event) => {
      const {
        title,
        description,
        date,
        location,
        address,
        price,
        capacity,
        coverImage,
        tags,
        organization,
        categoryId,
        createdAt,
        updatedAt,
      } = event

      return new Event({
        title,
        description,
        date,
        location,
        address,
        price: price ?? undefined,
        capacity: capacity ?? undefined,
        coverImage: coverImage ?? undefined,
        tags,
        organization,
        categoryId,
        createdAt,
        updatedAt,
      })
    })

    return eventsListObj
  },

  async updated(eventData: Event): Promise<void>{
    const data = eventData.toObject()
    await prisma.event.update({
      where: {id: data.id},
      data: {
          title: data.title,
          description: data.description,
          date: data.date,
          location: data.location,
          address: data.address,
  
          price: data.price,
          capacity: data.capacity,
          coverImage: data.coverImage,
          tags: data.tags,
  
          organization: data.organization,
  
          categoryId: data.categoryId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,

      }
    })
  },

  async delete({ id }: { id: string }) {
    await prisma.event.delete({
      where: {
        id: id,
      },
    })
  },
}

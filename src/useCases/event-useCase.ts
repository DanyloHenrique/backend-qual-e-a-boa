import type { EventDTO } from "@/domain/event/event.DTO.js"
import { Event } from "@/domain/event/event.model.js"
import { eventRepository } from "@/repository/event-repository.js"

export const eventUseCase = {
  async create(eventData: EventDTO) {
    const eventObj = new Event(eventData)
    const eventCreated = await eventRepository.create(eventObj)
    return eventCreated
  },

  async getById({ id }: { id: string }) {
    const eventFound = await eventRepository.getUnique({ id })
    if (!eventFound) throw Error("Nenhum evento encontrado")
    return eventFound
  },

  async getMany() {
    const eventList = await eventRepository.getMany()
    return eventList
  },

  async update({
    id,
    dataToUpdateEvent,
  }: {
    id: string
    dataToUpdateEvent: Partial<EventDTO>
  }) {
    const eventFound = await eventRepository.getUnique({ id })
    if (!eventFound) throw Error("Evento não encontrado")

    //realizar a mescla entre evento encontrado e dados recebidos por parametro
    const updateEvent = {
      ...eventFound.toObject(),
      ...dataToUpdateEvent,
      updatedAt: new Date(),
    }

    //new object
    const eventObj = new Event(updateEvent)

    const eventUpdated = eventRepository.updated(eventObj)
    return eventUpdated
  },

  async delete(id: string) {
    const eventFound = await eventRepository.getUnique({ id })
    if (!eventFound) {
      throw Error("Evento não encontrado para exclusão")
    }
    await eventRepository.delete({ id })
  },
}

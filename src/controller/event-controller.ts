import type { Request, Response } from "express"

import {
  eventCreateBodySchema,
  eventParamsSchema,
  eventUpdateBodySchame,
} from "@/schemas/event-schema.js"
import { eventUseCase } from "@/useCases/event-useCase.js"

export const eventController = {
  async create(request: Request, response: Response) {
    try {
      const eventBody = eventCreateBodySchema.parse(request.body)
      const eventCreated = await eventUseCase.create(eventBody)
      return response.status(201).send({
        payload: eventCreated,
        message: "Evento criado com sucesso!",
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido"

      return response
        .status(400)
        .send({ error: errorMessage, message: "Erro ao criar evento" })
    }
  },

  async getById(request: Request, response: Response) {
    try {
      const { id } = eventParamsSchema.parse(request.params)

      const eventFound = await eventUseCase.getById({ id })
      return response.status(200).send({
        payload: eventFound,
        message: "Evento encontrado!",
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido"

      return response
        .status(400)
        .send({ error: errorMessage, message: "Erro ao buscar evento" })
    }
  },

  async getMany(request: Request, response: Response) {
    try {
      const eventListFound = await eventUseCase.getMany()
      return response.status(200).send({
        payload: eventListFound,
        message: "Lista de eventos encontrados",
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido"

      return response.status(400).send({
        error: errorMessage,
        message: "Erro ao buscar lista de eventos",
      })
    }
  },

  async update(request: Request, response: Response) {
    try {
      const dataToUpdateEvent = eventUpdateBodySchame.parse(request.body)
      const { id } = eventParamsSchema.parse(request.params)

      await eventUseCase.update({ id, dataToUpdateEvent })

      return response.status(200).send({
        message: "Evento atualizado com sucesso!",
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido"
      return response
        .status(400)
        .send({ error: errorMessage, message: "Erro ao atualizar evento" })
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const { id } = eventParamsSchema.parse(request.params)

      await eventUseCase.delete(id)

      return response.status(200).send({
        message: "Evento deletado com sucesso!",
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido"
      return response
        .status(400)
        .send({ error: errorMessage, message: "Erro ao deletar evento" })
    }
  },
}

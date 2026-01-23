import { randomUUID } from "node:crypto"

import type { EventDTO } from "./event.DTO.js"

type EventProps = EventDTO & {
  id?: string
  createdAt?: Date
  updatedAt?: Date
}

export class Event {
  readonly id: string
  private title: string
  private description: string
  private date: Date
  private location: string
  private address: string
  private price?: number
  private capacity?: number
  private coverImage?: string
  private tags: string[]
  private organization: string
  private categoryId: number
  readonly createdAt: Date
  private updatedAt?: Date

  constructor(props: EventProps) {
    this.id = props.id ?? randomUUID()
    this.title = props.title
    this.description = props.description
    this.date = props.date
    this.location = props.location
    this.address = props.address
    this.price = props.price ?? undefined
    this.capacity = props.capacity ?? undefined
    this.coverImage = props.coverImage ?? undefined
    this.tags = props.tags
    this.organization = props.organization
    this.categoryId = props.categoryId
    this.createdAt = props.createdAt ?? new Date()
    this.updatedAt = props.updatedAt
  }

  public toObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      date: this.date,
      location: this.location,
      address: this.address,
      price: this.price,
      capacity: this.capacity,
      coverImage: this.coverImage,
      tags: this.tags,
      organization: this.organization,
      categoryId: this.categoryId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }

  public getTitle(): string {return this.title;}
  public getDescription(): string { return this.description; }
  public getDate(): Date { return this.date; }
  public getLocation(): string { return this.location; }
  public getAddress(): string { return this.address; }
  public getPrice(): number | undefined { return this.price; }
  public getCapacity(): number | undefined { return this.capacity; }
  public getCoverImage(): string | undefined { return this.coverImage; }
  public getTags(): string[] { return this.tags; }
  public getOrganization(): string { return this.organization; }
  public getCategoryId(): number { return this.categoryId; }
  public getUpdatedAt(): Date | undefined { return this.updatedAt; }
}

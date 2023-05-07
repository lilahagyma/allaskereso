export class JobOffer {
  name: string
  description: string
  employerId: string

  constructor(name: string, description: string, employerId: string) {
    this.name = name
    this.description = description
    this.employerId = employerId
  }
}

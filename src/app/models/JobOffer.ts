export class JobOffer {
  name: string
  description: string
  employerId: string

  constructor(name: string, descrtiption: string, employerId: string) {
    this.name = name
    this.description = descrtiption
    this.employerId = employerId
  }
}

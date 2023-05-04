export class Qualification {
  type: string
  name: string

  constructor(type: string, name: string) {
    this.type = type
    this.name = name
  }

  toObject () {
    return {
      "type": this.type,
      "name": this.name
    }
  }
}

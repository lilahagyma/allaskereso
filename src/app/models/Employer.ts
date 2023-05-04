export class Employer {
  name: string
  email: string
  taxId: string
  address: string

  constructor(name: string, email: string, taxId: string, address: string) {
    this.name = name;
    this.email = email;
    this.address = address
    this.taxId = taxId
  }
}

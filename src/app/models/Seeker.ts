export class Seeker {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  toObject () {
    return {
      "name": this.name,
      "email": this.email
    }
  }
}

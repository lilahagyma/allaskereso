export class Experience {
  job: string
  years: number

  constructor(job: string, years: number) {
    this.job = job;
    this.years = years;
  }

  toObject () {
    return {
      "job": this.job,
      "years": this.years
    }
  }
}

import { Component } from '@angular/core';
import { JobOffer } from 'src/app/models/JobOffer';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent {
  hirdetesek: Array<JobOffer> = []

  constructor(protected data: DataService, protected auth: AuthService) { }

  ngOnInit() {
    this.data.getMyOffers(result => this.hirdetesek = result);
  }

  async onDeleteClicked(offer: JobOffer) {
    await this.data.deleteJob(offer);
    alert("Hirdetés sikeresen törölve.")
    setTimeout(() => {
      location.reload()
    }, 500);
  }
}

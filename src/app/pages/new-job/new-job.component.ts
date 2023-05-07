import { Component } from '@angular/core';
import { JobOffer } from 'src/app/models/JobOffer';
import { NavbarComponent } from 'src/app/partials/navbar/navbar.component';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent {
  constructor(protected data: DataService, protected auth: AuthService) { }

  async onNewJobClicked(name: string, description: string) {
    let uid = this.auth.currentUser?.uid;
    if (!uid)
      return;
    await this.data.addNewJob(new JobOffer(name, description, uid));
    alert("Hirdetés sikeresen közzétéve.")
    location.reload()
  }
}

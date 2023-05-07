import { Component } from '@angular/core';
import { JobAppplication } from 'src/app/models/JobApplication';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hirdetesek: Array<any> = []
  jelentkezesek: Array<string> = []

  constructor(protected data: DataService, protected auth: AuthService) { }

  ngOnInit() {
    this.data.getAllOffers(res => this.hirdetesek = res)
    this.data.getMyApplications(res => {this.jelentkezesek = res; console.log(res)})
  }

  async onApplyPressed(jobId: string) {
    let uid = this.auth.currentUser?.uid;
    if (!uid)
      return

    await this.data.addApplication(new JobAppplication(jobId, uid))
    location.reload()
  }

  async onDeapplyPressed(jobId: string) {
    let uid = this.auth.currentUser?.uid;
    if (!uid)
      return

    await this.data.deleteApplication(new JobAppplication(jobId, uid))
    setTimeout(() => {
      location.reload()
    }, 500);
  }
}

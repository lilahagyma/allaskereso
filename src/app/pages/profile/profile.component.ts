import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Qualification } from 'src/app/models/Qualification';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showNewExperience: boolean = false;
  showNewEducation: boolean = false;
  showNewLanguageSkills: boolean = false;

  qualificationForm = new FormGroup({
    type: new FormControl(''),
    name: new FormControl('')
  })

  qualifications: Array<Qualification> = []

  constructor(private _snackBar: MatSnackBar, protected data: DataService, protected auth: AuthService) {
    data.getQualifications(res => this.qualifications = res)
  }

  onSubmitQualification() {
    let values = this.qualificationForm.value
    let uid = this.auth.currentUser?.uid
    if (!values.type || !values.name || !uid) {
      return;
    }
    this.data.addQualification(new Qualification(values.type, values.name, uid))
  }

  async updateName(newName: string) {
    await this.data.updateName(newName)
    this.openSnackBar("Név felülírva", "OK");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

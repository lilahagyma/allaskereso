import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
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

  constructor(private _snackBar: MatSnackBar, protected data: DataService) {}

  async updateName(newName: string) {
    await this.data.updateName(newName)
    this.openSnackBar("Név felülírva", "OK");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

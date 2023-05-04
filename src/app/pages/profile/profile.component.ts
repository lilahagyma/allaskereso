import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showNewExperience: boolean = false;
  showNewEducation: boolean = false;
  showNewLanguageSkills: boolean = false;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

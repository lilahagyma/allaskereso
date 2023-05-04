import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showNewExperience: boolean = false;
  showNewEducation: boolean = false;
  showNewLanguageSkills: boolean = false;

  tapasztalatok = []

  modifySeeker(nev: string, telefonszam: string, iranyitoszam: string, kozterulet: string, hazszam: string, emelet: string, ajto: string) {

  }

  deleteTapasztalat(tapasztalat: Array<any>) {

  }

  addTapasztalat(munkakor: string, munkaado: string, mettol: string, meddig: string) {

  }

  addVegzettseg(nev: string, tipus: string, kezdete: string, vege: string) {

  }

  addNyelvismeret(nyelv: string, szint: string) {

  }
}

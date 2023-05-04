import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Seeker } from 'src/app/models/Seeker';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register-seeker',
  templateUrl: './register-seeker.component.html',
  styleUrls: ['./register-seeker.component.css']
})
export class RegisterSeekerComponent {

  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordAgain: new FormControl(''),
  })

  constructor(protected auth: AuthService, protected router: Router, protected data: DataService) { }

  async onSubmit() {
    let values = this.formGroup.value
    if (values.name == '' || values.email == '' || values.password == '') {
      alert("Minden mezőt tölts ki!")
      return;
    }
    if (values.password != values.passwordAgain) {
      alert("A jelszavak nem egyeznek")
      return;
    }
    if (!values.email?.includes("@") || !values.email?.includes(".")) {
      alert("Helyes email adj meg!")
      return;
    }
    if (!values.email || !values.password || !values.name) {
      alert("Ismeretlen hiba történt")
      return
    }
    let user = await this.auth.register(values.email, values.password);
    if (!user || !user.user) {
      alert("Hiba történt a regisztráció során");
      return;
    }
    let result = await this.data.uploadSeekerData(user.user.uid, new Seeker(values.name, values.email))
    if (result) {
      alert("Sikeres regisztráció!")
      this.auth.authLevel = 1;
      this.router.navigate(["home"])
    }
  }
}

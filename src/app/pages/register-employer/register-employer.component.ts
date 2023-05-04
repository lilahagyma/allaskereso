import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employer } from 'src/app/models/Employer';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.css']
})
export class RegisterEmployerComponent {
  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordAgain: new FormControl(''),
    taxId: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(protected auth: AuthService, protected router: Router, protected data: DataService) { }

  async onSubmit() {
    let values = this.formGroup.value
    if (values.name == '' || values.email == '' || values.password == '' || values.taxId == '' || values.address == '' ) {
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
    if (!values.email || !values.password || !values.name || !values.taxId || !values.address) {
      alert("Ismeretlen hiba történt")
      return
    }
    let user = await this.auth.register(values.email, values.password);
    if (!user || !user.user) {
      alert("Hiba történt a regisztráció során");
      return;
    }
    let result = await this.data.uploadEmployerData(user.user.uid, new Employer(values.name, values.email, values.taxId, values.address))
    if (result) {
      alert("Sikeres regisztráció!")
      this.auth.authLevel = 2;
      this.router.navigate(["home"])
    }
  }
}

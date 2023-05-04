import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(protected auth: AuthService) { }

  onSubmit() {
    let values = this.formGroup.value

    if (!values.email || !values.password) {
      alert("Hiba történt")
      return;
    }

    this.auth.signIn(values.email, values.password);
  }
}

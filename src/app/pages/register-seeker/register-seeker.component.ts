import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-seeker',
  templateUrl: './register-seeker.component.html',
  styleUrls: ['./register-seeker.component.css']
})
export class RegisterSeekerComponent {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordAgain: new FormControl(''),
  })

  onSubmit() {
    let email = this.registerForm.value["email"]
  }
}

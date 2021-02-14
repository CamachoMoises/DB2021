import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  conditions = false;
  RegisterForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    terms: new FormControl(false, Validators.requiredTrue),
  });
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onRegister() {
    const { email, password } = this.RegisterForm.value;
    console.log(email, password);
    this.authService.register(email, password);
  }
}

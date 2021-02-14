import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  conditions = false;
  LoginForm = new FormGroup({
    user: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-z]{2,254}'),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[^a-z]{2,254}'),
    ]),
    terms: new FormControl(false, Validators.requiredTrue),
  });
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onLogin() {
    this.router.navigate(['/']);
  }
}

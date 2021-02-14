import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  UsetData: any;
  constructor(public auth: AngularFireAuth, public router: Router) {}

  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.router.navigate(['/']);
      return result;
    } catch (error) {
      window.alert(error.message);
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.auth.signOut();
      this.router.navigate(['/auth/login']);
    } catch (error) {
      window.alert(error.message);
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      this.router.navigate(['auth/login']);
    } catch (error) {
      window.alert(error.message);
    }
  }
  async getCurrentUser() {
    return this.auth.authState.pipe(first()).toPromise();
  }
}

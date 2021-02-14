import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  @Output() toogleSidebarForMe: EventEmitter<any> = new EventEmitter();
  UserLog = false;
  user: any;

  constructor(private authservice: AuthService) {}

  async ngOnInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
    console.log('Header');
    this.checkUser();
  }
  toogleSideBar() {
    this.toogleSidebarForMe.emit();
  }
  async logout() {
    console.log('Bye');
    await this.authservice.logout();
    this.checkUser();
  }
  async checkUser() {
    this.user = await this.authservice.getCurrentUser();
    if (this.user) {
      console.log('User->', this.user.email);
      this.UserLog = true;
    } else {
      console.log('tas fuera bb');
      this.UserLog = false;
    }
  }
}

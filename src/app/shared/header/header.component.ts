import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toogleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
  toogleSideBar() {
    this.toogleSidebarForMe.emit();
  }
}

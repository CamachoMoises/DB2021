import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
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

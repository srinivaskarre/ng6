import { Component, OnInit } from '@angular/core';


import {Observer} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUrl: string;
  constructor() { }

  ngOnInit() {
  }

}

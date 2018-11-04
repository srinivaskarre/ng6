import { Component, OnInit } from '@angular/core';

import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;
  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data=> this.users$=data
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataserviceService } from '../dataservice.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;
  constructor(private data: DataserviceService,private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params=> this.user$=params.id
    )
  }

  ngOnInit() {
    this.data.getUsersById(this.user$).subscribe(
        data=> this.user$=data
    )
  }

}

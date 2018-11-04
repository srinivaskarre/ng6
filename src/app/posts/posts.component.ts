import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$:Object;
  constructor(private data:DataserviceService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data=> this.posts$=data
    )
  }

}

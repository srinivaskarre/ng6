import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUsersById(userid){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userid)
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

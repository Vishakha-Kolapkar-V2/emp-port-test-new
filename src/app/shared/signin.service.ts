import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  activeUserArray: any[] = [];

  constructor(private http: HttpClient) { }

  addListing(user: any) {
    this.activeUserArray.push(user);
  }

  getActiveUsers() {
    return this.activeUserArray;
  }
  deleteActiveUsers(id:number){
    return this.http.delete('http://localhost:3000/employee/' +id,).pipe(map((res:any)=>
    {
        return res;
    }));
}
}




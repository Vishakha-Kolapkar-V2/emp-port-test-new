import { Component, OnInit } from '@angular/core';
import { SigninService } from '../shared/signin.service';
import { HttpClient } from '@angular/common/http';

import { elementAt, map } from 'rxjs/operators';

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css']
})
export class ActiveuserComponent implements OnInit {
  activeUserArray: any[] = [];
  itemsPerPage: number = 3;
  currentPage: number = 1;
  searchTerm: string = '';
  filteredUsers: any[] = [];
  "isEdit": false;

  constructor(private signInService: SigninService, private http: HttpClient) { }

  ngOnInit() {
    this.getAllProp();
  }

  getAllProp() {
    this.http.get('http://localhost:3000/employee').pipe(
      map((res: any) => {
        this.activeUserArray = res;
        this.filteredUsers = [...res];
      })
    ).subscribe();
  }

  get pagedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }

  searchTasks() {
    const searchText = this.searchTerm.toLowerCase().trim();
    this.filteredUsers = this.activeUserArray.filter(user => {
      return (
        user.firstname.toLowerCase().includes(searchText)
       
      );
    });
    this.currentPage = 1;
  }
  onDeleteEmployee(id:string){
    this.http.delete('http://localhost:3000/employee/' + id)
    .subscribe((response) => {
      this.activeUserArray = this.activeUserArray.filter(user => {
        return (
          user.id != id
        );
      });
      this.filteredUsers = [...this.activeUserArray];
    });
  }
  onEdit(item: any){
    debugger
    this.activeUserArray.forEach(element => {
      element.isEdit = false
    });
    item.isEdit = true;
  }
}

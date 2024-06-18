import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tablesSizes: any = [5,10,15,20];

  constructor(private userService: UsersService){}

ngOnInit(): void{
  this.userList();
}
  userList():void{
    this.userService.getAll().subscribe((res)=>{
      this.POSTS = res;
      console.log(this.POSTS);
    })
  }

  onTableDataChange(event:any){
    this.page = event;
    this.userList();
  }

  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.userList();
  }
}

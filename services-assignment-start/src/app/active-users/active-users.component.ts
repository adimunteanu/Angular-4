import { CounterService } from './../counter.service';
import { UsersService } from 'app/users.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private usersService: UsersService,private counterService:CounterService){}
  ngOnInit(){
    this.users=this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.usersService.userSetToInactive.emit(id);
  }
}

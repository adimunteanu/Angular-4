import { CounterService } from './../counter.service';
import { UsersService } from 'app/users.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  
  constructor(private usersService: UsersService,private counterService:CounterService){}
  ngOnInit(){
    this.users=this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.usersService.userSetToActive.emit(id);
  }
}

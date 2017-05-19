import { CounterService } from './counter.service';
import { UsersService } from 'app/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers=[];
  inactiveUsers=[];
  counter:number;
  constructor(private usersService: UsersService,private counterService:CounterService){
    this.usersService.userSetToActive.subscribe((id:number) =>{
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.count();
        this.counter=this.counterService.i;
        console.log(this.counterService.i);
      }
    );
    this.usersService.userSetToInactive.subscribe((id:number) =>{
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.count();
        this.counter=this.counterService.i;
        console.log(this.counterService.i);
      }
    );
  }
  ngOnInit(){
    this.counter=this.counterService.i;
    this.activeUsers=this.usersService.activeUsers;
    this.inactiveUsers=this.usersService.inactiveUsers;
  }
}

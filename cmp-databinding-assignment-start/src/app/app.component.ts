import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds=[];
  evens=[];
  onGameStarted(element:{i:number}){
    if(element.i%2!==0) this.odds.push(element.i);
    else this.evens.push(element.i);
  }
}

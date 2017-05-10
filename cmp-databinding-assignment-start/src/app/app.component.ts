import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements=[];
  onGameStarted(element:{i:number}){
    this.elements.push(element.i);
  }
}

import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted=new EventEmitter<{i:number}>();

  onStartGame(){
      var x=1;
      var test=this.gameStarted;
      var ref=setInterval(function(){
        console.log(x);
        test.emit({i:x});
        x++;
      },1000);
  }

  constructor() { }

  ngOnInit() {
  }

}

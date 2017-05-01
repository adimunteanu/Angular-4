import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph=true;
  ok=false;
  i:number=1;
  buttonClicks=[];
  toggleParagraph(){
    this.buttonClicks.push(this.i);
    console.log(this.buttonClicks);
    this.i++;
    if(this.i===5){
      this.ok;
    }
    if(this.showParagraph){
      this.showParagraph=false;
    }
    else {
      this.showParagraph=true;
    }
  }
  toggleParagraphDisplay(){
    return this.showParagraph ? 'inline' : 'none';
  }
  
}

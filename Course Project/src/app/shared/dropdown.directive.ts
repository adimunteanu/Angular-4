import {Directive,HostBinding,HostListener} from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') openClass=false;
  @HostListener('click') toggleOpenClass(){
    if(!this.openClass){
      this.openClass=true;
    } else {
      this.openClass=false;
    }
  }
}

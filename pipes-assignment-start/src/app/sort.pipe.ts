import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any) {
    let servers=[];
    for(const server of value){
      servers.push(server);
    }
    servers.sort(function(a,b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });
    return servers;
  }

}

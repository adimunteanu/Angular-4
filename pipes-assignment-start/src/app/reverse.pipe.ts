import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverse'
})

export class ReversePipe implements PipeTransform {
    transform (value: any){
        const strArray = value.split('');
        strArray.reverse();
        value = strArray.join('');
        return value;
    }
}
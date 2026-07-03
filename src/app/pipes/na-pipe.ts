import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
})
export class NaPipe implements PipeTransform {
  transform(value: any, defualtText: string): unknown { 
    if(value == '' || value == undefined || value == null) {
      return  defualtText
    } else {
      return value;
    } 
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {

  transform(value: any): unknown { 
    return value.fName + " "+ value.mName +" "+ value.lName;
  }

}

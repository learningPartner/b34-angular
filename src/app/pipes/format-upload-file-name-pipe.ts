import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUploadFileName',
})
export class FormatUploadFileNamePipe implements PipeTransform {
  transform(value: string): unknown {

    const fileName = value.split("_");
    const fileExtension =  value.split(".")
    debugger;
    return fileName[0] + "." + fileExtension[1];
  }
}

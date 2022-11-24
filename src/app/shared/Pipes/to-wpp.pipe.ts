import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toWpp'
})
export class ToWppPipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value != "string")
      return value;
    value = value.replace(/(<p.*?>)/g, '');
    value = value.replace(/(<\/p.*?>)/g, '%0A');
    value = value.replace(/(<\/?span.*?>)/g, '');

    value = value.replace(/(<strong.*?>\s*)/g, '%20*');
    value = value.replace(/(\s*<\/strong.*?>)/g, '*%20');

    value = value.replace(/(<em.*?>\s*)/g, '%20_');
    value = value.replace(/(\s*<\/em.*?>)/g, '_%20');

    value = value.replace(/(<s.*?>\s*)/g, '%20~');
    value = value.replace(/(\s*<\/s.*?>)/g, '~%20');
       
    value = value.replace(/(<\/?br.*?>)/g, '');

    return value;
  }

}

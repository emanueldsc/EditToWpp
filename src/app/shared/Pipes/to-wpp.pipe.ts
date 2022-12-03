import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toWpp'
})
export class WppPipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value != "string")
      return value;
    value = value.replace(/(<p.*?>)/g, '');
    value = value.replace(/(<\/p.*?>)/g, '%0A');
    value = value.replace(/(<\/?span.*?>)/g, '');

    value = value.replace(/(<\/?br>)/g, '');

    return value;
  }

}

@Pipe({
  name: 'underline'
})
export class UnderlinePipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value != "string")
      return value;
    value = value.replace(/(<s>)/g, '%20~');
    value = value.replace(/(<\/s>)/g, '~%20');
    return value;
  }
}

@Pipe({
  name: 'italic'
})
export class ItalicPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value != "string")
      return value;
    value = value.replace(/(<em>)/g, '%20_');
    value = value.replace(/(<\/em>)/g, '_%20');
    return value;
  }
}

/////
 

///

@Pipe({
  name: 'strong'
})
export class StrongPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value != "string")
      return value;
    value = value.replace(/(<strong>)/g, '%20*');
    value = value.replace(/(<\/strong>)/g, '*%20');
    return value;
  }
}

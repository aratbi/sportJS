import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseBreakLine'
})
export class ParseBreakLinePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }

}

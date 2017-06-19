import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBase]'
})
export class BaseDirective {
  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }



}

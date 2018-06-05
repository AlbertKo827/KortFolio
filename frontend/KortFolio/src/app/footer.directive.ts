import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Footer]'
})
export class FooterDirective {

  constructor(el : ElementRef) {
    console.log(el.nativeElement.clientBot);
   }

}

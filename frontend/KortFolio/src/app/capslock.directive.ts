import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[Capslock]'
})
export class CapslockDirective {

  constructor() { }

  @Output('capsLock') capsLock = new EventEmitter<Object>();

  @HostListener('window:keypress', ['$event'])
      onKeyDown(event: KeyboardEvent): void {
        const capsOn = event.getModifierState && event.getModifierState('CapsLock');
        if(capsOn){
          this.capsLock.emit(true);
        }
        else{
          this.capsLock.emit(false);
        }
  }

}

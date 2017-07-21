import {AfterViewInit, Directive, ElementRef, OnChanges, OnInit} from '@angular/core';

@Directive({
  selector: '[spAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}
  ngAfterViewInit () {
    this.el.nativeElement.focus();
  }

}

import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'sp-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements OnInit {

  @ViewChild('popin') popin: ElementRef;
  @Output() exit = new EventEmitter<void>();
  constructor(private el: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.render.listen(this.popin.nativeElement, 'click', e => e.stopPropagation());
    this.render.listen(document, 'keydown.escape', e => this.exit.emit());
    this.render.listen(this.el.nativeElement, 'click', e => this.exit.emit());
  }

}

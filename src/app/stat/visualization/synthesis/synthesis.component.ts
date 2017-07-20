import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecordStoreService} from '../../record-store.service';
import {Observable} from 'rxjs/Observable';
import {Record} from '../../../shared/record/record';
import 'rxjs/add/operator/reduce'
import 'rxjs/add/operator/max'
import 'rxjs/add/operator/min'
import 'rxjs/add/operator/last'
import 'rxjs/add/observable/from'
import {Subscription} from 'rxjs/Subscription';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'sp-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.scss']
})
export class SynthesisComponent implements OnInit, OnDestroy {

  record$: Observable<Record>;
  recordSub: Subscription;

  destroyObservable = new Subject<void>();

  constructor(private recordStoreService: RecordStoreService) { }

  ngOnInit() {
    this.record$ = this.recordStoreService.getSelectedRecord$();
    // this.recordSub = this.record$.subscribe(val => console.log(val));
    this.record$.takeUntil(this.destroyObservable).subscribe(val => console.log(val));
  }

  ngOnDestroy(): void {
    // this.recordSub.unsubscribe();
    this.destroyObservable.next();
    this.destroyObservable.complete();
  }

  getType$(): Observable<string> {
    return this.record$
      .filter(record => !!record)
      .map(record => record.type);
  }

  getDuration$(): Observable<any> {
    // return this.record$
    //   .filter(record => !!record)
    //   .map(record => record.heartBeats)
    //   .map(h => h[h.length - 1])
    //   .map(h => h.x + 1)
    //   .map(x => `${Math.floor(x / 60)}''${x % 60}'`);
    return this.record$
      .filter(record => !!record)
      .map(record => Observable.from(record.heartBeats))
      .last();
  }

  getMax$(): Observable<number> {
    return this.record$
      .filter(record => !!record)
      .mergeMap(record => Observable.from(record.heartBeats))
      .map(h => h.y)
      .max();
  }

  getMin$(): Observable<number> {
    return this.record$
      .filter(record => !!record)
      .mergeMap(record => Observable.from(record.heartBeats))
      .map(h => h.y)
      .min();
  }

  getAverage$(): Observable<number> {
    return this.record$
      .filter(record => !!record)
      .mergeMap(record => Observable.from(record.heartBeats))
      .map(h => h.y)
      .reduce(cumulPourMoyen, {somme: 0, nombreElement: 0})
      .map(cumul => cumul.somme / cumul.nombreElement);
    function cumulPourMoyen(cumul, y) {
      return {
        somme: cumul.somme + y,
        nombreElement: cumul.nombreElement + 1
      }
    }
  }
}

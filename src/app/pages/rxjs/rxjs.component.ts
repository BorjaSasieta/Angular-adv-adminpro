import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  intsubs: Subscription;

  constructor() {
    this.retornaObservable().pipe(retry(1)).subscribe(valor => console.log('subs', valor),
      err => console.warn('error: ', err),
      () => console.log('obs terminado'));
    this.intsubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intsubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
      const intv = setInterval( () => {
        i++;
        observer.next(i);
        if (i === 7) {
          clearInterval(intv);
          observer.complete();
        }
        if (i === 4) {
          i = 1;
          observer.error('El lluch :D');
        }
      }, 1000);
    });
  }

  retornaIntervalo(): Observable<number> {
    return interval(200).pipe(map(valor => valor + 1), filter(valor => valor % 2 === 1), take(50));
  }
}

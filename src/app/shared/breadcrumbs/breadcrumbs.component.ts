import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Data, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {

  title: string;
  tituloSubs$: Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getTitle().subscribe( ({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  getTitle(): Observable<Data> {
    return this.router.events.pipe(filter(ev => ev instanceof ActivationEnd),
      filter((evt: ActivationEnd) => evt.snapshot.firstChild === null),
      map((e: ActivationEnd) => e.snapshot.data));
  }

}

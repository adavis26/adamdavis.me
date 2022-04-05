import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateFacade } from '../../../state/state.facade';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public mobile: boolean;
  public isMobile$: Observable<boolean> = this.stateFacde.isMobile$;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public stateFacde: StateFacade
  ) {}

  ngOnInit() {}

  public scrollTo(id: string) {
    console.log(id);
    const el: HTMLElement = document.getElementById(id);
    console.log(el);
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

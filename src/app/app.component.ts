import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateFacade } from './state/state.facade';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'adamdavis';

  constructor(
    public breakpointObserver: BreakpointObserver,
    private readonly stateFacade: StateFacade
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.initBreakpointObserver();
  }

  /**
   * create breakpoint
   */
  private initBreakpointObserver(): void {
    this.breakpointObserver
      .observe(['(max-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.stateFacade.setIsMobile(true);
        } else {
          this.stateFacade.setIsMobile(false);
        }
      });
  }
}

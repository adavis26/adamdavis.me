import { Store } from '@ngrx/store';
import * as appSelectors from './state.selectors';
import * as appActions from './state.actions';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class StateFacade {
  constructor(private readonly store: Store) {}

  public isMobile$ = this.store.select(appSelectors.getIsMobile);

  public setIsMobile(isMobile: boolean): void {
      this.store.dispatch(appActions.setIsMobile({isMobile}));
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromState from './state.reducer';
import { StateFacade } from './state.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducer),
  ],
  providers: [StateFacade],
  exports: [],
})
export class StateModule {}

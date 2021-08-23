import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureKey, UiState } from './state.reducer';

export const selectAppState = createFeatureSelector<UiState>(stateFeatureKey);

export const getIsMobile = createSelector(
  selectAppState,
  (state: UiState) => state.isMobile
);

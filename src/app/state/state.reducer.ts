import { createReducer, on } from '@ngrx/store';
import * as stateActions from './state.actions';

export const stateFeatureKey = 'ui';

export interface UiState {
  isMobile: boolean;
}

export const initialState: UiState = {
  isMobile: false
};

export const reducer = createReducer(
  initialState,
  on(stateActions.setIsMobile, (state, { isMobile }) => ({
    ...state,
    isMobile,
  }))
);

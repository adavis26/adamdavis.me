import { createAction, props } from '@ngrx/store';

export const setIsMobile = createAction(
  '[UI] Set is mobile',
  props<{isMobile: boolean}>()
);

export const loadStatesSuccess = createAction(
  '[State] Load States Success',
  props<{ data: any }>()
);

export const loadStatesFailure = createAction(
  '[State] Load States Failure',
  props<{ error: any }>()
);

import * as fromToastr from "./reducers/toastr.reducers";
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    toastr: fromToastr.State;
}

export const reducers: ActionReducerMap<AppState> = {    
    toastr: fromToastr.reducer
}
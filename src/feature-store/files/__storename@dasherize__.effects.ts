import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { <%= classify(feature) %>State } from './<%= dasherize(storename) %>.reducer';
import { initialiseModule, initialiseModuleSucceeded } from './<%= dasherize(storename) %>.actions';

@Injectable()
export class <%= classify(storename) %>Effects {
  
  initialiseModule$ = createEffect(() => this.actions$.pipe(
    ofType(initialiseModule),
    exhaustMap(a => of(initialiseModuleSucceeded())),
    catchError(e => {
      console.log(e);
      return EMPTY;
    })
  ));

  constructor(
    private actions$: Actions,
    private store: Store<<%= classify(feature) %>State>
  ) { }
}

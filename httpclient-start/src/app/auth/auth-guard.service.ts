import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { State } from './store/auth.reducers';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .take(1)
      .map((authState: State) => { 
      return authState.authenticated;
    });
  }
}

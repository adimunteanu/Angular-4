import { AppState } from './../../store/app.reducers';
import * as RecipeActions from './../../recipes/store/recipe.actions';
import { FeatureState } from './../../recipes/store/recipe.reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../../shared/data-storage.service';
import { HttpEvent } from '@angular/common/http';
// import { HttpEventType } from '@angular/common/http';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from './../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}

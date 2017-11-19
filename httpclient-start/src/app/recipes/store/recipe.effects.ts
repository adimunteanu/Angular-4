import { Store } from '@ngrx/store';
import { Recipe } from './../recipe.model';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import * as RecipeActions from './recipe.actions';
import 'rxjs/add/operator/switchMap';
import { FeatureState } from 'app/recipes/store/recipe.reducers';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://ng-recipe-book-16f36.firebaseio.com/recipes.json', {
                observe: 'body', 
                responseType: 'json'
            });
        })
        .map((recipes) => {
            for (const recipe of recipes) {
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return {
                type: RecipeActions.SET_RECIPES,
                payload: recipes
            };
        });
    constructor(private actions$: Actions,
                private httpClient: HttpClient,
                private store: Store<FeatureState>) {}
}

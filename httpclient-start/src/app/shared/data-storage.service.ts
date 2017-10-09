import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer asfafsafkjafs');
    return this.httpClient.put('https://ng-recipe-book-16f36.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {
        observe: 'body',
        // headers: headers
        params: new HttpParams().set('auth', token)
      });
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-16f36.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-16f36.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body', 
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}

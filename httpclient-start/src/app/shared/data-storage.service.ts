import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer asfafsafkjafs');
    // return this.httpClient.put('https://ng-recipe-book-16f36.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //     observe: 'body',
    //     // headers: headers
    //     params: new HttpParams().set('auth', token)
    //   });
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-16f36.firebaseio.com/recipes.json', 
    this.recipeService.getRecipes());
    return this.httpClient.request(req);
  }

  getRecipes() {
    
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-16f36.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-16f36.firebaseio.com/recipes.json', {
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

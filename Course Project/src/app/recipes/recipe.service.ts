import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';

import { Recipe } from './recipe.model';
import { Injectable } from "@angular/core";


@Injectable()
export class RecipeService { 
    recipesChanged= new Subject<Recipe[]>();

    public recipes: Recipe[]=[];
    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes() {
      return this.recipes.slice();
    }
    getRecipe(id: number) {
        return this.recipes[id];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
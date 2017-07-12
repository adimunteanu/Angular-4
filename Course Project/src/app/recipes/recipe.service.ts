import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';

import { Recipe } from './recipe.model';
import { Injectable } from "@angular/core";


@Injectable()
export class RecipeService { 
    recipesChanged= new Subject<Recipe[]>();

    private recipes: Recipe[]=[
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];
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
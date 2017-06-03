import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
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
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)
            ])
    ];
    getRecipes(){
      return this.recipes.slice();
    }
    getRecipe(id:number){
        return this.recipes[id];
    }
}
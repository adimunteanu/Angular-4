import { EventEmitter } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';
import { Subject } from "rxjs/Subject";
export class ShoppingListService {
    ingredientsChanged= new Subject<Ingredient[]>();
    startedEditing= new Subject<number>();

    public ingredients: Ingredient[]= [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    
    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        console.log('delete works');
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
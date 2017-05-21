import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private slService:ShoppingListService) { }
  sendToSL(){
    for(let ingredient of this.recipe.ingredients){
      this.slService.addIngredient(ingredient);
      console.log(ingredient);
    }
  }
  ngOnInit() {
  }

}

import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { ActivatedRoute, Params, Router } from "@angular/router";
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService,
              private slService:ShoppingListService,
              private route:ActivatedRoute,
              private router: Router) { }
  sendToSL(){
    for(let ingredient of this.recipe.ingredients){
      this.slService.addIngredient(ingredient);
      console.log(ingredient);
    }
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id=+params['id'];
        this.recipe= this.recipeService.getRecipe(this.id);
      }
    )
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route});
  }
}

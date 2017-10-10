import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';
import { Router, ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  
  constructor(public recipeService:RecipeService,
              public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

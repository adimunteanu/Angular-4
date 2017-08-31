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
<<<<<<< HEAD
export class RecipeListComponent implements OnInit {
  id:number = null;
=======
export class RecipeListComponent implements OnInit,OnDestroy{
>>>>>>> 902f9e9eea645e7e7d81a7248fb4d597b323ab17
  recipes:Recipe[];
  subscription: Subscription;
  
  constructor(public recipeService:RecipeService,
              public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
<<<<<<< HEAD
    //console.log(this.route.params['id']);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.id = +params[0];
    //     console.log('subscribe works' + this.id);
    // })
    this.recipes = this.recipeService.getRecipes();
=======
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
>>>>>>> 902f9e9eea645e7e7d81a7248fb4d597b323ab17
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { Router, ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  id:number = null;
  recipes:Recipe[];
  
  
  constructor(private recipeService:RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.route.params['id']);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.id = +params[0];
    //     console.log('subscribe works' + this.id);
    // })
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

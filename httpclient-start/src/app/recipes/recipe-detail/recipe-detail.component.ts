import * as RecipeActions from './../store/recipe.actions';
import { FeatureState } from './../store/recipe.reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { State } from 'app/recipes/store/recipe.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeState = this.store.select('recipes');
        }
      );
  }

  onAddToShoppingList() {
    this.store.select('recipes')
      .take(1)
      .subscribe((recipeState: State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients
        ));
      });
    
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipeRoutes: Routes = [
    {path: '',
     component: RecipesComponent,
     children: [
         {path: '', component: SelectRecipeComponent},
         {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
         {path: ':id', component: RecipeDetailComponent},
         {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class RecipesRoutingModule {

}
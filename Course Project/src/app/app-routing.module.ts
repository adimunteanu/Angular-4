import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    {path: 'recipes',
     component: RecipesComponent,
     children: [
         {path:'',component: SelectRecipeComponent},
         {path:':id',component: RecipeDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
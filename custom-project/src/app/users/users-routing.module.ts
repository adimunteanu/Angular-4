import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [RouterModule.forChild([{ path: '', component:UsersComponent}])],
    exports: [RouterModule]
})
export class UsersRoutingModule {

}
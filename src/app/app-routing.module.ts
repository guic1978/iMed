import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PalestraComponent } from './palestras/palestra/palestra.component';
import { PalestrasComponent } from './palestras/palestras.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/palestras', pathMatch: 'full' },
    { path: 'palestra/:id', component: PalestraComponent },
    { path: 'palestras', component: PalestrasComponent },
    // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    // { path: 'shopping-list', component: ShoppingListComponent },
    // { path: 'recipes', component: RecipesComponent, children: [
    //     {  path: '', component: RecipeStartComponent },
    //     {  path: 'new', component: RecipeEditComponent },
    //     {  path: ':id', component: RecipeDetailComponent },
    //     {  path: ':id/edit', component: RecipeEditComponent },
    // ] },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

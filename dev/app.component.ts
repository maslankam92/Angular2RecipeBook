import { Component } from '@angular/core';
import { RecipesComponent } from "./recipe-book/recipes.component";
import { Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: 'my-app',
    template: `
    <div class="ui inverted menu teal">
        <div class="ui container">
            <div class="header item"><i class="food icon"></i>ngFOOD</div>
            <a class="item" [routerLink]="['recipes']">Recipes</a>
            <a class="item" [routerLink]="['shopping-list']">Shopping</a>
        </div>
    </div>
    <div class="ui container">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [RecipesComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/recipes', component: RecipesComponent},
    {path: '/shopping-list', component: ShoppingListComponent},
])

export class AppComponent {
}
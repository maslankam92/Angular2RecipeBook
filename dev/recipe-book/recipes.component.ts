import { Component } from '@angular/core';
import { RecipeService } from "./recipe.service";
import { RecipeListComponent } from "./recipe-list.component";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit.component";

@Component({
    selector: 'my-recipes',
    template: `
    <div class="column grid two ui">
        <div class="six wide column">
          <my-recipe-list></my-recipe-list>
        </div>
        <div class="ten wide column">
          <router-outlet></router-outlet>
        </div>
    </div>
  `,
    providers: [RecipeService],
    directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/edit/:id', component: RecipeEditComponent},
    {path: '/create', component: RecipeEditComponent},
    {path: '/:id', component: RecipeDetailComponent}
])
export class RecipesComponent {

}


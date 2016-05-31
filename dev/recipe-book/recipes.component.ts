import { Component } from '@angular/core';
import { RecipeService } from "./recipe.service";
import { RecipeListComponent } from "./recipe-list.component";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail.component";

@Component({
    selector: 'my-recipes',
    template: `
    <div class="master list">
      <my-recipe-list></my-recipe-list>
    </div>
    <div class="detail">
      <router-outlet></router-outlet>
    </div>  
  `,
    providers: [RecipeService],
    directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/:id', component: RecipeDetailComponent},
    {path: '/:editMode', component: RecipeDetailComponent}
])
export class RecipesComponent {
}


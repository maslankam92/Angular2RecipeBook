import { Component, OnInit } from '@angular/core';
import { Recipe } from "../shared/recipe";
import { Router, OnActivate, RouteSegment } from "@angular/router";
import { RecipeService } from "./recipe.service";
import { RecipeEditComponent } from "./recipe-edit.component";
import { ShoppingListService } from "../shared/shopping-list.service";

@Component({
    templateUrl: 'templates/recipe-detail.tpl.html',
    providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnActivate, OnInit {

    recipe: Recipe;
    private _recipeIndex: string;

    constructor(private _routeSegment: RouteSegment, private _recipeService: RecipeService, private _router: Router, private _shoppingListService: ShoppingListService) {}

    onEdit() {
        this._router.navigate(['/recipes/edit', this._recipeIndex]);
    }

    onDelete() {
        this._recipeService.deleteRecipe(+this._recipeIndex);
        this._router.navigate(['/recipes']);
    }

    onAddToShoppingList() {
        this._shoppingListService.insertItems(this.recipe.ingredients);
    }

    routerOnActivate(curr:RouteSegment, prev?:RouteSegment):void {
        let itemIndex = curr.getParam('id');
        this._recipeIndex = itemIndex;
    }

    ngOnInit():any {
        this.recipe = this._recipeService.getRecipe(this._recipeIndex !== null ? +this._recipeIndex : null) || null;
    }
}
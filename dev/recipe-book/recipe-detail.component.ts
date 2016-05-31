import { Component, OnInit } from '@angular/core';
import { Recipe } from "../shared/recipe";
import { Router, OnActivate, RouteSegment } from "@angular/router";
import { RecipeService } from "./recipe.service";

@Component({
    templateUrl: 'templates/recipe-detail.tpl.html'
})
export class RecipeDetailComponent  implements OnActivate, OnInit {

    recipe: Recipe;
    private _recipeIndex: string;

    constructor(private _routeSegment: RouteSegment, private _recipeService: RecipeService) {}

    routerOnActivate(curr:RouteSegment, prev?:RouteSegment):void {
        let itemIndex = curr.getParam('id');
        this._recipeIndex = itemIndex;
    }

    ngOnInit():any {
        this.recipe = this._recipeService.getRecipe(this._recipeIndex !== null ? +this._recipeIndex : null) || null;
    }
}
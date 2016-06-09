import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Recipe } from "../shared/recipe";
import { Router, OnActivate, RouteSegment } from "@angular/router";
import { RecipeService } from "./recipe.service";
import { RecipeEditComponent } from "./recipe-edit.component";
import { ShoppingListService } from "../shared/shopping-list.service";

declare var jQuery: any;

@Component({
    templateUrl: 'templates/recipe-detail.tpl.html',
    styleUrls: ['src/css/recipe-detail.styles.css'],
    providers: [ShoppingListService]
})
export class RecipeDetailComponent implements OnActivate, OnInit, AfterViewInit {

    recipe: Recipe;
    private _recipeIndex: string;

    constructor(private _routeSegment: RouteSegment, private _recipeService: RecipeService, private _router: Router, private _shoppingListService: ShoppingListService, private el:ElementRef) {}

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


    ngAfterViewInit():any {
        jQuery(this.el.nativeElement).find('.tooltip').popup({
            position: 'right center'
        });
    }
}
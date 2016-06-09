import { Component, OnInit } from '@angular/core';
import { Recipe } from "../shared/recipe";
import { RecipeService } from "./recipe.service";
import { Router } from "@angular/router";

@Component({
    selector: 'my-recipe-list',
    template:`
    <div class="ui segment recipe-list-container">
        <div class="ui vertical animated button pink inverted fluid" (click)="onAddRecipe()">
          <div class="visible content"><i class="plus icon"></i></div>
          <div class="hidden content">
            Add Recipe
          </div>
        </div>
        <div class="ui one cards link recipe-list-cards">
            <div class="card" *ngFor="let item of recipes" (click)="onSelect(item)">
                <div class="image">
                    <img [src]="item.imageUrl" alt="Recipe">
                </div>
                <div class="content">
                    <div class="header">{{item.name}}</div>
                </div>
                <div class="extra content">
                    <span class="right floated">
                        <i class="heart outline like icon"></i>
                        17 likes
                    </span>
                    <span>
                    <i class="user icon"></i>
                    4 igredients
                    </span>
                </div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['src/css/recipe-list.styles.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private _recipeService: RecipeService, private _router: Router){}

    onSelect(item:Recipe) {
        this._router.navigate(['/recipes', Number(this._recipeService.getRecipeIndex(item))]);
    }

    onAddRecipe() {
        this._router.navigate(['/recipes/create']);
    }

    ngOnInit():any {
        this.recipes = this._recipeService.getAllRecipes();
    }
}
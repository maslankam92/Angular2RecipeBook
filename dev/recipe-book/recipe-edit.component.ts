import { Component, OnInit } from '@angular/core';
import { ControlGroup, ControlArray, Validators, Control, FormBuilder } from '@angular/common';
import { RouteSegment } from "@angular/router";
import { Recipe } from "../shared/recipe";
import { RecipeService } from "./recipe.service";

@Component({
    templateUrl: 'templates/recipe-edit.tpl.html'
})
export class RecipeEditComponent implements OnInit {
    recipe: Recipe;
    myForm: ControlGroup;
    private _editMode = 'create';
    private _recipeIndex:number;

    constructor(private _routeSegment:RouteSegment, private _recipeService:RecipeService, private _formBuilder:FormBuilder) {}

    onAddItem(itemName:string, itemAmount:string) {
        (<ControlArray>this.myForm.controls['ingredients']).push(
            new ControlGroup(
                {
                    name: new Control(itemName, Validators.required),
                    amount: new Control(itemAmount, Validators.compose([
                        Validators.required,
                        hasNumbers,
                        greaterZero
                    ]))
                }
            )
        );
    }

    onRemoveItem(index:number) {
        (<ControlArray>this.myForm.controls['ingredients']).removeAt(index);
    }

    onSubmit() {
        this.recipe = this.myForm.value;
        if (this._editMode === 'edit') {
            this._recipeService.updateRecipe(this._recipeIndex, this.recipe);
        } else {
            this._recipeService.insertRecipe(this.recipe);
        }
    }

    ngOnInit() {
        if (this._routeSegment.getParam('id') !== undefined) {
            this._editMode = 'edit';
            this._recipeIndex = +this._routeSegment.getParam('id');
        }
        let fbRecipeName = '';
        let fbRecipleImageUrl = '';
        let fbRecipeContent = '';
        let fbIngredients:ControlArray = new ControlArray([]);

        if (this._editMode === 'edit') {
            this.recipe = this._recipeService.getRecipe(this._recipeIndex);
            for (let i = 0; i < this.recipe.ingredients.length; i++) {
                fbIngredients.push(
                    new ControlGroup(
                        {
                            name: new Control(this.recipe.ingredients[i].name, Validators.required),
                            amount: new Control(this.recipe.ingredients[i].amount, Validators.compose([
                                Validators.required,
                                hasNumbers,
                                greaterZero
                            ]))
                        }
                    )
                );
                fbRecipeName = this.recipe.name;
                fbRecipleImageUrl = this.recipe.imageUrl;
                fbRecipeContent = this.recipe.content;
            }
        }
        this.myForm = this._formBuilder.group({
            name: [fbRecipeName, Validators.required],
            imageUrl: [fbRecipleImageUrl],
            content: [fbRecipeContent],
            ingredients: this._formBuilder.array(fbIngredients.controls)
        });
    }
}

function hasNumbers(control:Control):{[s: string]: boolean} {
    if (!('' + control.value).match('\\d+')) {
        return {noNumbers: true};
    }
}

function greaterZero(control:Control):{[s: string]: boolean} {
    if (!((+control.value) > 0)) {
        return {tooSmall: true};
    }
}
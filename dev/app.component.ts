import {Component} from '@angular/core';
import {RecipesComponent} from "./recipe-book/recipes.component";
import {Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <ul>
                    <li><a [routerLink]="['recipes']">Recipes</a></li>
                    <li><a [routerLink]="['shopping-list']">Shopping List</a></li>
                </ul>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/recipes', component: RecipesComponent}, // useAsDefault: true => coming soon
    {path: '/shopping-list', component: ShoppingListComponent},
])
export class AppComponent {

}
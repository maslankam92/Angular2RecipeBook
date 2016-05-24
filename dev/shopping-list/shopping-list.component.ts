import { Component } from "@angular/core";

@Component({
    selector: 'my-shopping-list',
    template: `
        <h1>Shopping List</h1>
        <div>Edit Section</div>
        <div class="list">
            <button class="btn">Add new Item</button>
            <ul>
                <li>Lisdt Items...</li>
            </ul>
        </div>
    `
})
export class ShoppingListComponent {

}
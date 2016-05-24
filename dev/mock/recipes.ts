import { Recipe } from "../shared/recipe";
import { Ingredient } from "../shared/ingredient";

export let RECIPES: Recipe[] = [
	new Recipe('Penne al Pesto',
    'Italian pasta',
    'http://il9.picdn.net/shutterstock/videos/4609097/thumb/1.jpg?i10c=img.resize(height:160)',
    [
      new Ingredient('Penne pasta', 1),
      new Ingredient('Pesto sauce', 1),
      new Ingredient('Cream cheese', 2)
    ]
  ),
  new Recipe('Penne al Pesto',
    'Tomato Tarte',
    'https://realfood.tesco.com/media/images/tomato-tarte-tatin-h-f7401d82-30f1-410e-ada1-1e5ad46c2b6d-0-472x310.jpg',
    [
      new Ingredient('Tomatoes', 4),
      new Ingredient('Mozarella cheese', 2),
      new Ingredient('Basil', 1)
    ]
  )
];

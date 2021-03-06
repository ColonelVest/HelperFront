import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food.component";
import {FoodHomeComponent} from "./food-home/food-home.component";
import {IngredientsHomeComponent} from "./ingredients/ingredients-home/ingredients-home.component";
import {RecipesHomeComponent} from "./recipes/recipes-home/recipes-home.component";
import {RecipeDetailsComponent} from "./recipes/recipe-details/recipe-details.component";
import {RecipesFormHomeComponent} from "./recipes/recipes-form-home/recipes-form-home.component";
import {DishesHomeComponent} from "./dishes/dishes-home/dishes-home.component";
import {DishDetailsComponent} from "./dishes/dish-details/dish-details.component";
import {MealsFormHomeComponent} from "./meals/meals-form-home/meals-form-home.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'food',
                component: FoodComponent,
                canActivate: [AuthGuardService],
                children: [
                    {
                        path: 'ingredients',
                        component: IngredientsHomeComponent
                    },
                    {
                        path: 'recipes',
                        children: [
                            {
                                path: '',
                                component: RecipesHomeComponent
                            },
                            {
                                path: 'new',
                                component: RecipesFormHomeComponent
                            },
                            {
                                path: ':recipeId',
                                component: RecipeDetailsComponent
                            }
                        ]
                    },
                    {
                        path: 'dishes',
                        children: [
                            {
                                path: '',
                                component: DishesHomeComponent
                            },
                            {
                                path: ':dishId',
                                component: DishDetailsComponent
                            }
                        ]
                    },
                    {
                        path: 'generator',
                        component: MealsFormHomeComponent
                    },
                    {
                        path: ':date',
                        component: FoodHomeComponent
                    },
                    {
                        path: '',
                        component: FoodHomeComponent
                    },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FoodRoutingModule {
}

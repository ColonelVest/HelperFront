import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food.component";
import {FoodHomeComponent} from "./food-home/food-home.component";
import {IngredientsHomeComponent} from "./ingredients/ingredients-home/ingredients-home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'food',
                component: FoodComponent,
                children: [
                    {
                        path: '',
                        component: FoodHomeComponent
                    },
                    {
                        path: 'ingredients',
                        component: IngredientsHomeComponent
                    }
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
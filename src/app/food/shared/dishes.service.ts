import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {Dish} from "./dish.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DishesService extends BaseService {

    protected urlEnd: string = 'dishes';
    protected entityName: string = 'dish';

    constructor(protected http:Http) {
        super();
    }

    addDish (dish : Dish): Observable<Dish> {
        return this.post(dish);
    }

    getDishes() {
        return this.gets()
    }

    getDish(id:number) {
        return this.get(id);
    }

    editDish(dish: Dish): Observable<Dish> {
        return this.put(Dish);
    }

    deleteDish (dish : Dish): Observable<Dish> {
        return this.httpDelete(dish);
    }

}

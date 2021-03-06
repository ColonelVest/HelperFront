import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Item} from "./item.model";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ItemService extends BaseService {
    constructor(protected http: HttpClient) {
        super();
    }

    urlEnd: string = 'items';
    entityName = 'item';

    getItems() {
        return this.gets();
    }

    addItem(item: Item) {
        return this.post(item);
    }

    editItem(item: Item): Observable<Item> {
        return this.put(item);
    }

    deleteItem(item: Item){
        return this.httpDelete(item);
    }
}

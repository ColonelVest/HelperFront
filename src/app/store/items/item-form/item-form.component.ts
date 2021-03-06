import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Item} from "../../shared/item.model";
import {DimensionsData} from "../../../shared/common/DimensionsData";
import {ItemCategory} from "../../shared/item-category";

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
    @Input() item: Item;
    @Input() itemCategories: ItemCategory[];
    @Output() created: EventEmitter<Item> = new EventEmitter<Item>();

    constructor() {
    }

    dimensions = DimensionsData.getDimensions();

    ngOnInit() {
        if (!this.item) {
            this.setDefaultValues();
        }
    }

    setDefaultValues() {
        this.item = new Item();
        this.item.dimension = this.dimensions[0].value;
    }

    onSubmit() {
        this.created.emit(this.item);
    }
}

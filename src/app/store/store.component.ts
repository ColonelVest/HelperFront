import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

    constructor(private router: Router) {
    }

    sections = [
        {'title': 'Главная', link: '/food'},
        {'title': 'Итемы', link: '/store/items'}
    ];

    ngOnInit() {
    }

    goTo(link) {
        console.log(link);
        this.router.navigate([link]);
    }
}
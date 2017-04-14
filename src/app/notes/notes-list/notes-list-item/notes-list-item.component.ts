import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../note.model";

@Component({
    selector: 'app-notes-list-item',
    templateUrl: './notes-list-item.component.html',
    styleUrls: ['./notes-list-item.component.css']
})
export class NotesListItemComponent implements OnInit {

    @Input() note: Note;
    isContentShow : boolean = false;
    constructor() {
    }

    ngOnInit() {
    }

    showContent() {
        this.isContentShow = true;
    }

    hideContent() {
        this.isContentShow = false;
    }
}

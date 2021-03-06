import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

import {Task} from "../../shared/models/task.model";
import {TimeHelper} from "../../../../shared/services/time-helper.service";
import * as moment from 'moment';

@Component({
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: ['task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    @Output() created: EventEmitter<Task>;
    @Input() task : Task = new Task();
    deadline: string;
    date: string;

    constructor() {
        this.created = new EventEmitter<Task>();
        this.setInitDates();
    }

    onSubmit() {
        this.task.description = this.task.title;
        if (this.date) {
            this.task.condition.dates[0] = TimeHelper.getFormattedDateString(this.date);
        }
        if (this.deadline) {
            this.task.condition.daysBeforeDeadline = TimeHelper.getDate(this.deadline, TimeHelper.INPUT_DATE_FORMAT)
                .diff(TimeHelper.getDate(this.date, TimeHelper.INPUT_DATE_FORMAT), 'days');
        }
        this.created.emit(this.task);
        this.task = new Task();
    }

    setInitDates() {
        this.date = moment().format(TimeHelper.INPUT_DATE_FORMAT);
        this.deadline = moment().add(1, 'days').format(TimeHelper.INPUT_DATE_FORMAT);
    }

    ngOnInit() {
    }
}
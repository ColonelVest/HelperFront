import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges} from '@angular/core';
import {Period} from "../../period.model";
import {ActivatedRoute, Params} from "@angular/router";
import {TimePeriod} from "../../../shared/models/timePeriod";
import {TimeHelper} from "../../../shared/services/time-helper.service";

@Component({
    selector: 'period-form',
    templateUrl: 'period-form.component.html',
    styleUrls: ['period-form.component.css']
})
export class PeriodFormComponent implements OnInit, OnChanges {

    @Output() created: EventEmitter<Period>;
    @Input() period: Period = new Period();
    @Input() periods: Period[];
    @Input() isEdit: boolean = false;
    date: string;
    estimatedBegin: string = '07:00';
    estimatedEnd: string = '23:00';
    emptyIntervals: TimePeriod[];

    constructor(private route: ActivatedRoute) {
        this.created = new EventEmitter<Period>();
    }

    onSubmit() {
        this.created.emit(this.period);
        if (!this.isEdit) {
            this.period.description = null;
        }
        this.emptyIntervals = this.getEmptyIntervals();
    }

    setTimeInputValues() {
        if (this.emptyIntervals.length > 0) {
            let lastEmptyInterval = this.emptyIntervals[this.emptyIntervals.length - 1];
            this.period.begin = lastEmptyInterval.begin.format(TimeHelper.TIME_FORMAT);
            if (lastEmptyInterval.end.diff(lastEmptyInterval.begin, 'minutes') > 30) {
                this.period.end = TimeHelper.addTimeToStringValue(this.period.begin, 30, 'minutes');
            } else {
                this.period.end = lastEmptyInterval.end.format(TimeHelper.TIME_FORMAT);
            }
        }
    }

    onBeginChange() {
        let begin = TimeHelper.getMomentTime(this.period.begin);
        let end = TimeHelper.getMomentTime(this.period.end);
        if (begin.isAfter(end)) {
            this.period.end = TimeHelper.addTimeToStringValue(this.period.begin, 10, 'minutes');
        }
    }

    getEmptyIntervals() {
        return TimeHelper.getEmptyPeriods(this.periods, this.estimatedBegin, this.estimatedEnd);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['periods']) {
            this.emptyIntervals = this.getEmptyIntervals();
            this.setTimeInputValues();
        }
    }

    onEmptyIntervalClick(emptyInterval: TimePeriod) {
        this.period.begin = emptyInterval.begin.format(TimeHelper.TIME_FORMAT);
        this.period.end = emptyInterval.end.format(TimeHelper.TIME_FORMAT);
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'];
        });
    }
}

import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {
    MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatIconModule,
    MatTabsModule
} from "@angular/material";

import {ScheduleRoutingModule} from "./shedule-routing.module";
import {DayScheduleComponent} from "./day-schedule/day-schedule.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ScheduleComponent} from "./schedule.component";
import {PeriodComponent} from './day-schedule/period/period.component';
import {PeriodListComponent} from './day-schedule/period-list/period-list.component';
import {PeriodFormComponent} from './day-schedule/period-form/period-form.component';
import {PeriodService} from "./period.service";
import {WindowComponent} from "../shared/window/window.component";
import {MomentModule} from "angular2-moment";
import {TaskListModule} from "../tasks/taskData/taskHome/task-list/task-list.module";
import {RepetitivePeriodFormComponent} from './day-schedule/repetitive-period-form/repetitive-period-form.component';
import {AuthGuardService} from "../shared/guards/auth-guard.service";
import {TaskService} from "../tasks/taskData/shared/services/tasks.service";
import {TaskEntriesService} from "../tasks/taskData/shared/services/task-entries.service";

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        CommonModule,
        FormsModule,
        ScheduleRoutingModule,
        MomentModule,
        TaskListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule
    ],
    declarations: [
        WindowComponent,
        DayScheduleComponent,
        CalendarComponent,
        ScheduleComponent,
        PeriodComponent,
        PeriodListComponent,
        PeriodFormComponent,
        RepetitivePeriodFormComponent,
    ],
    providers: [
        PeriodService,
        AuthGuardService,
        TaskService,
        TaskEntriesService
    ]
})
export class ScheduleModule {
}

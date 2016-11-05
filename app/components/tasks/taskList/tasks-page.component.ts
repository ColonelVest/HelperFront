import { Component, OnInit } from '@angular/core';

import { Task } from "../../shared/tasks/task.model";
import { TaskService } from "../../shared/tasks/tasks.service";
import { Modal } from "../../shared/modal.model";

@Component({
    selector: 'tasks-page',
    templateUrl: './app/components/tasks/taskList/tasks-page.component.html',
    styleUrls: ['./app/components/tasks/taskList/tasks-page.component.css'],
    providers: [TaskService]
})

export class TasksPageComponent implements OnInit {

    title : string = 'Задачи';
    tasks : Task[] = [];
    taskService: TaskService;
    errorMessage : string;
    modal : Modal;

    constructor(taskService : TaskService) {
        this.taskService = taskService;
        this.modal = new Modal();
    }

    ngOnInit():void {
        this.taskService.getTasks()
            .subscribe(
                tasks => {
                    this.tasks = tasks;
                    this.removeDinnerActiveClass();
                },
                error => this.errorMessage = <any>error
            );
    }

    private removeDinnerActiveClass() {
        document.getElementById('loadDimmer').classList.remove('active');
    }

    private addDinnerActiveClass() {
        document.getElementById('loadDimmer').classList.add('active');
    }

    onTaskCreated(task:Task) :void {
        this.addDinnerActiveClass();
        document.getElementById('addButton').textContent = 'Добавляется';
        this.taskService.addTask(task)
            .subscribe(
                (task) => {
                    this.tasks.push(task);
                    this.removeDinnerActiveClass();
                    document.getElementById('addButton').textContent = 'Добавить';
                },
                error => this.errorMessage = <any>error
            );
    }

    onTaskDeleted(task:Task) :void {
        this.addDinnerActiveClass();
        this.taskService.deleteTask(task)
            .subscribe(
                task => {
                    this.deleteTask(task);
                    this.removeDinnerActiveClass();
                },
                error => this.errorMessage = <any>error
            );
    }

    private deleteTask(task: Task): void {
        let index = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

}
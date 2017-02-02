import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

export class Task {
    constructor(public id: number, public name: string) {
    };
}

const TASKS = [
    new Task(1, 'Take Robin for driving lessons'),
    new Task(2, 'Wash Batmobile'),
    new Task(3, 'Fix bat-signal lamp'),
    new Task(4, 'Give a hug to Alfred')
];

@Injectable()
export class TasksService {
    getTasks(): Observable<Task[]> {
        return Observable.of(TASKS);
    }

    getTask(id: number | string) {
        return this.getTasks()
            .map(tasks => tasks.find(task => task.id === +id))
    }
}
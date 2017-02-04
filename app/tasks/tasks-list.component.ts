import {Component, OnInit} from "@angular/core";
import {TasksService, Task} from "./tasks.service";
import {Observable} from "rxjs";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
    template: `
<ul class="items">
    <li *ngFor="let task of tasks$ | async"
        (click)="onSelect(task)"
        [class.selected]="isSelected(task)">
        <span class="badge">{{ task.id }}</span> {{ task.name }}
    </li>
</ul>
<router-outlet></router-outlet>
`
})

export class TasksListComponent implements OnInit {
    tasks$: Observable<Task[]>;
    selectedId: number;

    constructor(private tasksService: TasksService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.tasks$ = this.route.params.switchMap((params: Params) => {
            this.selectedId = +params['id'];
            return this.tasksService.getTasks();
        })
    }

    onSelect(task: Task) {
        this.selectedId = task.id;
        this.router.navigate([task.id], {relativeTo: this.route});
    }

    isSelected(task: Task) {
        return task.id === this.selectedId;
    }
}
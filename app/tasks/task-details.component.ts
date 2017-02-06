import {Component, OnInit, HostBinding} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Task} from "./tasks.service";
import {DialogService} from "../dialog.service";
import {CanComponentDeactivate} from "../can-component-deactivate-guard.service";

@Component({
    template: `
    <div *ngIf="task">
    <h3>"{{ editName }}"</h3>
    <div>
      <label>ID #</label>{{ task.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button class="btn btn-default" (click)="save()">Save</button>
      <button class="btn btn-default" (click)="cancel()">Cancel</button>
    </p>
  </div>
  `
})
export class TaskDetailsComponent implements OnInit, CanComponentDeactivate {

    task: Task;
    editName: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private dialogService: DialogService) {
    }


    ngOnInit(): void {
        this.route.data
            .subscribe((data: {task: Task}) => {
                this.editName = data.task.name;
                this.task = data.task;
            });
    }

    cancel() {
        this.gotoTasks();
    }

    save() {
        this.task.name = this.editName;
        this.gotoTasks();
    }

    gotoTasks() {
        let taskId = this.task ? this.task.id : null;
        this.router.navigate(['../', { id: taskId, foo: 'foo' }], { relativeTo: this.route });
    }

    canDeactivate(): Promise<boolean> | boolean {
        if (!this.task || this.task.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }

}
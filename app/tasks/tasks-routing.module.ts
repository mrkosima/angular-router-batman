import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./tasks.component";
import {TasksListComponent} from "./tasks-list.component";
import {TaskDetailsResolver} from "./task-details-resolver.service";
import {TasksHomeComponent} from "./tasks-home.component";
import {TaskDetailsComponent} from "./task-details.component";
import {CanComponentDeactivateGuard} from "../can-component-deactivate-guard.service";

const routes: Routes = [
    {
        path: '',
        component: TasksComponent,
        children: [{
            path: '',
            component: TasksListComponent,
            children: [
                {
                    path: ':id',
                    component: TaskDetailsComponent,
                    canDeactivate: [CanComponentDeactivateGuard],
                    resolve: {
                        task: TaskDetailsResolver
                    }
                },
                {
                    path: '',
                    component: TasksHomeComponent
                }
            ]
        }]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        TaskDetailsResolver
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule {
}
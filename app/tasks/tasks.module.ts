import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TasksRoutingModule} from "./tasks-routing.module";
import {TasksComponent} from "./tasks.component";
import {TasksListComponent} from "./tasks-list.component";
import {TasksService} from "./tasks.service";
import {TaskDetailsComponent} from "./task-details.component";
import {TasksHomeComponent} from "./tasks-home.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule
    ],
    declarations: [
        TasksListComponent,
        TasksHomeComponent,
        TaskDetailsComponent,
        TasksComponent
    ],
    providers: [TasksService]
})
export class TasksModule {
}
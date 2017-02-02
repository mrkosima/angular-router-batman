import {Injectable}             from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {Task, TasksService} from './tasks.service';

@Injectable()
export class TaskDetailsResolver implements Resolve<Task> {
    constructor(private tasksService: TasksService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
        let id = route.params['id'];

        return this.tasksService.getTask(id).map(task => {
            if (task) {
                return task;
            } else { // id not found
                this.router.navigate(['/tasks']);
                return null;
            }
        });
    }
}
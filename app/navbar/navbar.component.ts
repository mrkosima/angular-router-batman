import {Component} from "@angular/core";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";

@Component({
    moduleId: __moduleName,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {

    userName$: Observable<string>;

    constructor(public authService: AuthService) {
        this.userName$ = authService.getUserName()
    }
}
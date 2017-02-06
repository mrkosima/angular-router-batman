import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})


export class AppComponent implements OnInit {

    currentUrl$: Observable<string>;

    constructor(private router: Router, public authService:AuthService) {
    }

    ngOnInit(): void {
        this.currentUrl$ = this.router.events.map(() => {console.warn(this.router.routerState.toString());return this.router.url});
    }
}
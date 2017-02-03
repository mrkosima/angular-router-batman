import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})


export class AppComponent implements OnInit {

    currentUrl$: Observable<string>;

    constructor(private router: Router) {
    }


    ngOnInit(): void {
        this.currentUrl$ = this.router.events.map(() => this.router.url);
    }
}
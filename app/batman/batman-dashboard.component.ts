import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SelectivePreloadingStrategy} from "../selective-preloading.strategy";
import {Observable} from "rxjs";

@Component({
    template: `
<p>Session ID: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>

    Preloaded Modules
    <ul>
      <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
`
})

export class BatmanDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    modules: string[];
    token: Observable<string>;

    constructor(private route: ActivatedRoute,
                private preloadStrategy: SelectivePreloadingStrategy) {
        this.modules = preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None');

        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');
    }

}
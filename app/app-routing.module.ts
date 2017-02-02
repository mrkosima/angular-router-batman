import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Page404Component} from "./page404.component";
import {AuthGuard} from "./auth-guard.service";
import {CanComponentDeactivateGuard} from "./can-component-deactivate-guard.service";
import {CallComponent} from "./call.component";
import {SelectivePreloadingStrategy} from "./selective-preloading.strategy";

const appRoutes: Routes = [
    {
        path: 'tasks',
        loadChildren: 'app/tasks/tasks.module#TasksModule',
        data: {preload: true}
    },
    {
        path: 'batman',
        loadChildren: 'app/batman/batman.module#BatmanModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'call',
        component: CallComponent,
        outlet: 'popup'
    },
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: '**', component: Page404Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                useHash: true,
                enableTracing: true,
                preloadingStrategy: SelectivePreloadingStrategy
            }
        )
    ],
    providers: [
        CanComponentDeactivateGuard,
        SelectivePreloadingStrategy
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
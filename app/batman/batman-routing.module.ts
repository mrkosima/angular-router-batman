import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BatmanComponent} from "./batman.component";
import {AuthGuard} from "../auth-guard.service";
import {BatmanDashboardComponent} from "./batman-dashboard.component";
import {BatmanAvatarComponent} from "./batman-avatar.component";

const routes: Routes = [
    {
        path: '',
        component: BatmanComponent,
        canActivateChild: [AuthGuard],
        children: [
            {path: '', component: BatmanDashboardComponent},
            {path: 'avatar', component: BatmanAvatarComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BatmanRoutingModule {
}
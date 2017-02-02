import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BatmanComponent} from "./batman.component";
import {BatmanRoutingModule} from "./batman-routing.module";
import {BatmanDashboardComponent} from "./batman-dashboard.component";
import {BatmanAvatarComponent} from "./batman-avatar.component";

@NgModule({
    imports: [
        CommonModule,
        BatmanRoutingModule
    ],
    declarations: [
        BatmanDashboardComponent,
        BatmanAvatarComponent,
        BatmanComponent
    ]
})
export class BatmanModule {
}
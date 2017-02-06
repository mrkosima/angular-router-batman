import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BatmanComponent} from "./batman.component";
import {BatmanRoutingModule} from "./batman-routing.module";
import {BatmanDashboardComponent} from "./batman-dashboard.component";
import {BatmanPersonalComponent} from "./batman-personal.component";

@NgModule({
    imports: [
        CommonModule,
        BatmanRoutingModule
    ],
    declarations: [
        BatmanDashboardComponent,
        BatmanPersonalComponent,
        BatmanComponent
    ]
})
export class BatmanModule {
}
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AppRoutingModule} from "./app-routing.module";
import {Page404Component} from "./page404.component";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {CallComponent} from "./call.component";
import {DialogService} from "./dialog.service";
import {HeroesModule} from "./heroes/heroes.module";


@NgModule({
    imports: [
        BrowserModule,
        LoginRoutingModule,
        HeroesModule,
        AppRoutingModule
    ],
    declarations: [
        NavbarComponent,
        Page404Component,
        LoginComponent,
        CallComponent,
        AppComponent
    ],
    providers: [DialogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
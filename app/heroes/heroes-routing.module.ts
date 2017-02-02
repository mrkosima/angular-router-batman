import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroDetailComponent} from "./hero-details.component";
import {HeroesListComponent} from "./heroes-list.component";

const heroesRoutes: Routes = [
    {path: 'heroes', component: HeroesListComponent},
    {path: 'hero/:id', component: HeroDetailComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroesRoutingModule {
}
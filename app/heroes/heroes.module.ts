import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroDetailComponent} from "./hero-details.component";
import {HeroesService} from "./heroes.service";
import {HeroesListComponent} from "./heroes-list.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    declarations: [
        HeroesListComponent,
        HeroDetailComponent
    ],
    providers: [ HeroesService ]
})
export class HeroesModule {}
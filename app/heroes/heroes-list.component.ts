import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Hero, HeroesService} from "./heroes.service";

@Component({
    template: `
    <h3>HEROES</h3>
    <ul class="items">
      <li *ngFor="let hero of heroes | async"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
  `
})

export class HeroesListComponent implements OnInit {
    heroes: Observable<Hero[]>;

    private selectedId: number;

    constructor(
        private service: HeroesService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.heroes = this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.service.getHeroes();
            });
    }

    isSelected(hero: Hero) { return hero.id === this.selectedId; }

    onSelect(hero: Hero) {
        this.router.navigate(['/hero', hero.id]);
    }
}
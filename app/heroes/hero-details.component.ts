import "rxjs/add/operator/switchMap";
import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Hero, HeroesService} from "./heroes.service";

@Component({
    moduleId: __moduleName,
    templateUrl: 'hero-details.component.html'
})
export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: HeroesService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.service.getHero(+params['id']))
            .subscribe((hero: Hero) => this.hero = hero);
    }

    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
    }
}
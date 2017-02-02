import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

const getRandomPhone = function () {
    return `+375 (${Math.random() > 0.5 ? '33' : '29'}) ${Math.floor(Math.random() * 10000000)}`;
};

export class Hero {
    phone: string;

    constructor(public id: number, public name: string, public assetPath: string) {
        this.phone = getRandomPhone();
    };
}

const HEROES = [
    new Hero(11, 'Spiderman', '/assets/spiderman.jpg'),
    new Hero(12, 'Captain America', '/assets/captain_america.jpg'),
    new Hero(13, 'Iron Man', '/assets/ironman.jpg'),
    new Hero(14, 'Daredevil', '/assets/deredevil.jpg'),
    new Hero(15, 'Hulk', '/assets/hulk.jpg')
];

@Injectable()
export class HeroesService {

    getHeroes(): Observable<Hero[]> {
        return Observable.of(HEROES);
    }

    getHero(id: number | string) {
        return this.getHeroes()
            .map(heroes => heroes.find(hero => hero.id === +id))
    }
}
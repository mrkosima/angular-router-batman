import {Component} from "@angular/core";

@Component({
    template: `
<h3>I'M BATMAN</h3>
<div class="batman-page-header">
    <nav>
        <ul class="nav nav-pills">
            <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><a routerLink="./" preserveQueryParams preserveFragment>Dashboard</a></li>
            <li routerLinkActive="active"><a routerLink="./avatar" preserveQueryParams preserveFragment>Avatar</a></li>
        </ul>
    </nav>
</div>
<div class="batman-page-container">
    <router-outlet></router-outlet>
</div>
`
})

export class BatmanComponent {

}
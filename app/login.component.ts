import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
    selector: 'login',
    template: `<h3>LOGIN</h3>
<p>{{message}}</p>
<p>
    <button *ngIf="!authService.isLoggedIn" class="btn btn-default" (click)="login()">Login</button>
    <button *ngIf="authService.isLoggedIn" class="btn btn-danger" (click)="logout()">Logout</button>
</p>
`
})

export class LoginComponent {

    message: string;

    constructor(public authService: AuthService, private router: Router) {
        this.updateMessage();
    }

    login() {
        this.message = 'Trying to log in...';
        this.authService.login().subscribe((loggedIn: boolean) => {
            this.updateMessage();
            if (loggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/batman';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                this.router.navigate([redirect], navigationExtras);
                this.authService.redirectUrl = null;
            }
        });
    }

    logout() {
        this.authService.logout();
    }

    updateMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

}
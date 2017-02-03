import {Component, HostBinding} from '@angular/core';
import {Router} from "@angular/router";
import {fadeAnimation} from "./animations";

@Component({
    template:`
<div class="call-batman">
    <h2 class="call-batman-title">Call Batman</h2>
    <p *ngIf="!sending" class="call-batman-action">
        <button class="btn btn-danger" (click)="send()">Call</button>
        <button class="btn btn-default" (click)="cancel()">Cancel</button>
    </p>
    <p *ngIf="sending" class="call-batman-action">Sending Message...<p>
</div>
`,
    animations: [fadeAnimation]
})

export class CallComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'relative';

    details: string;

    constructor(private router: Router) {}

    send() {
        this.sending = true;

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    cancel() {
        this.closePopup();
    }

    closePopup() {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null }}]);
    }
}
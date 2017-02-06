import {animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

export const fadeAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateY(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(20px)'
            }),
            animate('0.5s ease-in')
        ]),
        transition(':leave', [
            animate('0.5s ease-in', style({
                opacity: 0,
                transform: 'translateY(20px)'
            }))
        ])
    ]);
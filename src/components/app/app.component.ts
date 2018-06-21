import { Component } from '@angular/core';

import { SentenceData } from '../../models';

@Component({
    selector: 'pig-latin-app',
    template: './app.component.html'
})
export class AppComponent {
    sentences: SentenceData[] = null;

    constructor() {
    }
}
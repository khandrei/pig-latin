import { Component } from '@angular/core';

import { SentenceData } from '../../models';

@Component({
    selector: 'pig-latin-app',
    template: require('./app.component.html')
})
export class AppComponent {
    sentences: SentenceData[] = null;

    constructor() {
    }
}
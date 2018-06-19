import { Component } from '@angular/core';

import { SentenceData } from '../../models';
import { SentenceService } from '../../services/sentence.service';

@Component({
    selector: 'sentence-list',
    template: require('./sentence-list.component.html'),
    styles: []
})
export class SentenceListComponent {
    sentences: Array<SentenceData> = [];

    constructor(private sentenceService: SentenceService) {
        this.sentenceService.sentences
            .subscribe((sentences) => this.sentences = sentences);
    }
}
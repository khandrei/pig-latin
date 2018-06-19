import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { SentenceData } from '../models';

@Injectable()
export class SentenceService {
    sentences = new BehaviorSubject<Array<SentenceData>>([]);
    private _sentences: Array<SentenceData> = [];

    public addSentence(sentence: SentenceData) {
        this._sentences.unshift(sentence);
        this.sentences.next([...this._sentences]);
    }
}
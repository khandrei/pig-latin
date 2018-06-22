import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { SentenceData } from '../models';

@Injectable()
export class SentenceService {
    sentences = new BehaviorSubject<Array<SentenceData>>([]);
    private _sentences: Array<SentenceData> = [];
    private _sentencesLength = 10;

    public addSentence(sentence: SentenceData) {
        if (this._sentences.length >= this._sentencesLength) {
            this._sentences.splice(this._sentencesLength);
        }

        this._sentences.unshift(sentence);
        this.sentences.next([...this._sentences]);
    }
}
import { BehaviorSubject } from 'rxjs/Rx';

import { SentenceService } from './sentence.service';
import { SentenceData } from '../models';

describe('Service: SentenceService', () => {
    const testSentences: Array<SentenceData> = [
        {
            id: 1,
            sentence: 'test',
            translation: 'test'
        },
        {
            id: 5,
            sentence: 'test2',
            translation: 'test2'
        }
    ];
    let service: SentenceService;

    beforeEach(() => {
        service = new SentenceService();
    });

    it('should have a `forms` attribute that is a BehaviorSubject', () => {
        expect(service.sentences instanceof BehaviorSubject).toBe(true);
    });


    it('#addSentence should call sentences.next', () => {
        spyOn(service.sentences, 'next');
        service.addSentence(testSentences[0]);

        expect(service.sentences.next).toHaveBeenCalledWith(testSentences);
    });

});
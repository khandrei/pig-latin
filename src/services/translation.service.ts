import { Injectable } from '@angular/core';

import { SentenceData } from '../models';

@Injectable()
export class TranslationService {
    private vowels = ['a', 'e', 'i', 'o', 'u'];

    public translateSentence(item: SentenceData): SentenceData {
        const sentence = item.sentence;
        let words = sentence.split(' ');

        item.translation = words
            .map(word => {
                if (this.checkForVowels(word)) {
                    word += 'way';
                } else {
                    for (let i = 0; i < word.length; i++) {
                        if (this.checkForVowels(word.charAt(i))) {
                            word = word.substring(i) + word.substring(0, i) + 'ay';
                            break;
                        }
                    }
                }

                return word;
            })
            .join(' ');

        return item;
    }

    private checkForVowels(string: String): Boolean {
        return this.vowels.indexOf(string.substring(0, 1).toLocaleLowerCase()) !== -1;
    }
}
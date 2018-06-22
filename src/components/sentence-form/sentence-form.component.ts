import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SentenceService } from '../../services/sentence.service';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'sentence-form',
    template: require('./sentence-form.component.html')
})
export class SentenceFormComponent {
    formGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private sentenceService: SentenceService,
        private translationService: TranslationService ) {
        this.formGroup = this.fb.group({
            sentence: ['', Validators.required],
            translation: ['', Validators.required]
        });
    }

    translate() {
        if (this.formGroup.value.sentence.length > 0) {
            const newSentence = this.translationService.translateSentence(this.formGroup.value);
            this.formGroup.setValue(newSentence);
        }
    }

    submit() {
        if (this.formGroup.valid) {
            this.sentenceService.addSentence(this.formGroup.value);
            this.formGroup.reset();
        }
    }
}
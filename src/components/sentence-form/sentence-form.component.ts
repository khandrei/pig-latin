import {
    Component
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { SentenceService } from '../../services/sentence.service';


@Component({
    selector: 'sentence-form',
    templateUrl: './sentence-form.component.html'
})
export class SentenceFormComponent {
    formGroup: FormGroup;

    constructor(private fb: FormBuilder, private sentenceService: SentenceService) {
        this.formGroup = this.fb.group({
            sentence: ['', Validators.required],
            translation: ''
        });
    }

    submit() {
        console.log(JSON.stringify(this.formGroup.value, null, 4));
        this.sentenceService.addSentence(this.formGroup.value);
        console.log(this.sentenceService.sentences.value);
        this.formGroup.reset();
    }
}
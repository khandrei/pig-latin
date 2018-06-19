import {
    TestBed
} from '@angular/core/testing';

import {
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';

import { SentenceFormComponent } from './sentence-form.component';

describe('Component: SentenceFormComponent', () => {
    let component: SentenceFormComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SentenceFormComponent],
            imports: [ReactiveFormsModule]
        });

        const fixture = TestBed.createComponent(SentenceFormComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('should create a `FormGroup`', () => {
        expect(component.formGroup instanceof FormGroup).toBe(true);
    });
});
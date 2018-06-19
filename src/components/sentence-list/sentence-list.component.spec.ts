import {
    async,
    TestBed
} from '@angular/core/testing';

import { SentenceListComponent } from './sentence-list.component';
import { SentenceService } from '../../services/sentence.service';

class MockFormService {
    sentences = {
        subscribe: () => {}
    }
}

describe('Component: SentenceListComponent', () => {
    let component: SentenceListComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SentenceListComponent],
            providers: [
                { provide: SentenceService, useClass: MockFormService }
            ]
        })
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(SentenceListComponent);

            component = fixture.componentInstance;
        });
    }));

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});
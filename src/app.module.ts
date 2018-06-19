import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { SentenceService } from './services/sentence.service';

import {
    AppComponent,
    SentenceFormComponent,
    SentenceListComponent
} from './components';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        SentenceFormComponent,
        SentenceListComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [
        SentenceService
    ]
})
export class AppModule {}
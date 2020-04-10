import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsCalculationsComponent } from './questions-calculations.component';
import { RouterModule } from '@angular/router';
import { IconButtonModule } from '../components/icon-button/icon-button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        QuestionsCalculationsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        IconButtonModule,
        FontAwesomeModule
    ]
})
export class QuestionsCalculationsModule { }

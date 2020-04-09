import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuotationDollarComponent } from './quotation-dollar.component';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { ResultCalculationsComponent } from './result-calculations/result-calculations.component';
import { ErrorFormModule } from '../components/error-form/error-form.module';
import { QuotationValueComponent } from './quotation-form/quotation-value/quotation-value.component';
import { ResultDataComponent } from './result-calculations/result-data/result-data.component';
@NgModule({
    declarations: [
        QuotationDollarComponent,
        QuotationFormComponent,
        ResultCalculationsComponent,
        QuotationValueComponent,
        ResultDataComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorFormModule
    ],
    exports: [
        QuotationValueComponent,
        ResultDataComponent
    ]
})
export class QuotationDollarModule {

}

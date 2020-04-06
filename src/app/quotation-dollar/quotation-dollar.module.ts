import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuotationDollarComponent } from './quotation-dollar.component';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';
import { ResultCalculationsComponent } from './result-calculations/result-calculations.component';

@NgModule({
    declarations: [
        QuotationDollarComponent,
        ConversionFormComponent,
        ResultCalculationsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class QuotationDollarModule {

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quotation-value',
  templateUrl: './quotation-value.component.html',
  styleUrls: ['./quotation-value.component.scss']
})
export class QuotationValueComponent {

  @Input() dollarValue: number;
  @Input() updateDate: Date;


}

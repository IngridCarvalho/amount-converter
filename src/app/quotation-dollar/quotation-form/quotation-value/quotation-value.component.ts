import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotation-value',
  templateUrl: './quotation-value.component.html',
  styleUrls: ['./quotation-value.component.scss']
})
export class QuotationValueComponent implements OnInit {

  @Input() dollarValue: number;
  @Input() updateDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

}

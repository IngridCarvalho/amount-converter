import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuotationDollarService } from 'src/app/quotation-dollar/service/quotation-dollar.service';
import { ConversionData } from './conversion-data';
import { ResultCalculation } from 'src/app/quotation-dollar/result-calculations/result/result-calculation';
import { QuotationDollar } from 'src/app/quotation-dollar/dollars/quotation-dollar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conversion-form',
  templateUrl: './conversion-form.component.html',
  styleUrls: ['./conversion-form.component.scss']
})
export class ConversionFormComponent implements OnInit {

  dollars: QuotationDollar;
  form: FormGroup;

  constructor(
    private router: Router,
    private quotationDollarService: QuotationDollarService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amountDollar: [null, Validators.required],
      stateTax: [null, Validators.required],
      payment: ['dinheiro', Validators.required]
    });

    this.getQuotation();
  }

  async calculate() {
    const dataForm: ConversionData = this.form.value;

    const resultUSD: ResultCalculation = await this.quotationDollarService
      .calculateConversion(this.form.value, this.dollars.USD.bid);

    this.router.navigate(['/'], {fragment: 'result'});
  }

  getQuotation() {
    this.quotationDollarService.getQuotationDollar()
      .subscribe(content => this.dollars = content);
  }

}

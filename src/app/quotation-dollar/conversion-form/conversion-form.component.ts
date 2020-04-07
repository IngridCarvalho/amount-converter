import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { QuotationDollarService } from 'src/app/quotation-dollar/service/quotation-dollar.service';
import { QuotationDollar } from 'src/app/quotation-dollar/dollars/dollar';
import { ResultType } from '../result-calculations/result/result';

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
    if (this.form.valid) {
      this.router.navigate(['']);

      const results: ResultType = {
        USD: await this.quotationDollarService
            .calculateConversion(this.form.value, this.dollars.USD.bid),
        USDT: await this.quotationDollarService
            .calculateConversion(this.form.value, this.dollars.USDT.bid),
        payment: this.form.get('payment').value
      };

      this.quotationDollarService.setResultCalculation(results);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  getQuotation() {
    this.quotationDollarService.getQuotationDollar()
      .subscribe(content => this.dollars = content);
  }

  verifyErrorForm(field) {
    if (this.form.get(field).invalid && this.form.get(field).touched) {
      return true;
    } else {
      return false;
    }
  }

}

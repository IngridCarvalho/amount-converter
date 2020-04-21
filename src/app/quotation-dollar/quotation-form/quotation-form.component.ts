import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { QuotationDollarService } from 'src/app/quotation-dollar/service/quotation-dollar.service';
import { QuotationDollar } from 'src/app/quotation-dollar/dollars/dollar';
import { ResultType } from '../result-calculations/result/result';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.scss']
})
export class QuotationFormComponent implements OnInit, OnDestroy {

  dollars: QuotationDollar;
  form: FormGroup;
  subscription: Subscription;
  showError = false;

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
    // takes the quote and updates it every 30 seconds
    this.subscription = this.quotationDollarService.getQuotationDollar()
      .pipe(
        map(content => this.dollars = content),
        switchMap(() => interval(30000))
      )
      .pipe(
        switchMap(() => this.quotationDollarService.getQuotationDollar())
      )
      .subscribe(content => this.dollars = content,
                 error => this.showError = true
      );
  }

  verifyErrorForm(field) {
    if (this.form.get(field).invalid && this.form.get(field).touched) {
      return true;
    } else {
      return false;
    }
  }

  help() {
    this.router.navigate(['/questions']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

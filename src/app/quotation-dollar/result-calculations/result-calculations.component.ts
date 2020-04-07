import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import { QuotationDollarService } from '../service/quotation-dollar.service';
import { ResultType } from './result/result';

@Component({
  selector: 'app-result-calculations',
  templateUrl: './result-calculations.component.html',
  styleUrls: ['./result-calculations.component.scss']
})
export class ResultCalculationsComponent implements OnInit, OnDestroy {

  results: ResultType;
  taxIOF: number;
  subscription: Subscription;

  constructor(
    private router: Router,
    private quotationDollarService: QuotationDollarService
  ) { }

  ngOnInit(): void {
    this.subscription = this.quotationDollarService.getResultCalculation()
      .subscribe(results => {
        this.results = results;

        if (this.results) {
          this.getTaxIOF(this.results.payment);

          setTimeout(() => {
            this.router.navigate(['/'], {fragment: 'result'});
          }, 200);
        }
      });
  }

  getTaxIOF(payment) {
    if (payment === 'dinheiro') {
      this.taxIOF = environment.moneyFee;
    } else {
      this.taxIOF = environment.cardFee;
    }
  }

  returnForm() {
    this.router.navigate(['/'], {fragment: 'conversion'});
    setTimeout(() => {
      this.results = null;
    }, 300);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

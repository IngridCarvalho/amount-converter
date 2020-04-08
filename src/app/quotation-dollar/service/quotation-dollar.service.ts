import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { FormData } from '../quotation-form/quotation/form-data';
import { ResultType, ResultCalculation } from 'src/app/quotation-dollar/result-calculations/result/result';
import { QuotationDollar } from '../dollars/dollar';

const API = environment.apiUrl;
const cardFee = environment.cardFee;
const moneyFee = environment.moneyFee;

@Injectable({
  providedIn: 'root'
})
export class QuotationDollarService {

  private resultCalculation = new BehaviorSubject<ResultType>(null);

  constructor(
    private http: HttpClient
  ) { }

  getQuotationDollar() {
    return this.http.get<QuotationDollar>(`${API}USD-BRL,USDT-BRL`).pipe(take(1));
  }

  setResultCalculation(results) {
    this.resultCalculation.next(results);
  }

  getResultCalculation() {
    return this.resultCalculation;
  }

  async calculateConversion(formData: FormData, quotationDay: number) {

    const resultConversion = new ResultCalculation();

    resultConversion.quotationDollar = quotationDay;
    resultConversion.dollarWithoutTax = formData.amountDollar;

    resultConversion.dollarTax = await this.getStateTax(formData.amountDollar, formData.stateTax);
    resultConversion.realWithoutTax = await this.getRealWithoutTax(formData.amountDollar, quotationDay);
    resultConversion.valueIOF = await this.getIOF(formData.payment, resultConversion.dollarTax, quotationDay);
    resultConversion.realTax = await this.getRealTax(resultConversion.dollarTax, quotationDay, resultConversion.valueIOF);

    return resultConversion;
  }

  async getStateTax(dollarValue: number, stateTax: number) {
    if (stateTax > 0) {
      return dollarValue + (dollarValue * (stateTax / 100));
    } else {
      return dollarValue;
    }
  }

  async getRealWithoutTax(dollarValue: number, quotationDay: number) {
    return dollarValue * quotationDay;
  }

  async getIOF(payment: string, dollarTax: number, quotationDay: number) {
    if (payment === 'dinheiro') {
      return (dollarTax * quotationDay) * moneyFee;
    } else {
      return (dollarTax * quotationDay) * cardFee;
    }
  }

  async getRealTax(dollarTax: number, quotationDay: number, valueIOF: number) {
    return (dollarTax * quotationDay) + valueIOF;
  }

}

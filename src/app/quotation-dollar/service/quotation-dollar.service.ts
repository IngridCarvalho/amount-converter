import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { ConversionData } from 'src/app/quotation-dollar/conversion-form/conversion-data';
import { ResultCalculation } from 'src/app/quotation-dollar/result-calculations/result/result-calculation';
import { QuotationDollar } from '../dollars/quotation-dollar';

const API = environment.apiUrl;
const cardFee = environment.cardFee;
const moneyFee = environment.moneyFee;

@Injectable({
  providedIn: 'root'
})
export class QuotationDollarService {

  constructor(
    private http: HttpClient
  ) { }

  getQuotationDollar() {
    return this.http.get<QuotationDollar>(`${API}USD-BRL,USDT-BRL`);
  }

  async calculateConversion(conversionData: ConversionData, quotationDay: number) {

    const resultConversion = new ResultCalculation();

    resultConversion.quotationDollar = quotationDay;
    resultConversion.dollarWithoutTax = conversionData.amountDollar;

    resultConversion.dollarTax = await this.getStateTax(conversionData.amountDollar, conversionData.stateTax);
    resultConversion.realWithoutTax = await this.getRealWithoutTax(conversionData.amountDollar, quotationDay);
    resultConversion.valueIOF = await this.getIOF(conversionData.payment, resultConversion.dollarTax, quotationDay);
    resultConversion.realTax = await this.getRealTax(resultConversion.dollarTax, quotationDay, resultConversion.valueIOF);

    return resultConversion;
  }

  private async getStateTax(dollarValue: number, stateTax: number) {
    return dollarValue + (dollarValue * (stateTax / 100));
  }

  private async getRealWithoutTax(dollarValue: number, quotationDay: number) {
    return dollarValue * quotationDay;
  }

  private async getIOF(payment: string, dollarTax: number, quotationDay: number) {
    if (payment === 'dinheiro') {
      return (dollarTax * quotationDay) * moneyFee;
    } else {
      return (dollarTax * quotationDay) * cardFee;
    }
  }

  private async getRealTax(dollarTax: number, quotationDay: number, valueIOF: number) {
    return (dollarTax * quotationDay) + valueIOF;
  }

}

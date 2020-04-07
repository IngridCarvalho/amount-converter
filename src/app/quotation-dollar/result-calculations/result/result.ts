export class ResultCalculation {
    quotationDollar: number;
    valueIOF: number;
    dollarWithoutTax: number;
    dollarTax: number;
    realWithoutTax: number;
    realTax: number;
}
export interface ResultType {
    USD: ResultCalculation;
    USDT: ResultCalculation;
    payment: string;
}

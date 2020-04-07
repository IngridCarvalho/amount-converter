export interface QuotationDollar {
    USD: DataDollar;
    USDT: DataDollar;
}
export interface DataDollar {
    code: string;
    codein: string;
    name: string;
    bid: number;
    create_date: Date;
}

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QuotationDollarService } from './quotation-dollar.service';

describe('QuotationDollarService', () => {
  let service: QuotationDollarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(QuotationDollarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('the result of adding the dollar to the state rate should be 1100', async () => {
    expect(await service.getStateTax(1000, 9.5)).toEqual(1095);
  });

  it('the result of real without tax should be 5350', async () => {
    expect(await service.getRealWithoutTax(1000, 5.35)).toEqual(5350);
  });

  it('the result of value IOF in money should be 64.44075', async () => {
    expect(await service.getIOF('dinheiro', 1095, 5.35)).toEqual(64.44075);
  });

  it('the result of value IOF in card should be 373.75635', async () => {
    expect(await service.getIOF('cartao', 1095, 5.35)).toEqual(373.75635);
  });

  it('the result of Real with tax should be 5922.69075', async () => {
    expect(await service.getRealTax(1095, 5.35, 64.44075)).toEqual(5922.69075);
  });
});

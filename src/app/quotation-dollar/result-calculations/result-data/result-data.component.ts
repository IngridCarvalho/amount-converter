import { Component, OnInit, Input } from '@angular/core';
import { ResultCalculation } from '../result/result';

@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.scss']
})
export class ResultDataComponent implements OnInit {

  @Input() resultData: ResultCalculation;
  @Input() taxIOF: number;
  @Input() dollarType: string;

  constructor() { }

  ngOnInit(): void {
  }

}

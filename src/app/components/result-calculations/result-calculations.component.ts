import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-calculations',
  templateUrl: './result-calculations.component.html',
  styleUrls: ['./result-calculations.component.scss']
})
export class ResultCalculationsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  return() {
    this.router.navigate(['/'], {fragment: 'conversion'});
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions-calculations',
  templateUrl: './questions-calculations.component.html',
  styleUrls: ['./questions-calculations.component.scss']
})
export class QuestionsCalculationsComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  return() {
    this.router.navigate(['/']);
  }

}

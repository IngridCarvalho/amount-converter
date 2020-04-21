import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions-calculations',
  templateUrl: './questions-calculations.component.html',
  styleUrls: ['./questions-calculations.component.scss']
})
export class QuestionsCalculationsComponent {

  faArrowLeft = faArrowLeft;

  constructor(
    private router: Router
  ) { }

  return() {
    this.router.navigate(['/']);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.scss']
})
export class ErrorFormComponent implements OnInit {

  @Input() showError: boolean;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}

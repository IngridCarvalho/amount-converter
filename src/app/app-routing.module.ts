import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { QuotationDollarComponent } from './quotation-dollar/quotation-dollar.component';
import { QuestionsCalculationsComponent } from './questions-calculations/questions-calculations.component';

const routes: Routes = [
    {
      path: '',
      component: QuotationDollarComponent
    },
    {
      path: 'questions',
      component: QuestionsCalculationsComponent
    }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

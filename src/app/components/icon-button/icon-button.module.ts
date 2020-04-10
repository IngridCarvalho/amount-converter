import { NgModule } from '@angular/core';
import { IconButtonComponent } from './icon-button.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        IconButtonComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        IconButtonComponent
    ]
})
export class IconButtonModule {

}

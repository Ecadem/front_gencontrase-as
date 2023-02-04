import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { PrimeModule } from '../prime/prime.module';



@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    PanelComponent
  ]
})
export class MainModule { }

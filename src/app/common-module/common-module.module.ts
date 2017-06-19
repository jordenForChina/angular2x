import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDirective } from './base.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseDirective],
  exports:[BaseDirective]
})
export class CommonModuleModule { }

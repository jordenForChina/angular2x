import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDirective } from './base.directive';
import { HostListenerDirective } from './host-listener.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseDirective, HostListenerDirective],
  exports:[BaseDirective,HostListenerDirective]
})
export class CommonModuleModule { }

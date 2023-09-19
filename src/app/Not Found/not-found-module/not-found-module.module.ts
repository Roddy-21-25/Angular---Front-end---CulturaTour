import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundModuleRoutingModule } from './not-found-module-routing.module';
import { NotFoundRootComponent } from '../not-found-root/not-found-root.component';

@NgModule({
  declarations: [
    NotFoundRootComponent
  ],
  imports: [
    CommonModule,
    NotFoundModuleRoutingModule
  ]
})
export class NotFoundModuleModule { }

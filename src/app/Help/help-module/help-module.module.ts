import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpModuleRoutingModule } from './help-module-routing.module';
import { HelpRootComponent } from '../Page/help-root/help-root.component';
import { QandAComponent } from '../Component/qand-a/qand-a.component';
import { SharedModule } from 'src/app/Root Components/shared/shared.module';

@NgModule({
  declarations: [
    HelpRootComponent,
    QandAComponent
  ],
  imports: [
    CommonModule,
    HelpModuleRoutingModule,
    SharedModule
  ]
})
export class HelpModuleModule { }

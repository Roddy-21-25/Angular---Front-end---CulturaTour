import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModuleRoutingModule } from './contact-module-routing.module';
import { ContactRootComponent } from '../Page/contact-root/contact-root.component';
import { ContactHeaderComponent } from '../Component/contact-header/contact-header.component';
import { SharedModule } from 'src/app/Root Components/shared/shared.module';

@NgModule({
  declarations: [
    ContactRootComponent,
    ContactHeaderComponent
  ],
  imports: [
    CommonModule,
    ContactModuleRoutingModule,
    SharedModule
  ]
})
export class ContactModuleModule { }

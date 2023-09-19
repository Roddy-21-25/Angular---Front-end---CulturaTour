import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutModuleRoutingModule } from './about-module-routing.module';
import { AboutRootComponent } from '../Page/about-root/about-root.component';
import { HeaderComponent } from '../Component/header/header.component';
import { MisionVisionComponent } from '../Component/mision-vision/mision-vision.component';

import { SharedModule } from 'src/app/Root Components/shared/shared.module';

@NgModule({
  declarations: [
    AboutRootComponent,
    HeaderComponent,
    MisionVisionComponent
  ],
  imports: [
    CommonModule,
    AboutModuleRoutingModule,
    SharedModule
  ]
})
export class AboutModuleModule { }

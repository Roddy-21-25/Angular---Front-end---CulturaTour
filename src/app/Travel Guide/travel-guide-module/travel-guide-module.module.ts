import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelGuideModuleRoutingModule } from './travel-guide-module-routing.module';
import { TravelRootComponent } from '../Page/travel-root/travel-root.component';
import { TravelGuideHeaderComponent } from '../Component/travel-guide-header/travel-guide-header.component';
import { SharedModule } from 'src/app/Root Components/shared/shared.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TravelRootComponent,
    TravelGuideHeaderComponent
  ],
  imports: [
    CommonModule,
    TravelGuideModuleRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TravelGuideModuleModule { }

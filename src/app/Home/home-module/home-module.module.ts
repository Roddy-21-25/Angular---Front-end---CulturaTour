import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeRootComponent } from '../Page/home-root/home-root.component';
import { HeaderComponent } from '../Component/header/header.component';
import { FunctionsComponent } from '../Component/functions/functions.component';
import { SliderComponent } from '../Component/slider/slider.component';

// Shared Module
import { SharedModule } from 'src/app/Root Components/shared/shared.module';

@NgModule({
  declarations: [
    HomeRootComponent,
    HeaderComponent,
    FunctionsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    SharedModule
  ]
})
export class HomeModuleModule { }

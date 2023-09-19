import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelRootComponent } from '../Page/travel-root/travel-root.component';

const routes: Routes = [
  {
    path: '', component: TravelRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelGuideModuleRoutingModule { }

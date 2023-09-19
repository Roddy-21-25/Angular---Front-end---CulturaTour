import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpRootComponent } from '../Page/help-root/help-root.component';

const routes: Routes = [
  {
    path: '', component: HelpRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpModuleRoutingModule { }

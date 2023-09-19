import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundRootComponent } from '../not-found-root/not-found-root.component';

const routes: Routes = [
  {
    path: '', component: NotFoundRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundModuleRoutingModule { }

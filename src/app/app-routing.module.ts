import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Home/home-module/home-module.module').then(m => m.HomeModuleModule)
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'signup', component: SignUpComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./About/about-module/about-module.module').then(m => m.AboutModuleModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Contact/contact-module/contact-module.module').then(m => m.ContactModuleModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./Help/help-module/help-module.module').then(m => m.HelpModuleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'travel',
    loadChildren: () => import('./Travel Guide/travel-guide-module/travel-guide-module.module').then(m => m.TravelGuideModuleModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./Not Found/not-found-module/not-found-module.module').then(m => m.NotFoundModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

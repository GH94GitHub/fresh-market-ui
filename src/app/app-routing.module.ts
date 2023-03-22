import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SubscriptionSignUpComponent } from './pages/subscription-sign-up/subscription-sign-up.component';
import { BaseLayoutComponent } from './shared/layouts/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
 { path: '', component: BaseLayoutComponent, children: [
   { path: '', component: LandingPageComponent },
   { path: 'signup', component: SubscriptionSignUpComponent },
 ]},
 { path: 'auth', component: AuthLayoutComponent, children: [
  { path: 'login', component: LoginComponent }
 ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

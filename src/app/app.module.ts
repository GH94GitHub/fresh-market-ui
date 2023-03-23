import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SubscriptionSignUpComponent } from './pages/subscription-sign-up/subscription-sign-up.component';
import { LoginComponent } from './login/login.component';
import { BaseLayoutComponent } from './shared/layouts/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { SmallDishDetailsComponent } from './shared/small-dish-details/small-dish-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';


const materialModules = [
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatStepperModule,
  MatCardModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SubscriptionSignUpComponent,
    LoginComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    SmallDishDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

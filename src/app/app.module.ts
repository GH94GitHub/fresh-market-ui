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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DishCheckBoxComponent } from './shared/components/dish-check-box/dish-check-box.component';
import { NumberRangeComponent } from './shared/components/number-range/number-range.component';

const materialModules = [
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatStepperModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SubscriptionSignUpComponent,
    LoginComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    SmallDishDetailsComponent,
    DishCheckBoxComponent,
    NumberRangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    ...materialModules,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

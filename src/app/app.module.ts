import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FamilyMemberComponent } from './family-member/family-member.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { EbMeterDetailsComponent } from './eb-meter-details/eb-meter-details.component';
import { MatNativeDateModule } from '@angular/material/core';

import { MaterialModule } from '../../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    FamilyMemberComponent,
    LoginPageComponent,
    FlatDetailComponent,
    EbMeterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

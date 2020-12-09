import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { Payment2Component } from './payment2/payment2.component';
import { Payment3Component } from './payment3/payment3.component';
import { KifiFooterComponent } from './commons/kifi-footer/kifi-footer.component';
import { KifiHeaderComponent } from './commons/kifi-header/kifi-header.component';
import { Payment4Component } from './payment4/payment4.component';
import { StudentsInfoComponent } from './students-info/students-info.component';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'personal-infos',
    component: Payment2Component,
  },
  {
    path: 'student-infos',
    component: StudentsInfoComponent,
  },
  {
    path: 'validate-payment',
    component: Payment3Component,
  },
  {
    path: 'payment-infos',
    component: Payment4Component,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  // { path: '**', redirectTo: 'error' },
  // { path: '', redirectTo: 'payment' },
];

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ErrorComponent,
    Payment2Component,
    Payment3Component,
    KifiFooterComponent,
    KifiHeaderComponent,
    Payment4Component,
    StudentsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent,
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
    ErrorComponent
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

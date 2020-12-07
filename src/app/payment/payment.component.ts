import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentTypes: string[] = [
    'Orange Money',
    'MTN Mobile Money',
    'YUP',
    'Express Union'
  ];

  BASE_URL_FOR_IMAGES = 'assets/';

  selected_service: string;
  corresponding_image: string;


  constructor() { }

  ngOnInit(): void {
  }

  onChange(service: string): void {
    console.log("SERVICE -> ", service);
    if(service == this.paymentTypes[0]) this.corresponding_image = this.BASE_URL_FOR_IMAGES +  'OM-logo.png';
    if(service == this.paymentTypes[1]) this.corresponding_image = this.BASE_URL_FOR_IMAGES +  'MOMO-logo.jpg';
    if(service == this.paymentTypes[2]) this.corresponding_image = this.BASE_URL_FOR_IMAGES +  'YUP-logo.png';
    if(service == this.paymentTypes[3]) this.corresponding_image = this.BASE_URL_FOR_IMAGES +  'EU-logo.png';

    console.log('CORRESPONDING IMAGE -> ', this.corresponding_image);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../models/information';

@Component({
  selector: 'app-payment4',
  templateUrl: './payment4.component.html',
  styleUrls: ['./payment4.component.scss']
})
export class Payment4Component implements OnInit {

  BASE_LOGO_IMAGES_URL: string = 'assets/';
  paymentServiceLogo: string;
  paymentServiceSelected: string;

  information: Information;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.information = JSON.parse(this.route.snapshot.paramMap.get('information'));

    if(this.information.paymentType == 'OM') {
      this.paymentServiceLogo = this.BASE_LOGO_IMAGES_URL + 'OM-logo.png';
      this.paymentServiceSelected = 'Orange Money';
    }
    if(this.information.paymentType == 'MOMO') {
      this.paymentServiceLogo = this.BASE_LOGO_IMAGES_URL + 'MOMO-logo.jpg';
      this.paymentServiceSelected = 'MTN Mobile Money';
    }
    if(this.information.paymentType == 'YUP') {
      this.paymentServiceLogo = this.BASE_LOGO_IMAGES_URL + 'YUP-logo.png';
      this.paymentServiceSelected = 'YUP';
    }
    if(this.information.paymentType == 'EU') {
      this.paymentServiceLogo = this.BASE_LOGO_IMAGES_URL + 'EU-logo.png';
      this.paymentServiceSelected = 'Express Union Mobile';
    }

    console.log('received data ===> ', this.route.snapshot.paramMap.get('information'))
  }

}

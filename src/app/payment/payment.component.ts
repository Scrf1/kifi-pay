import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../commons/notification.service';

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

  selected_service: string = '';
  corresponding_image: string;


  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }

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

  goToInformationPage() {
    let paymentTypeToUse: string = '';

    if(this.selected_service == '' || this.selected_service == null)
      this.notificationService.notifyBlue("Vous n'avez pas choisi de mode de paiement");
    else {
      if(this.selected_service == this.paymentTypes[0]) paymentTypeToUse = 'OM';
      if(this.selected_service == this.paymentTypes[1]) paymentTypeToUse = 'MOMO';
      if(this.selected_service == this.paymentTypes[2]) paymentTypeToUse = 'YUP';
      if(this.selected_service == this.paymentTypes[3]) paymentTypeToUse = 'EU';

      this.router.navigate(['/student-infos', {paymentType: paymentTypeToUse}]);
    }
  }
}

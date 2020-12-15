import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../models/information';
import {Location} from '@angular/common';

@Component({
  selector: 'app-payment3',
  templateUrl: './payment3.component.html',
  styleUrls: ['./payment3.component.scss']
})
export class Payment3Component implements OnInit {

  numForm: FormGroup = new FormGroup(
    {
      'mobilePaymentPhoneNumber': new FormControl(0, Validators.required)
    }
  );

  information: Information;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.numForm.setValue(
      {
        mobilePaymentPhoneNumber: ''
      }
    );
  }

  ngOnInit(): void {
    this.information = JSON.parse(this.route.snapshot.paramMap.get('information'));
    console.log('RECEIVED INFO ===> ',  this.information);
  }

  onSubmit(): void {
    if(this.numForm.valid) {
      this.information.mobilePaymentPhoneNumber = this.numForm.controls['mobilePaymentPhoneNumber'].value;

      this.router.navigate(['/payment-infos', {information: JSON.stringify(this.information)}]);
    }
  }

  get mobilePaymentPhoneNumber() {return this.numForm.get('mobilePaymentPhoneNumber');}

  goBack() {
    this.location.back();
  }

}

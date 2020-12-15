import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../models/information';
import {Location} from '@angular/common';
import { NotificationService } from '../commons/notification.service';

@Component({
  selector: 'app-students-info',
  templateUrl: './students-info.component.html',
  styleUrls: ['./students-info.component.scss']
})
export class StudentsInfoComponent implements OnInit {

  classes: string[] = [
    '6ème', '5ème', '4ème', '3ème', "2nde", "1ère", "Tle"
  ];

  selected_class: string = "";
  information: Information = new Information();

  studentForm: FormGroup = new FormGroup(
    {
      payerName: new FormControl('', Validators.required),
      payerNumber: new FormControl('', Validators.required),
      payerEmail: new FormControl('', null),
      studentFirstName: new FormControl('', null),
      studentLastName: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required),
      registrationNumber: new FormControl('', null)
    }
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private notificationService: NotificationService
  ) {
    this.studentForm.setValue( {
      payerName: '',
      payerNumber: '',
      payerEmail: '',
      studentFirstName: '',
      studentLastName: '',
      class: null,
      registrationNumber: ''
    });
  }

  ngOnInit(): void {
    console.log('RECEIVED DATA ===> ', this.route.snapshot.paramMap.get('paymentType'))
  }

  onSubmit(): void {
    console.log('IS FORM VALID? ==> ', this.studentForm.valid);
    if(this.studentForm.invalid)
      this.notificationService.notifyRed('Les informations enregistrées sont invalides');
    if(this.studentForm.valid) {
      this.information.payerName = this.studentForm.controls['payerName'].value;
      this.information.payerNumber = this.studentForm.controls['payerNumber'].value;
      this.information.payerEmail = this.studentForm.controls['payerEmail'].value;
      this.information.studentName = this.studentForm.controls['studentLastName'].value + ' ' +  this.studentForm.controls['studentFirstName'].value;
      this.information.class = this.studentForm.controls['class'].value;
      this.information.registrationNumber = this.studentForm.controls['registrationNumber'].value;
      this.information.paymentType = this.route.snapshot.paramMap.get('paymentType');

      this.router.navigate(['/validate-payment', {information: JSON.stringify(this.information)}]);
    }
  }

  goBack() {
    this.location.back();
  }

  get payerName() {return this.studentForm.get('payerName')}
  get payerNumber() {return this.studentForm.get('payerNumber')}
  get payerEmail() {return this.studentForm.get('payerEmail')}
  get studentFirstName() {return this.studentForm.get('studentFirstName')}
  get studentLastName() {return this.studentForm.get('studentLastName')}
  get class() {return this.studentForm.get('class')}
  get registrationNumber() {return this.studentForm.get('registrationNumber')}
}

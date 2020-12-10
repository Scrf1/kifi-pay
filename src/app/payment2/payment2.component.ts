import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../models/information';

@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.component.html',
  styleUrls: ['./payment2.component.scss']
})
export class Payment2Component implements OnInit {

  information: Information;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('RECEIVED DATA ===> ', this.route.snapshot.paramMap.get('paymentType'))
  }

}

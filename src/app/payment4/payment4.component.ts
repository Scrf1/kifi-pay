import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment4',
  templateUrl: './payment4.component.html',
  styleUrls: ['./payment4.component.scss']
})
export class Payment4Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('received data ===> ', this.route.snapshot.paramMap.get('information'))
  }

}

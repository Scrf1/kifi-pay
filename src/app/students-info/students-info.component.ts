import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

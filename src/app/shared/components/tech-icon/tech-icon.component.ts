import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tech-icon',
  templateUrl: './tech-icon.component.html',
  styleUrls: ['./tech-icon.component.css'],
})
export class TechIconComponent implements OnInit {
  @Input() icon: any;

  constructor() {}

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public birthday: Date = new Date('10-25-1996');

  constructor() {}

  ngOnInit() {}

  public getAge(): number {
    return Math.abs(
      new Date(Date.now() - this.birthday.getTime()).getUTCFullYear() - 1970
    );
  }
}

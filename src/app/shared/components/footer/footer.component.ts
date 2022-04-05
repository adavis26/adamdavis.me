import { Component, OnInit } from '@angular/core';
import { version } from '../../../../../package.json';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public version: string;

  constructor() {
    this.version = version;
  }

  ngOnInit() {}
}

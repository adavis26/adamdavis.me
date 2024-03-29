import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ILink } from '../../shared/interfaces/link.interface';
import { ContactsService } from '../../shared/services/contacts.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public links: ILink[];
  public windowHeight = window.innerHeight - 100;
  public showScrollHelp = true;
  public timeout = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight - 100;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showScrollHelp = false;
  }

  constructor(cs: ContactsService) {
    this.links = cs.getLinks();
  }

  ngOnInit() {
    setTimeout(() => {
      this.timeout = false;
    }, 2000);
  }
}

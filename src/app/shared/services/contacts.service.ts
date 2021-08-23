import { Injectable } from '@angular/core';
import { ILink } from '../interfaces/link.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  public getLinks(): ILink[] {
    return [
      {
        key: 'linkedin',
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/davisadj',
        icon: 'apartment'
      },
      {
        key: 'email',
        title: 'Email',
        link: 'mailto:a.davis.dev@gmail.com',
        icon: 'email'
      },
      {
        key: 'github',
        title: 'Github',
        link: '',
        icon: 'code'
      }
    ];
  }
}

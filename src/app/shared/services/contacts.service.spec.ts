/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ContactsService } from './contacts.service';

describe('Service: Contacts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsService]
    });
  });

  it('should ...', inject([ContactsService], (service: ContactsService) => {
    expect(service).toBeTruthy();
  }));
});

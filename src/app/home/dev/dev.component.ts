import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TechnologyService } from 'src/app/shared/services/technology.service';
import { DevInfoComponent } from './dev-info/dev-info.component';

export interface ITech {
  technology: string;
  skill: string;
  icon: {
    type: string;
    value: string;
    color?: string;
  };
  info: {
    description: string;
    tags: string[];
  };
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  public cols = 3;
  public devLists: { type: string; list: ITech[] }[];

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _infoSheet: MatBottomSheet,
    private readonly tecnologyService: TechnologyService
  ) {
    this.initBreakpointObserver();
    this.devLists = this.tecnologyService.getTechnologies();
  }

  public openInfoSheet(tech) {
    this._infoSheet.open(DevInfoComponent, {
      scrollStrategy: new NoopScrollStrategy(),
      data: tech,
    });
  }

  ngOnInit() {}

  public initBreakpointObserver() {
    this.breakpointObserver
      .observe(['(max-width: 750px)', '(max-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints['(max-width: 750px)']) {
          this.cols = 2;
        }
        if (state.breakpoints['(max-width: 500px)']) {
          this.cols = 1;
        }

        if (
          !state.breakpoints['(max-width: 500px)'] &&
          !state.breakpoints['(max-width: 750px)']
        ) {
          this.cols = 3;
        }
      });
  }
}

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { TechnologyService } from 'src/app/shared/services/technology.service';
import { StateFacade } from 'src/app/state/state.facade';

export interface ITech {
  technology: string;
  skill: number;
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
  public isMobile$: Observable<boolean> = this.stateFacade.isMobile$;

  public showTech = false;
  openClose: any[];

  constructor(
    public breakpointObserver: BreakpointObserver,
    private readonly tecnologyService: TechnologyService,
    private readonly stateFacade: StateFacade
  ) {
    this.initBreakpointObserver();
    this.devLists = this.tecnologyService.getTechnologies();
    this.openClose = new Array(this.devLists.length);
    this.openClose.fill(false);
  }

  ngOnInit() {}

  public initBreakpointObserver() {
    this.breakpointObserver
      .observe(['max-width: 750px)', '(max-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (!state.breakpoints['(max-width: 500px)']) {
          this.cols = 2;
        }
        if (state.breakpoints['(max-width: 500px)']) {
          this.cols = 1;
        }
      });
  }

  public toggleShowTech() {
    this.showTech = !this.showTech;
  }
}

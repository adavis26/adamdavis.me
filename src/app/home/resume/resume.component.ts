import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IJob } from '../../shared/interfaces/job.interface';
import { StateFacade } from '../../state/state.facade';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public jobs: IJob[];
  public isMobile$: Observable<boolean> = this.stateFacde.isMobile$;
  public expandList: number[] = [];

  constructor(public stateFacde: StateFacade) {
    this.jobs = this.getJobData();
  }

  ngOnInit() {}

  public getJobData = (): IJob[] => [
    {
      title: 'Associate Automation & Infrastructure Engineer',
      company: 'Epsilon Data Management, LLC',
      companyImg: 'epsilon.png',
      start: 'June 2020',
      end: 'Now',
      description: [
        `Full Stack Engineer delivering production software focused on automation. Maintain cloud infrastructure that powers internal platform and revenue critical tooling.`,
        `Work directly with internal business stakeholders to gather feedback and plan tool enhancements. Ensure great user experience on front end tools with robust backend services.`,
        `Use a variety of technologies such as Typescript, Angular, NodeJS, PHP, Postgres, Docker, Elastic Stack, Jira, CI/CD pipelines and Linux.`,
      ],
    },
    {
      title: 'Client Integration Engineer Apprentice',
      company: 'Epsilon Data Management, LLC',
      companyImg: 'epsilon.png',
      start: 'June 2019',
      end: 'June 2020',
      description: [
        `Year long rotational program contributing directly to Client Integration, Quality Assurance and Automation & Infrastructure teams. Assisted in client launches and presented 3 software projects at the end of each rotation.`,
        `Designed and Developed a work load automation tool to streamline task assignments, a geography lookup tool to aid in geo based marketing campaigns and an interface for complex big data queries.`,
      ],
    },
    {
      title: 'Undergraduate Programming Instructor',
      company: 'Indiana University - Bloomington',
      companyImg: 'iu.png',
      start: 'August 2018',
      end: 'May 2019',
      description: [
        `Assisted professor in teaching core Java programming concepts to a class of 22 students in lecture and labs.`,
        ` Performed grading of homework and lab practicals of two teams focusing on programming standards and style. Gave teams final project planning and implementation guidance.`,
      ],
    },
  ];

  public toggleDescription(index: number): void {
    if (this.expandList.includes(index)) {
      this.expandList = this.expandList.filter((i) => i !== index);
    } else {
      this.expandList.push(index);
    }
  }
}


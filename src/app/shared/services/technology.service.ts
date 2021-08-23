import { Injectable } from '@angular/core';
import { ITech } from 'src/app/home/dev/dev.component';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {
  constructor() {}

  public getTechnologies(): { type: string; list: ITech[] }[] {
    return [
      {
        type: 'programming',
        list: this.programmingList(),
      },
      {
        type: 'data',
        list: this.dataList(),
      },
      {
        type: 'infrastructure',
        list: this.infrastructureList(),
      },
      {
        type: 'developer tools',
        list: this.developerTools(),
      },
    ];
  }

  public programmingList(): ITech[] {
    return [
      {
        technology: 'Typescript',
        skill: 'proficient',
        icon: {
          type: 'img',
          value: 'ts.svg',
        },
        info: {
          description: `This is the langueage I use the most with both work and personal projects.`,
          tags: [
            'Angular',
            'Nest',
            'Jest',
            'Microsoft Playwright',
            'RxJs',
            'NgRx',
          ],
        },
      },
      {
        technology: 'Python',
        skill: 'proficient',
        icon: {
          type: 'fa',
          value: 'fab fa-python',
          color: '#3470A0',
        },
        info: {
          description: ``,
          tags: [],
        },
      },
      {
        technology: 'PHP',
        skill: 'proficient',
        icon: {
          type: 'fa',
          value: 'fab fa-php',
          color: '#868EB8',
        },
        info: {
          description: ``,
          tags: ['Laravel'],
        },
      },
    ];
  }

  public dataList(): ITech[] {
    return [
      {
        technology: 'SQL',
        skill: 'proficient',
        icon: {
          type: 'fa',
          value: 'fas fa-database',
          color: '#868EB8',
        },
        info: {
          description: ``,
          tags: ['Postgres', 'MySQL'],
        },
      },
      {
        technology: 'Redis',
        skill: 'working knowledge',
        icon: {
          type: 'img',
          value: 'redis.svg',
        },
        info: {
          description: ``,
          tags: [],
        },
      },
      {
        technology: 'MongoDB',
        skill: 'working knowledge',
        icon: {
          type: 'fa',
          value: 'fab fa-envira',
          color: '#4CA73E',
        },
        info: {
          description: ``,
          tags: [],
        },
      },
    ];
  }

  public infrastructureList(): ITech[] {
    return [
      {
        technology: 'Docker',
        skill: 'proficient',
        icon: {
          type: 'fa',
          value: 'fab fa-docker',
          color: '#2491E6',
        },
        info: {
          description: ``,
          tags: ['Docker Swarm', 'Docker Compose'],
        },
      },
      {
        technology: 'Linux',
        skill: 'working knowledge',
        icon: {
          type: 'img',
          value: 'linux.png',
        },
        info: {
          description: ``,
          tags: [],
        },
      },
      {
        technology: 'NGINX',
        skill: 'working knowledge',
        icon: {
          type: 'img',
          value: 'nginx.png',
        },
        info: {
          description: ``,
          tags: [],
        },
      },
    ];
  }

  public developerTools(): ITech[] {
    return [
      {
        technology: 'Git',
        skill: 'proficient',
        icon: {
          type: 'img',
          value: 'git.svg',
        },
        info: {
          description: ``,
          tags: ['Docker Swarm', 'Docker Compose'],
        },
      },
      {
        technology: 'Elastic Stack',
        skill: 'proficient',
        icon: {
          type: 'img',
          value: 'elastic.svg',
        },
        info: {
          description: ``,
          tags: ['Docker Swarm', 'Docker Compose'],
        },
      },
      {
        technology: 'Jira',
        skill: 'proficient',
        icon: {
          type: 'img',
          value: 'jira.svg',
        },
        info: {
          description: ``,
          tags: ['Docker Swarm', 'Docker Compose'],
        },
      },
    ];
  }
}

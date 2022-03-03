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
      {
        type: 'methodologies',
        list: this.methodologies(),
      },
    ];
  }

  public programmingList(): ITech[] {
    return [
      {
        technology: 'TypeScript',
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
        technology: 'JavaScript',
        skill: 'proficient',
        icon: {
          type: 'img',
          value: 'js.svg',
        },
        info: {
          description: `Work with `,
          tags: ['ES6', 'NodeJS', 'JQuery', 'Express'],
        },
      },
      {
        technology: 'Python',
        skill: 'proficient',
        icon: {
          type: 'img',
          value: 'python.svg',
        },
        info: {
          description: `
          This was the primary language I learned and used in school. 
          It is my preferred language for data projects. I occasionally use this at work now.
          `,
          tags: ['NLTK'],
        },
      },
      // {
      //   technology: 'PHP',
      //   skill: 'proficient',
      //   icon: {
      //     type: 'img',
      //     value: 'php.svg',
      //   },
      //   info: {
      //     description: ``,
      //     tags: ['Laravel'],
      //   },
      // },
      // {
      //   technology: 'Java',
      //   skill: 'proficient',
      //   icon: {
      //     type: 'img',
      //     value: 'java.svg',
      //   },
      //   info: {
      //     description: ``,
      //     tags: ['Laravel'],
      //   },
      // },
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

  public methodologies(): ITech[] {
    return [
      {
        technology: 'CI/CD',
        skill: 'proficient',
        icon: {
          type: 'mat',
          value: 'change_circle',
        },
        info: {
          description: ``,
          tags: ['Bamboo', 'Bitbucket'],
        },
      },
      {
        technology: 'Agile Scrum',
        skill: 'proficient',
        icon: {
          type: 'mat',
          value: 'groups',
        },
        info: {
          description: ``,
          tags: ['', ''],
        },
      },
      // {
      //   technology: 'Jira',
      //   skill: 'proficient',
      //   icon: {
      //     type: 'img',
      //     value: 'jira.svg',
      //   },
      //   info: {
      //     description: ``,
      //     tags: ['Docker Swarm', 'Docker Compose'],
      //   },
      // },
    ];
  }
}

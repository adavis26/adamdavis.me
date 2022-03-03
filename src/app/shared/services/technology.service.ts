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
        type: 'infrastructure',
        list: this.infrastructureList(),
      },
      {
        type: 'database',
        list: this.dataList(),
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
        technology: 'TypeScript (JavaScript)',
        skill: 3,
        icon: {
          type: 'img',
          value: 'ts.svg',
        },
        info: {
          description: `Most used language for work and side projects`,
          tags: [
            'Angular',
            'NestJS',
            'NodeJS',
            'Jest',
            'Redux',
            'JQuery',
            'Express',
          ],
        },
      },
      // {
      //   technology: 'JavaScript',
      //   skill: 'proficient',
      //   icon: {
      //     type: 'img',
      //     value: 'js.svg',
      //   },
      //   info: {
      //     description: ``,
      //     tags: ['ES6', 'NodeJS', 'JQuery', 'Express'],
      //   },
      // },
      {
        technology: 'Python',
        skill: 2,
        icon: {
          type: 'img',
          value: 'python.svg',
        },
        info: {
          description: ``,
          tags: ['Django', 'NLTK'],
        },
      },
      {
        technology: 'Go',
        skill: 1,
        icon: {
          type: 'img',
          value: 'golang.svg',
        },
        info: {
          description: `
          I've been enjoying go lately for CLI and server side tasks. 
          `,
          tags: ['CLI'],
        },
      },
      {
        technology: 'PHP',
        skill: 2,
        icon: {
          type: 'img',
          value: 'php.svg',
        },
        info: {
          description: ``,
          tags: ['Laravel'],
        },
      },
      {
        technology: 'Java',
        skill: 1,
        icon: {
          type: 'img',
          value: 'java.svg',
        },
        info: {
          description: ``,
          tags: ['Spring'],
        },
      },
    ];
  }

  public dataList(): ITech[] {
    return [
      {
        technology: 'SQL',
        skill: 3,
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
        skill: 2,
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
        skill: 1,
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
        skill: 3,
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
        skill: 2,
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
        skill: 2,
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
        skill:3,
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
        skill: 3,
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
        skill: 3,
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
        skill: 3,
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
        skill: 3,
        icon: {
          type: 'mat',
          value: 'groups',
        },
        info: {
          description: ``,
          tags: ['', ''],
        },
      },
    ];
  }
}

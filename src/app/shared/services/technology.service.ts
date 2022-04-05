import { Injectable } from '@angular/core';
import { ITech } from 'src/app/home/dev/dev.component';
import * as fsort from 'fast-sort';

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
        type: 'developer',
        list: this.developerTools(),
      },
    ];
  }

  public programmingList(): ITech[] {
    return fsort.sort([
      {
        technology: 'TypeScript',
        skill: 3,
        icon: {
          type: 'img',
          value: 'ts.svg',
        },
        info: {
          description: `Most used language for work and side projects. (Of course JS too)`,
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
      {
        technology: 'JavaScript',
        skill: 3,
        icon: {
          type: 'img',
          value: 'js.svg',
        },
        info: {
          description: ``,
          tags: ['ES6', 'NodeJS', 'JQuery', 'Express'],
        },
      },
      {
        technology: 'Python',
        skill: 2,
        icon: {
          type: 'img',
          value: 'python.svg',
        },
        info: {
          description: `First lanugage I learned. Quick and easy.`,
          tags: ['Django', 'Pandas'],
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
          description: `I've been enjoying go lately for CLI and server side tasks.`,
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
          description: `Server side web. Using less and less lately.`,
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
          description: `Used in school and taught it. Haven't used much since.`,
          tags: ['JavaFX'],
        },
      },
    ]).desc(tech => tech.skill);
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
          description: `A quick key store db. Very powerful when used correctly.`,
          tags: ['Caching', 'Pub/Sub'],
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
          description: `NoSQL, new to it. Interested in using more. `,
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
          description: `Container orchestration at scale.`,
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
          description: `Hosted Linux environments.`,
          tags: ['Red Hat', 'Ubuntu', 'CentOS'],
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
      {
        technology: 'Traefik',
        skill: 1,
        icon: {
          type: 'img',
          value: 'traefik.svg',
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
        skill: 3,
        icon: {
          type: 'img',
          value: 'git.svg',
        },
        info: {
          description: `Version control across many projects.`,
          tags: ['Gitflow'],
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
        technology: 'CI/CD',
        skill: 3,
        icon: {
          type: 'mat',
          value: 'change_circle',
        },
        info: {
          description: `Continuous Integration and Deployment. Ship code faster. `,
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
          description: `Developing software in sprints with daily stands.`,
          tags: ['Kanban', 'Sprints'],
        },
      },
      {
        technology: 'UX Design',
        skill: 3,
        icon: {
          type: 'mat',
          value: 'palette',
        },
        info: {
          description: `Mocking designs prior to creation with user experience focus. `,
          tags: ['Wire Framing'],
        },
      },
    ];
  }
}

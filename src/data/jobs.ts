import { DateTime } from "luxon";

export interface IJob {
  title: string;
  company: string;
  start: DateTime;
  end: DateTime | null;
  details: string[];
}

export const jobs: IJob[] = [
  {
    title: "Full Stack Software Engineer",
    company: "Epsilon",
    start: DateTime.fromFormat("May 2022", "MMMM yyyy"),
    end: null,
    details: [
      "Develop and maintain Epsilon’s internal automation platform, enhancing efficiency and reliability.",
      "Lead technical projects from discovery to production, producing well-tested, scalable code. Manage 10+ internal products.",
      "Mentor junior engineers, train new hires, and interview candidates.",
      "Maintained on-premise Linux servers and used Docker for container orchestration. Specialized in infrastructure monitoring and alerting.",
      "Key Projects: Automated workload distribution platform, monolith API to microservices migration, OAuth integrations."
    ]
  },
  {
    title: "Associate Full Stack Software Engineer",
    company: "Epsilon",
    start: DateTime.fromFormat("June 2020", "MMMM yyyy"),
    end: DateTime.fromFormat("May 2022", "MMMM yyyy"),
    details: [
      "Assisted in automation tooling for the operations by completing code features and addressing bugs of frontend and backend services.",
      "Worked directly with internal stakeholders to gather requirements and implement automation solutions.",
      "Led internal technical training initiatives for a team of 6 engineers.",
      "Key Projects: Automated testing system for core digital creatives, Elastic infrastructure monitoring integration."
    ]
  },
  {
    title: "Apprentice Client Integration Engineer",
    company: "Epsilon",
    start: DateTime.fromFormat("June 2019", "MMMM yyyy"),
    end: DateTime.fromFormat("June 2020", "MMMM yyyy"),
    details: [
      "Year-long rotational program on three teams in Epsilon’s Operations program.",
      "Supported the technical integration, testing, and development of digital marketing campaigns for premier retail clients.",
      "Delivered 3 software projects to production during each respective 4-month rotation."
    ]
  }
];
import { LINKS } from "@/data/links";
import { style } from "@/lib/styles";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

interface IProject {
    name: string;
    description: string[];
    link?: string;
    code?: string;
    icon: string;
}

const projects: IProject[] = [
    {
        name: 'BHI Weather Report',
        icon: '🌤️',
        description: [
            'A weather report app for Bald Head Island, North Carolina to predict good weather days and give a score.',
            'Uses live and historical data from the National Weather Service.',
        ],
        link: 'https://bhi-weather-report.vercel.app/',
        code: 'https://github.com/adavis26/bhi-weather-report'
    },
    {
        name: 'Github',
        description: ['Random projects from my github here'],
        link: LINKS.github,
        icon: '💻'
    },
    {
        name: 'More To Come',
        description: ['I\'ll update here with more projects. Stay tuned!'],
        icon: '💡'
    }
];

function Project({ project }: { project: IProject }) {
    const [show, setShow] = useState(false);

    return <div className={clsx(
        "border rounded-lg shadow p-5",
        !show && "h-[100px]",
        project.name === 'More To Come' && "opacity-85"
    )}>
        <h3 className="text-lg font-bold mb-2">{project.icon} {project.name}</h3>
        <p onClick={() => setShow(!show)} className="hover:underline cursor-pointer">show {show ? 'less' : 'more'}</p>
        {show && <div className="py-3">
            <ul className="list-disc m-5 space-y-4">
                {project.description.map((desc) => (<li className='text-sm '>{desc}</li>))}
            </ul>
            {project.link && <>
                <p>Link</p>
                <p><Link className={style.linkStyle} href={project.link} target="_blank">{project.link}</Link></p>
            </>}

            {project.code && <>
                <p>Code</p>
                <p><Link className={style.linkStyle} href={project.code} target="_blank">{project.code}</Link></p>
            </>
            }
        </div>
        }
    </div>
}

export function Projects() {
    return <div>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {
                projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))
            }
        </div>
    </div>
}
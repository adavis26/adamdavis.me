"use client";

import Job from '@/components/job';
import Nav from '@/components/nav';
import { jobs } from '@/data/jobs';
import { DateTime } from 'luxon';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { style } from '../lib/styles'
import { Projects } from '@/components/projects';
import { LINKS } from '@/data/links';

const LottieFrame = dynamic(() => import('@/components/lottie'), { ssr: false })

function Greeting() {
  return <div className='flex flex-col space-y-5'>
    <h1 className='text-5xl font-bold'>Hi, I'm Adam</h1>
    <p className='text-lg'>I'm an enthusiastic full stack software engineer that is always learning </p>
  </div>
}

function School() {
  return <div className='flex flex-col flex-y-3'>
    <h1>School</h1>
    <p className='text-lg font-bold pt-3'>Indiana University</p>
    <div className='grid md:grid-cols-2 md:gap-1 sm:grid-cols-1 gap-3'>
      <div>
        <p className='text-purple-600'>B.S. Informatics</p>
        <p className='text-sm'>Luddy School of Informatics, Computing and Engineering</p>
      </div>
      <div>
        <p className='text-purple-600'>Business Minor</p>
        <p className='text-sm'>Kelley School of Business</p>
      </div>
    </div>
  </div>
}


function Work() {
  const startDate = [...jobs].sort((a, b) => a.start.toMillis() - b.start.toMillis())[0].start;
  const now = DateTime.now();

  const timeWorked = now.diff(startDate, ['years', 'months', 'weeks', 'days']).toObject();

  return (<div className='flex flex-col space-y-7'>
    <h1>Work</h1>
    <p>{timeWorked.years} years, {timeWorked.weeks} weeks and {Math.floor(timeWorked.days || 0)} days of experience and counting.</p>
    {jobs.map((job, index) => (<Job key={index} job={job} index={index} />))}
  </div>)
}

function Contact() {
  return <>
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <p className="">You can reach out to me on <Link className={style.linkStyle} href={LINKS.linkedin} target='_blank'>Linkedin</Link> or at <Link className={style.linkStyle} href={"mailto:" + LINKS.email}>{LINKS.email}</Link></p>
  </>
}

function Footer() {
  return <div>
    <footer className="py-4 text-gray-400 mt-10">
      <div className="container mx-auto px-4 text-center space-y-3">
        <p className='text-xs'>v{process.env.VERSION}</p>
        <p className="text-xs">© 2025 Adam Davis. All rights reserved.</p>
      </div>
    </footer>
  </div>
}



export default function Home() {

  return (
    <div className="h-screen">
      <main>
        <div className='md:mx-[10%] mx-10 py-8 space-y-20'>
          <section id="header">
            <Nav></Nav>
          </section>
          <div className='h-[510px]'>
            <LottieFrame />
          </div>
          <section id="greeting">
            <Greeting />
          </section>
          <section id="work">
            <Work />
          </section>

          <section id="school">
            <School />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact" >
            <h2 className="text-2xl font-bold mb-4">This Site</h2>
            <p className="">This site was built with <Link className={style.linkStyle} href="https://nextjs.org/">Next.js</Link>. The code for it <Link className={style.linkStyle} target='_blank' href="https://github.com/adavis26/adamdavis.me">
              can be found for it here</Link>. I made the animation with <a className={style.linkStyle} href='https://www.figma.com/' target='_blank'>Figma</a> and <a className={style.linkStyle} href='https://lottiefiles.com/'>Lottie</a>.
            </p>
          </section>

          <section id="contact" >
            <Contact />
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import { IJob } from '../data/jobs';
// import ShowMore from './ShowMore';
import { DateTime } from 'luxon';

function JobDate({ date }: { date: DateTime | null }) {
    let dateStr = '';
    const styles = 'text-gray-500 border-gray-400 flex align-middle items-center space-x-2';
    const circleStyles = 'h-2 w-2 rounded-full';

    if (!date) {
        return <div className={styles}>
            <div className={circleStyles + ' bg-green-500'}></div>
            <p>Now</p>
        </div>
    }

    return <div className={styles}>
        <div className={circleStyles + ' bg-gray-500'}></div>
        <p>{date.toFormat('MMMM yyyy')}</p>
    </div>
}

export default function Job({ job, index }: { job: IJob, index: number }) {
    const totalJobs = 3;
    return <>
        <JobDate date={job.end}></JobDate>
        <div className='pl-2 border-l-2'>
            <h2>{job.title}</h2>
            <div className='flex space-x-10 align-middle items-center'>
                <p className='text-lg text-purple-500'>{job.company}</p>
            </div>
        </div>


        {/* Start */}
        {index === totalJobs - 1 && <JobDate date={job.start}></JobDate>}
    </>
}
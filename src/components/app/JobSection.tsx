import JobCard from "./JobCard.tsx";
import data from '../../../db.json'
import type { JobItem } from "../../types/type.ts";

interface JobSectionProps {
    jobsLimit?: number
}

const JobSection = ({ jobsLimit = 3 }: JobSectionProps) => {
    const recentJobs = data.jobs.slice(0, jobsLimit)

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recentJobs.map((job) => (
                        <JobCard job={job as JobItem} key={job.id} />
                    ))}
                </div>
            </div>
        </section>
    )

}

export default JobSection
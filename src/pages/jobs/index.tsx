import type { JobItem } from "../../types/type"

import ContainerFluid from "../../components/ui-kit/ContainerFluid"
import JobFilters from "../../components/app/JobFilters"
import { jobs } from "../../../db.json"
import JobCard from "../../components/app/JobCard"
import { useState } from "react"

const JobsPage = () => {
    const [totalJobs, setTotalJobs] = useState<Array<JobItem>>([])

    return (
        <ContainerFluid contectClassName="py-8 h-full">
            <h1 className="text-brand--txt text-3xl font-bold">All Jobs</h1>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                {jobs.map((jobInfo) => <JobCard key={jobInfo.id} job={jobInfo as JobItem} />)}
            </section>

            <JobFilters totalJobs={totalJobs} updateJobs={(state) => setTotalJobs(state)} />
        </ContainerFluid>
    )
}

export default JobsPage
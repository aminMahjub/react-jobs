import Button from "../ui-kit/Button.tsx";
import type { JobItem } from "../../types/type.ts";

interface JobCardProps {
    job: JobItem;
}

const JobCard = ({ job }: JobCardProps) => {
    return (
        <div className="bg-background--bg rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-secondary--txt my-2">{ job.type }</div>
                    <h3 className="text-xl font-bold">{ job.title }</h3>
                </div>

                <div className="mb-5">
                    {job.description}
                </div>

                <h3 className="text-brand--txt mb-2">{job.salary} / Year</h3>

                <div className="border border-tertiary--brd mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-error--txt mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        {job.location}
                    </div>

                    <Button content="Read More" href={`/jobs/${job.id}`} />
                </div>
            </div>
        </div>
    )

}

export default JobCard
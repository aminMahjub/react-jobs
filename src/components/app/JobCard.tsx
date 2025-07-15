import type { JobItem } from "../../types/type.ts";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa"

import Button from "../ui-kit/Button.tsx";

interface JobCardProps {
    job: JobItem;
}

const JobCard = ({ job }: JobCardProps) => {
    const [showMore, setShowMore] = useState(false)

    const showMoreButtonText = showMore ? 'show less' : 'show more'

    const slicedDescription = (text: string) => {
        if (!showMore) {
            return text.slice(0, 90) + '...'
        }

        return text
    }

    return (
        <div className="bg-background--bg rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-secondary--txt my-2">{ job.type }</div>
                    <h3 className="text-xl font-bold">{ job.title }</h3>
                </div>

                <div className="mb-5">
                    { slicedDescription(job.description) }
                    <Button content={showMoreButtonText} contentClass="!px-1" variant="text" click={() => setShowMore(!showMore)} />
                </div>

                <h3 className="text-brand--txt mb-2">{job.salary} / Year</h3>

                <div className="border border-tertiary--brd mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-error--txt flex items-center gap-x-1 mb-3">
                        <FaMapMarker className="text-lg" />

                        {job.location}
                    </div>

                    <Button content="Read More" href={`/jobs/${job.id}`} />
                </div>
            </div>
        </div>
    )

}

export default JobCard
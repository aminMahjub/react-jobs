import type { JobItem, JobFilters } from "../../types/type"
import { useEffect, useState } from "react"
import Button from "../ui-kit/Button"
import { tcc } from "../../utils/general"

interface JobFiltersProps {
    totalJobs: Array<JobItem>,
    updateJobs: (state: Array<JobItem>) => void
}

const JobFilters = ({ totalJobs, updateJobs }: JobFiltersProps) => {
    const [filters, setFilters] = useState<JobFilters>({
        salary: '',
        type: 'idle'
    })

    const salariesFilter = [
        {
            label: 'Less than $70k',
            id: 'less-than-70k',
            value: '70k'
        },
        {
            label: '$70k - $90k',
            id: '70k-100k',
            value: '70k-100k'
        },
        {
            label: 'Greater than $90k',
            id: 'greater-than-90k',
            value: '90k'
        },
    ]

    useEffect(() => {
        const filteredJobs = totalJobs.filter((job) => {
            const slicedJobs = job.salary.split(' - ').join('')

            console.log('-------------', slicedJobs)
            return slicedJobs === filters.salary
        })

        console.log('slicedd', filteredJobs)
    }, [filters])

    return (
        <aside className="
            bg-background--bg p-4 rounded-xl fixed top-25 left-5
            max-w-2xs w-full h-80 shadow-md overflow-y-auto
        ">
            <div className="mb-2">
                <div className="text-lg font-medium pb-1 border-b border-b-tertiary--brd">Salary</div>

                <div className="flex flex-col gap-y-2 mt-2">
                    {salariesFilter.map((filter) => (
                        <label key={filter.id} htmlFor={filter.id} className="flex items-center gap-x-2 text-sm text-secondary--txt cursor-pointer">
                            <input type="radio" 
                                checked={filters.salary === filter.value} 
                                id={filter.id} 
                                onChange={(event) => setFilters((prevState) => ({ ...prevState, salary: event.target.value }))} 
                                name="salary" 
                                value={filter.value} 
                                className="w-4 h-4"
                            />

                            {filter.label}
                        </label>
                    ))}
                </div>

                <div className="border-t border-tertiary--brd p-2 my-2 flex items-center justify-between">
                    <div className={tcc(
                        "text-sm cursor-pointer rounded-md p-1",
                        filters.type === 'Full-Time', 'bg-brand--bg text-primary--txt',
                        'text-secondary--txt hover:bg-brand--bg hover:text-primary--txt')}
                    onClick={() => setFilters((prevState) => ({ ...prevState, type: 'Full-Time' }))}
                    >
                        Full Time
                    </div>
                    <div className={tcc("text-sm cursor-pointer rounded-md p-1",
                        filters.type === 'Part-Time',
                        'bg-brand--bg text-primary--txt',
                        'text-secondary--txt hover:bg-brand--bg hover:text-primary--txt')}
                    onClick={() => setFilters((prevState) => ({ ...prevState, type: 'Part-Time' }))}
                    >
                        Part Time
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-2">
                    <Button content="Clear" contentClass="w-full" click={() => setFilters({ salary: '', type: 'idle' })} />
                </div>
            </div>
        </aside>
    )
}

export default JobFilters
export interface JobItem {
    id: string
    title: string
    type: 'Full-Time' | 'Part-Time'
    location: string
    description: string
    salary: string
    company: {
        name: string
        description: string
        contactEmail: string
        contactPhone: string
    }
}

export interface JobFilters {
    salary: string
    type: 'Full-Time' | 'Part-Time' | 'idle'
}
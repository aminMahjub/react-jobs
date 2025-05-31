import Button from "../ui-kit/Button.tsx";

const StackCards = () => {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <div className="bg-secondary--bg p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold">For Developers</h2>
                        <p className="mt-2 mb-4">
                            Browse our React jobs and start your career today
                        </p>

                        <Button content="Browse Jobs" tag="anchor" href="/jobs" color="raised" />
                    </div>

                    <div className="bg-brand-tonal--bg p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold">For Employers</h2>
                        <p className="mt-2 mb-4">
                            List your job to find the perfect developer for the role
                        </p>

                        <Button content="Add Job" tag="anchor" href="/add" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StackCards
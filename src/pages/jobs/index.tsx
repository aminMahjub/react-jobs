import ContainerFluid from "../../components/ui-kit/ContainerFluid"

const JobsPage = () => {
    return (
        <ContainerFluid contectClassName="bg-brand-tonal--bg py-8 h-full">
            <div className="flex justify-between items-center">
                <h1 className="text-brand--txt text-3xl font-bold">All Jobs</h1>

                <div className="flex items-center gap-x-2">
                    <span className="text-raised--txt">Part Time</span>
                </div>
            </div>
        </ContainerFluid>
    )
}

export default JobsPage
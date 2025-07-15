interface ContainerFluidProps {
    children: React.ReactNode
    contectClassName?: string
}

const ContainerFluid = ({ children, contectClassName }: ContainerFluidProps) => {
    return (
        <section className={contectClassName}>
            <div className="max-w-[1000px] w-full mx-auto px-4">
                {children}
            </div>
        </section>
    )
}

export default ContainerFluid
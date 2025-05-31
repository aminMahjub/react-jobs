const Header = () => {
    const routes = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Jobs',
            href: '/jobs'
        },
        {
            title: 'Add Job',
            href: '/add'
        }
    ]

    return (
        <header className="flex justify-center items-center bg-brand--bg py-5 px-4 border-b border-b-tertiary--brd">
            <div className="flex justify-between items-center max-w-[1000px] w-full">
                <a href="/" className="flex items-center gap-x-2">
                    <img src="/logo.png" className="h-10 w-auto" alt="react jobs logo"/>

                    <h1 className="hidden md:block text-white text-2xl font-bold ml-2">
                    React Jobs
                    </h1>
                </a>

                <nav className="flex items-center gap-x-2">
                    {routes.map((route) => <a href={route.href} key={route.title} className="rounded-md px-3 py-2 text-primary--txt hover:bg-raised--bg transition-all">{route.title}</a>)}
                </nav>
            </div>
        </header>
    )
}

export default Header
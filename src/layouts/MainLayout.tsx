import { Outlet } from "react-router-dom"
import Header from "../components/app/layout/Header"

const MainLayout = () => {
    return (
        <>
            <Header />

            <main className="w-full h-screen bg-brand-tonal--bg">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
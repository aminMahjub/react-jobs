import { Outlet } from "react-router-dom"
import Header from "../components/app/layout/Header"

const MainLayout = () => {
    return (
        <>
            <Header />

            <main className="w-full h-full bg-brackground--bg">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
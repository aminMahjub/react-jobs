import { Outlet } from "react-router-dom"
import Header from "../components/app/layout/Header"

const MainLayout = () => {
    return (
        <>
            <Header />

            <main className="w-full h-screen bg-brackground--bg">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
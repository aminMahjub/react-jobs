import { createBrowserRouter,
    RouterProvider,
    createRoutesFromElements, 
    Route
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/home"
import JobsPage from "./pages/jobs"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={ <HomePage /> } />
            <Route path="/jobs" element={ <JobsPage /> } />
            <Route path="*" element={ <NotFound /> } />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App

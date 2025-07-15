import { createBrowserRouter,
    RouterProvider,
    createRoutesFromElements, 
    Route
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/home"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={ <HomePage /> } />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App

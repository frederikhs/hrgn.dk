import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/About.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import SocialPage from "./pages/SocialPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Root from "./Root.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <About/>,
            },
            {
                path: "/projects",
                element: <ProjectsPage/>,
            },
            {
                path: "/social",
                element: <SocialPage/>,
            },
            {
                path: '*',
                element: <NotFoundPage/>,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)

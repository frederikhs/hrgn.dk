import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Root from "./Root";
import ProjectsPage from "./pages/ProjectsPage";
import SocialPage from "./pages/SocialPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

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
        ]
    },
    {
        path: '*',
        element: <Navigate replace to="/"/>
    }
]);

if (localStorage.darkMode === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

root.render(
    // <React.StrictMode>
    <RouterProvider router={router}/>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

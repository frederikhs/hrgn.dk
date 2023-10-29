import React from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation";

export default function Root() {
    return (
        <div className={"space-y-4"}>
            <Navigation/>
            <div className={"px-4"}>
                <Outlet/>
            </div>
        </div>
    );
}

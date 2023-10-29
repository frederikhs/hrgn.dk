import React from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation";

export default function Root() {
    return (
        <div className={"flex flex-col h-screen"}>
            <div className={"space-y-4 flex-grow"}>
                <Navigation/>
                <div className={"px-4"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router-dom";

function Root(props) {
    return (
        <>
        <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Root;
import React from 'react';
import {Outlet} from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsRoot(props) {
    return (
        <>
            <EventsNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default EventsRoot;
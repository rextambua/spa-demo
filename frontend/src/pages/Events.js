
import EventsList from '../components/EventsList';
import {useLoaderData, json, defer, Await} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {
    const {events} =useLoaderData();
    // if(data.isError){
    //     return <p>{data.message}</p>
    // }
    return (
            <Suspense fallback={<p style={ {textAlign: 'center'}}> Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents)=> <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
    );
}

export default EventsPage;
async function loadEvents (){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json(
            {message : 'could not fetch events'},
            {status:500});
    } else {
        const  resData = await response.json();
        return resData.events;
    }
}

export const eventsLoader = async () => {
   return  defer({
        events: loadEvents()
    })
    }


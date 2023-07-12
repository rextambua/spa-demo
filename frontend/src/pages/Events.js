
import EventsList from '../components/EventsList';
import {useLoaderData, json} from "react-router-dom";

function EventsPage() {
    const data =useLoaderData();
    if(data.isError){
        return <p>{data.message}</p>
    }
    const events = data.events
    return (
             <EventsList events={events} />
    );
}

export default EventsPage;

export const eventsLoader = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
       throw json(
           {message : 'could not fetch events'},
           {status:505});
    } else {

        return response;
    }}
import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEvents() {
    const data = useRouteLoaderData('event-detail');

    return <EventForm event={data.event} method='patch' />;
}

export default EditEvents;
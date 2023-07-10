import React from 'react';
import {useParams} from "react-router-dom";

function EventDetail(props) {
    const params = useParams()

    return (
        <>
            <h1>EventDetail</h1>
            <p>EventID: {params.eventId}</p>
        </>
    );
}

export default EventDetail;
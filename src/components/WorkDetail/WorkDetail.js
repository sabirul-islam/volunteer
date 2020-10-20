import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WorkDetail = () => {

    const {workdetailkey} = useParams();
    // const data = information.find(data=> data.id === bookingId);
    const [volunteer, setVolunteer] = useState({})
    console.log(volunteer);

    useEffect(()=>{
        fetch('http://localhost:5000/volunteers/' + workdetailkey)
        .then(res => res.json())
        .then(data => setVolunteer(data))
    }, [workdetailkey])

    return (
        <div>
            <h1>coming soon</h1>
        </div>
    );
};

export default WorkDetail;
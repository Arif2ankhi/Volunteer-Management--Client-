import React, { useEffect, useState } from 'react';
import VolunteerCard from './VolunteerCard';

const RequiredVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/volunteers')
        .then(res => res.json())
        .then(data => {
            setVolunteers(data);
    })

    }, []) 

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    volunteers.map(volunteer =><VolunteerCard key={volunteer._id} volunteer ={volunteer}></VolunteerCard>)
                       
                }
            </div>
        </div>
    );
};

export default RequiredVolunteers;
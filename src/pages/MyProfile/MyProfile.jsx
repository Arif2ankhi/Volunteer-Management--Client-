import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className='font extrabold text-orange-600 text-7xl gap-10 bg-emerald-300 my-64'>
             <Marquee pauseOnHover={true} speed={100} className='space-x-10'> 
                <Link to="/myVolunteerNeed">
                My Volunteer Need 
                </Link>
                <Link to="/myVolunteerRequest">
                My Volunteer Request 
                </Link>
                

            </Marquee>
        </div>
    );
};

export default MyProfile;
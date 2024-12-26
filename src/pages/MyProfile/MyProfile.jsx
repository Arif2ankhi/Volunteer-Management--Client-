import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className=' w-full font extrabold text-orange-600 text-7xl gap-10 bg-emerald-300 mr-24 py-40 space-x-20'>
             <Marquee pauseOnHover={true} speed={100} className=''> 
                <Link to="/myVolunteerNeed">
                 <span className='mr-36'>Volunteer Need</span>
                 
                </Link>
                <Link to="/myVolunteerNeed">
                <span className='text-purple-700 ml-20'> Click me for more details  </span>
               

                </Link>
                

            </Marquee>
        </div>
    );
};

export default MyProfile;
// import  { useEffect, useState } from 'react';
// import  {  useState } from 'react';

import MyVolunteerNeed from '../MyVolunteerNeed/MyVolunteerNeed';
import MyVolunteerRequest from '../MyVolunteerRequest/MyVolunteerRequest';




const ManageMyPost = () => {
  

    return (
        <div>
            <h1 className="text-3xl text-orange-700  text-center font-bold mb-4">Manage  Posts</h1>
            
            <section>
                <h2 className="text-2xl text-blue-700  mb-2 text-center font-bold"> </h2>
                <MyVolunteerNeed></MyVolunteerNeed>
                
                
            </section>
            
            {/* <section className="mt-8">
                <h2 className="text-2xl text-orange-700  mb-2 text-center font-bold">My Volunteer Request </h2>
               
                <MyVolunteerRequest></MyVolunteerRequest>

                
            </section>  */}
        </div>
    );
};

export default ManageMyPost;


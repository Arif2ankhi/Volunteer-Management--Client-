// import  { useEffect, useState } from 'react';
import  {  useState } from 'react';
import MyVolunteerNeed from '../MyVolunteerNeed/MyVolunteerNeed';
import MyVolunteerRequest from '../MyVolunteerRequest/MyVolunteerRequest';
import useAuth from '../../hooks/useAuth';


const ManageMyPost = () => {
    const [volunteerNeeds, setVolunteerNeeds] = useState([]);
    const [volunteerRequests, setVolunteerRequests] = useState([]);
    const user = JSON.parse(localStorage.getItem("user")); // Assuming user data is stored in localStorage

    // useEffect(() => {
    //     // Fetch My Volunteer Needs
    //     fetch(`http://localhost:5000/volunteerNeeds?userId=${user.id}`)
    //         .then(res => res.json())
    //         .then(data => setVolunteerNeeds(data));
        
    //     // Fetch My Volunteer Requests
    //     fetch(`http://localhost:5000/volunteerRequests?userId=${user.id}`)
    //         .then(res => res.json())
    //         .then(data => setVolunteerRequests(data));
    // }, [user.id]);

    return (
        <div>
            <h1 className="text-3xl text-green-700  text-center font-bold mb-4">Manage My Posts</h1>
            
            <section>
                <h2 className="text-2xl text-blue-700  mb-2 text-center font-bold">My Volunteer Need </h2>
                <MyVolunteerNeed></MyVolunteerNeed>
                {/* <MyVolunteerNeed posts={volunteerNeeds} /> */}
            </section>
            
            <section className="mt-8">
                <h2 className="text-2xl text-orange-700  mb-2 text-center font-bold">My Volunteer Request </h2>
               
                <MyVolunteerRequest></MyVolunteerRequest>

                
            </section>
        </div>
    );
};

export default ManageMyPost;

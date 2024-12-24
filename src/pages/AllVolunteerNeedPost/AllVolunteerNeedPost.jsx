import React from 'react'

// const AllVolunteerNeedPost = ()=>{
//     return (
//         <div>
//             <h2> All volunteer need </h2>
//         </div>
//     )
// }

// export default AllVolunteerNeedPost

import  { useEffect, useState } from "react";
import VolunteerCard from "../Home/VolunteerCard";

const AllVolunteerNeedPost = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/volunteers")
      .then((res) => res.json())
      .then((data) => {
        const sortedVolunteers = data.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        setVolunteers(sortedVolunteers);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Volunteer Needs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {volunteers.map((volunteer) => (
          <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedPost;


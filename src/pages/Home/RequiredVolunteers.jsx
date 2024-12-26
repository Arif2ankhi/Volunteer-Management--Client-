

import  { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { useNavigate } from "react-router-dom";

const RequiredVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://volunteer-management-server-ten.vercel.app/volunteers')
      .then((res) => res.json())
      .then((data) => {
        const sortedVolunteers = data.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        setVolunteers(sortedVolunteers.slice(0, 6)); // Limit to 6 items
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {volunteers.map((volunteer) => (
          <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/volunteerNeedPost")}
          className="btn w-full bg-cyan-700 btn-secondary
          "
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default RequiredVolunteers;

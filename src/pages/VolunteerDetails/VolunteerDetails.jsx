import React from "react";
import { useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
  const { volunteer , thumbnail, postTitle, description, volunteersNeeded, category} = useLoaderData();

  console.log(volunteer);

  return (
    
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={thumbnail}
          alt="Shoes"
          className="rounded-xl animate__animated animate__bounce animate__delay-2s"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-extrabold justify-center text-center  text-green-800">{postTitle}</h2>
        <p className="text-xl font-extrabold justify-center text-center  text-orange-400">{description}</p>
        <p className="text-xl font-extrabold justify-center text-center  text-purple-800">Number of Volunteers: {volunteersNeeded}</p>
        <p className="text-xl font-extrabold justify-center text-center  text-orange-800">{category}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Be a Volunteer</button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;

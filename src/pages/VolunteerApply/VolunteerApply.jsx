import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const VolunteerApply = () => {


  const {
    _id,
    thumbnail,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = useLoaderData();

  const [suggestion, setSuggestion] = useState('');

  // Mock logged-in user data
  const loggedInUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const handleSubmit = () => {
    const requestData = {
      volunteerPostId: _id,
      volunteerName: loggedInUser.name,
      volunteerEmail: loggedInUser.email,
      suggestion,
      status: 'requested',
      thumbnail,
      postTitle,
      description,
      category,
      location,
      deadline,
      organizerName,
      organizerEmail,
    };


    fetch('https://volunteer-management-server-ten.vercel.app/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
  

    })
    .then(res=> res.json())
    .then(data =>{
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " Be a Volunteer request added successfully",
                showConfirmButton: false,
                timer: 1500
              });

        }
    })

  };

  return (
    <div className="card bg-red-300 shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Be a Volunteer</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Read-only fields */}
        <div>
          {/* <label>Thumbnail:</label> */}
          <img src={thumbnail} alt={postTitle} className="w-full rounded-lg" />
        </div>
        <div>
          <label>Post Title:</label>
          <input type="text" value={postTitle} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>No. of Volunteers Needed:</label>
          <input type="number" value={volunteersNeeded} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Deadline:</label>
          <input type="text" value={deadline} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Organizer Name:</label>
          <input type="text" value={organizerName} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Organizer Email:</label>
          <input type="text" value={organizerEmail} readOnly className="input input-bordered w-full" />
        </div>

        {/* Editable fields */}
        <div>
          <label>Volunteer Name:</label>
          <input type="text" value={loggedInUser.name} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Volunteer Email:</label>
          <input type="text" value={loggedInUser.email} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Suggestion:</label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
        </div>
      </div>

      <button className="btn bg-emerald-600 btn-primary mt-4" onClick={handleSubmit}>
        Request
      </button>

    
    </div>
  );
};

export default VolunteerApply;

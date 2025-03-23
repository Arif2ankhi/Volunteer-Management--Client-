import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
  const {  _id, thumbnail, postTitle, description, volunteersNeeded, category} = useLoaderData();

//   console.log(volunteer);

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

            <Link to={`/volunteerApply/${_id}`}> 

            <button className="btn btn-primary">Be a Volunteer</button>
            
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;



// import { Link, useLoaderData } from "react-router-dom";

// const VolunteerDetails = () => {
//   const {
//     _id,
//     thumbnail,
//     postTitle,
//     description,
//     volunteersNeeded,
//     category,
//     location,
//     deadline,
//     organizerName,
//     organizerEmail,
//   } = useLoaderData();

//   const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
//   const [suggestion, setSuggestion] = useState(""); // State for suggestion input

//   // Logged-in user details (mocked for now, replace with actual user data)
//   const loggedInUser = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//   };

//   const handleRequest = () => {
//     const requestData = {
//       volunteerPostId: _id,
//       volunteerName: loggedInUser.name,
//       volunteerEmail: loggedInUser.email,
//       suggestion,
//       status: "requested",
//       thumbnail,
//       postTitle,
//       description,
//       category,
//       location,
//       deadline,
//       organizerName,
//       organizerEmail,
//     };

//     // Submit the data to the server
//     fetch("https://volunteer-management-server-ten.vercel.app/requests", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           alert("Request submitted successfully!");
//           setModalOpen(false); // Close the modal
//           // Decrease volunteersNeeded (Optional: Add a re-fetch or state update for volunteersNeeded)
//         }
//       });
//   };

//   return (
//     <div className="card bg-base-100 shadow-xl">
//       <figure className="px-10 pt-10">
//         <img
//           src={thumbnail}
//           alt="Shoes"
//           className="rounded-xl animate__animated animate__bounce animate__delay-2s"
//         />
//       </figure>
//       <div className="card-body items-center text-center">
//         <h2 className="card-title text-2xl font-extrabold text-green-800">{postTitle}</h2>
//         <p className="text-xl font-extrabold text-orange-400">{description}</p>
//         <p className="text-xl font-extrabold text-purple-800">
//           Number of Volunteers: {volunteersNeeded}
//         </p>
//         <p className="text-xl font-extrabold text-orange-800">{category}</p>
//         <div className="card-actions">
//           <button
//             className="btn btn-primary"
//             onClick={() => setModalOpen(true)} // Open modal on click
//           >
//             Be a Volunteer
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal modal-open">
//           <div className="modal-box relative">
//             <button
//               className="btn btn-sm btn-circle absolute right-2 top-2"
//               onClick={() => setModalOpen(false)} // Close modal on click
//             >
//               ✕
//             </button>
//             <h3 className="text-lg font-bold mb-4">Volunteer Request</h3>
//             <form>
//               {/* Read-Only Fields */}
//               <div className="form-control mb-2">
//                 <label className="label">Thumbnail</label>
//                 <input type="text" className="input input-bordered" value={thumbnail} readOnly />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Post Title</label>
//                 <input type="text" className="input input-bordered" value={postTitle} readOnly />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Description</label>
//                 <input type="text" className="input input-bordered" value={description} readOnly />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Category</label>
//                 <input type="text" className="input input-bordered" value={category} readOnly />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Location</label>
//                 <input type="text" className="input input-bordered" value={location} readOnly />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">No. of Volunteers Needed</label>
//                 <input
//                   type="number"
//                   className="input input-bordered"
//                   value={volunteersNeeded}
//                   readOnly
//                 />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Deadline</label>
//                 <input type="text" className="input input-bordered" value={deadline} readOnly />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Organizer Name</label>
//                 <input type="text" className="input input-bordered" value={organizerName} readOnly />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Organizer Email</label>
//                 <input type="text" className="input input-bordered" value={organizerEmail} readOnly />
//               </div>

//               {/* Editable Fields */}
//               <div className="form-control mb-2">
//                 <label className="label">Volunteer Name</label>
//                 <input
//                   type="text"
//                   className="input input-bordered"
//                   value={loggedInUser.name}
//                   readOnly
//                 />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Volunteer Email</label>
//                 <input
//                   type="text"
//                   className="input input-bordered"
//                   value={loggedInUser.email}
//                   readOnly
//                 />
//               </div>
//               <div className="form-control mb-2">
//                 <label className="label">Suggestion</label>
//                 <textarea
//                   className="textarea textarea-bordered"
//                   placeholder="Add your suggestion"
//                   value={suggestion}
//                   onChange={(e) => setSuggestion(e.target.value)}
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="form-control mt-4">
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={handleRequest}
//                 >
//                   Request
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VolunteerDetails;


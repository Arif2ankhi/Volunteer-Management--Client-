

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MyVolunteerRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth()

//   const user = JSON.parse(localStorage.getItem("user")); // Assuming user data is stored in localStorage

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(`http://localhost:5000/requests?email=${user.email}`, {
          credentials: "include", // Include cookies for authentication
        });

        if (response.status === 401) {
          Swal.fire("Unauthorized", "You need to log in to access this page.", "error");
          setRequests([]);
          return;
        }

        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error("Failed to fetch requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user.email]);

  const handleCancelRequest = async (id) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this volunteer request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/requests/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          Swal.fire("Cancelled", "Your request has been canceled.", "success");
          setRequests(requests.filter((request) => request._id !== id));
        } else {
          Swal.fire("Error", "Failed to cancel the request.", "error");
        }
      } catch (error) {
        console.error("Failed to delete request:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (requests.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl text-gray-600">You have no volunteer requests.</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Volunteer Requests</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Post Title</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Deadline</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{request.postTitle}</td>
              <td className="border border-gray-300 px-4 py-2">{request.category}</td>
              <td className="border border-gray-300 px-4 py-2">{request.location}</td>
              <td className="border border-gray-300 px-4 py-2">{request.deadline}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => handleCancelRequest(request._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyVolunteerRequest;





// import React from 'react';
// import  { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const MyVolunteerRequest = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Mock logged-in user data
//   const loggedInUser = {
//     email: 'john.doe@example.com',
//   };

//   useEffect(() => {
//     // Fetch requests data for logged-in user
//     fetch(`http://localhost:5000/requests?email=${loggedInUser.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setRequests(data);
//         setLoading(false);
//       });
//   }, []);

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You are about to cancel this request.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, cancel it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/requests/${id}`, {
//           method: 'DELETE',
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               Swal.fire('Canceled!', 'Your request has been canceled.', 'success');
//               setRequests(requests.filter((req) => req._id !== id));
//             }
//           });
//       }
//     });
//   };

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   return (
//     <div className="p-6">
//       {/* <h2 className="text-2xl font-bold mb-4">My Volunteer Requests</h2> */}
//       {requests.length === 0 ? (
//         <p>You have not made any volunteer requests yet. Browse opportunities and apply to volunteer!</p>
//       ) : (
//         <table className="table-auto w-full bg-white shadow-md rounded">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Post Title</th>
//               <th className="px-4 py-2">Category</th>
//               <th className="px-4 py-2">Location</th>
//               <th className="px-4 py-2">Deadline</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request) => (
//               <tr key={request._id}>
//                 <td className="border px-4 py-2">{request.postTitle}</td>
//                 <td className="border px-4 py-2">{request.category}</td>
//                 <td className="border px-4 py-2">{request.location}</td>
//                 <td className="border px-4 py-2">{request.deadline}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     className="btn bg-red-600 text-white"
//                     onClick={() => handleCancel(request._id)}
//                   >
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MyVolunteerRequest;
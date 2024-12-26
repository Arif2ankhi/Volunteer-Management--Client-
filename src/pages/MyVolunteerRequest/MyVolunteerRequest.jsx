

import React from 'react';
import  { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MyVolunteerRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock logged-in user data
  const loggedInUser = {
    email: 'john.doe@example.com',
  };

  useEffect(() => {
    // Fetch requests data for logged-in user
    fetch(`https://volunteer-management-server-ten.vercel.app/requests?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      });
  }, []);

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to cancel this request.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://volunteer-management-server-ten.vercel.app/requests/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Canceled!', 'Your request has been canceled.', 'success');
              setRequests(requests.filter((req) => req._id !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-6">
      {/* <h2 className="text-2xl font-bold mb-4">My Volunteer Requests</h2> */}
      {requests.length === 0 ? (
        <p>You have not made any volunteer requests yet. Browse opportunities and apply to volunteer!</p>
      ) : (
        <table className="table-auto w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="px-4 py-2">Post Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Deadline</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id}>
                <td className="border px-4 py-2">{request.postTitle}</td>
                <td className="border px-4 py-2">{request.category}</td>
                <td className="border px-4 py-2">{request.location}</td>
                <td className="border px-4 py-2">{request.deadline}</td>
                <td className="border px-4 py-2">
                  <button
                    className="btn bg-red-600 text-white"
                    onClick={() => handleCancel(request._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyVolunteerRequest;
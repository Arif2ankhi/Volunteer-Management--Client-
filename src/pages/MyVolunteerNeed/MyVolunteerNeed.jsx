import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyVolunteerNeed = () => {
  const [volunteers, setVolunteers] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`https://volunteer-management-server-ten.vercel.app/volunteers?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setVolunteers(data));

    // axios.get(`https://volunteer-management-server-ten.vercel.app/volunteers?email=${user.email}`, 
    
    // {withCredentials: true})
    // .then((res) => console.log(setVolunteers(res.data)))

    axiosSecure.get(`/volunteers?email=${user.email}`)
    .then(res=> setVolunteers(res.data))

  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://volunteer-management-server-ten.vercel.app/volunteers/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
              setVolunteers(volunteers.filter((vol) => vol._id !== id));
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl text-green-700 font-extrabold text-center">
         Volunteers Posts : {volunteers.length}
      </h2>
      {volunteers.length === 0 ? (
        <p className="text-center text-red-500 mt-4">No Volunteer Posts Found!</p>
      ) : (
        <div className="overflow-x-auto bg-red-200">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-xl font-bold text-purple-600">Title</th>
                <th className="text-xl font-bold text-purple-600">Description</th>
                <th className="text-xl font-bold text-purple-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer, index) => (
                <tr key={volunteer._id}>
                  <th>{index + 1}</th>
                  <td>{volunteer.postTitle}</td>
                  <td>{volunteer.description}</td>
                  <td>
                    <button
                      className="btn bg-orange-900 text-white mr-2"
                      onClick={() => handleUpdate(volunteer._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn bg-red-600 text-white"
                      onClick={() => handleDelete(volunteer._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyVolunteerNeed;





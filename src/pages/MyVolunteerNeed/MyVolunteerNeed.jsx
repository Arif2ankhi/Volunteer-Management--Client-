import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyVolunteerNeed = ({ posts }) => {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/volunteerNeeds/${id}`, { method: 'DELETE' })
                    .then(() => {
                        Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
                        window.location.reload(); // Refresh after deletion
                    });
            }
        });
    };

    // if (posts.length === 0) {
    //     return <p>No Volunteer Need Posts found.</p>;
    // }

    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border p-2">Thumbnail</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* {posts.map((post) => (
                    <tr key={post.id}>
                        <td className="border p-2"><img src={post.thumbnail} alt={post.title} width="50" /></td>
                        <td className="border p-2">{post.title}</td>
                        <td className="border p-2">
                            <button
                                className="bg-blue-500 text-white px-3 py-1 mr-2"
                                onClick={() => navigate(`/update/${post.id}`)}>
                                Update
                            </button>
                            <button
                                className="bg-red-500 text-white px-3 py-1"
                                onClick={() => handleDelete(post.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    );
};

export default MyVolunteerNeed;

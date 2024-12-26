import {  useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Update = () => {
  const volunteer = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: volunteer,
  });

  const onSubMIT = (data) => {
    fetch(`http://localhost:5000/volunteers/${volunteer._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire("Updated!", "Your post has been updated.", "success");
          navigate("/myVolunteerNeed");
        }
      });
  };

  return (
    <div className="w-full mx-auto mt-10 mb-4 p-4 bg-cyan-200">
      <h2 className="text-2xl text-green-700 font-bold text-center mb-4">
        Update Volunteer Need
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input input-bordered w-full"
          placeholder="Thumbnail URL"
          {...register("thumbnail")}
        />
        <input
          className="input input-bordered w-full"
          placeholder="Post Title"
          {...register("postTitle")}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          {...register("description")}
        />
        <select
          className="select select-bordered w-full"
          {...register("category")}
        >
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="social service">Social Service</option>
          <option value="animal welfare">Animal Welfare</option>
        </select>
        <input
          className="input input-bordered w-full"
          placeholder="Location"
          {...register("location")}
        />
        <input
          className="input input-bordered w-full"
          placeholder="Volunteers Needed"
          type="number"
          {...register("volunteersNeeded")}
        />
       
        <input
          className="input input-bordered w-full"
          placeholder="Organizer Name"
          value={user.name}
        //   readOnly
        />
        <input
          className="input input-bordered w-full"
          placeholder="Organizer Email"
          value={user.email}
          readOnly
        />
        <button className="btn bg-green-700 w-full text-white" type="submit">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default Update;

// import  { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useParams, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Update = () => {
//     const { id } = useParams(); // Get the volunteer post ID from the route params
//     const navigate = useNavigate(); // For redirecting after update
//     // const { register, handleSubmit, reset, setValue } = useForm();
//     const { register, handleSubmit,  setValue } = useForm();
//     const [loading, setLoading] = useState(true);

//     // Fetch the existing post data
//     useEffect(() => {
//         const fetchPostData = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/volunteers/${id}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     // Populate the form with existing data
//                     Object.keys(data).forEach((key) => setValue(key, data[key]));
//                     setLoading(false);
//                 } else {
//                     toast.error('Failed to load post data.');
//                 }
//             } catch (error) {
//                 toast.error('An error occurred while fetching post data.', error);
//             }
//         };

//         fetchPostData();
//     }, [id, setValue]);

//     const onSubmit = async (data) => {
//         try {
//             const response = await fetch(`http://localhost:5000/volunteers/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 toast.success('Post updated successfully!');
//                 navigate('/myVolunteerNeed'); // Redirect to "My Volunteer Need" page
//             } else {
//                 toast.error('Failed to update post. Please try again.');
//             }
//         } catch (error) {
//             toast.error('An error occurred. Please try again.', error);
//         }
//     };

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="max-w-4xl mx-auto  p-4 bg-cyan-200">
//             <h1 className="text-3xl font-bold mb-4 text-center text-purple-600">Update Volunteer</h1>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium">Thumbnail URL</label>
//                     <input
//                         {...register('thumbnail')}
//                         type="text"
//                         className="mt-1 block w-full border rounded-md p-2"
//                         placeholder="Enter thumbnail URL"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Post Title</label>
//                     <input
//                         {...register('postTitle')}
//                         type="text"
//                         className="mt-1 block w-full border rounded-md p-2"
//                         placeholder="Enter post title"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Description</label>
//                     <textarea
//                         {...register('description')}
//                         className="mt-1 block w-full border rounded-md p-2"
//                         placeholder="Enter description"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Category</label>
//                     <select {...register('category')} className="mt-1 block w-full border rounded-md p-2">
//                         <option value="healthcare">Healthcare</option>
//                         <option value="education">Education</option>
//                         <option value="social-service">Social Service</option>
//                         <option value="animal-welfare">Animal Welfare</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Location</label>
//                     <input
//                         {...register('location')}
//                         type="text"
//                         className="mt-1 block w-full border rounded-md p-2"
//                         placeholder="Enter location"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">No. of Volunteers Needed</label>
//                     <input
//                         {...register('volunteersNeeded')}
//                         type="number"
//                         className="mt-1 block w-full border rounded-md p-2"
//                         placeholder="Enter number of volunteers needed"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Deadline</label>
//                     <input
//                         {...register('deadline')}
//                         type="date"
//                         className="mt-1 block w-full border rounded-md p-2"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Organizer Name</label>
//                     <input
//                         {...register('organizerName')}
//                         type="text"
//                         className="mt-1 block w-full border rounded-md p-2"
//                         readOnly
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Organizer Email</label>
//                     <input
//                         {...register('organizerEmail')}
//                         type="email"
//                         className="mt-1 block w-full border rounded-md p-2"
//                         readOnly
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
//                 >
//                     Update Post
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Update;

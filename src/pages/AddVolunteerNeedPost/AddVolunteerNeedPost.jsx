import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './AddVolunteerNeedPost.css'; // Custom CSS file for consistent styling

const AddVolunteerNeedPost = () => {
  const [postDetails, setPostDetails] = useState({
    thumbnail: '',
    postTitle: '',
    description: '',
    category: 'healthcare', // Default category
    location: '',
    volunteersNeeded: '',
    deadline: new Date(),
    organizerName: 'John Doe', // Mocked logged-in user data
    organizerEmail: 'john.doe@example.com', // Mocked logged-in user email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  const handleDateChange = (date) => {
    setPostDetails({ ...postDetails, deadline: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDetails),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Volunteer need post added successfully!');
        setPostDetails({
          thumbnail: '',
          postTitle: '',
          description: '',
          category: 'healthcare',
          location: '',
          volunteersNeeded: '',
          deadline: new Date(),
          organizerName: 'John Doe',
          organizerEmail: 'john.doe@example.com',
        });
      } else {
        toast.error(result.message || 'Failed to add the post. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred while adding the post. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-purple-600 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Volunteer Need Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Thumbnail */}
        <div>
          <label className="block mb-2">Thumbnail:</label>
          <input
            type="text"
            name="thumbnail"
            value={postDetails.thumbnail}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Post Title */}
        <div>
          <label className="block mb-2">Post Title:</label>
          <input
            type="text"
            name="postTitle"
            value={postDetails.postTitle}
            onChange={handleChange}
            placeholder="Enter post title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2">Description:</label>
          <textarea
            name="description"
            value={postDetails.description}
            onChange={handleChange}
            placeholder="Enter post description"
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2">Category:</label>
          <select
            name="category"
            value={postDetails.category}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social service">Social Service</option>
            <option value="animal welfare">Animal Welfare</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2">Location:</label>
          <input
            type="text"
            name="location"
            value={postDetails.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* No. of Volunteers Needed */}
        <div>
          <label className="block mb-2">No. of Volunteers Needed:</label>
          <input
            type="number"
            name="volunteersNeeded"
            value={postDetails.volunteersNeeded}
            onChange={handleChange}
            placeholder="Enter the number of volunteers needed"
            className="input input-bordered w-full"
            min="1"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-2">Deadline:</label>
          <DatePicker
            selected={postDetails.deadline}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            className="input input-bordered w-full datepicker-input"
            placeholderText="Select a deadline"
          />
        </div>

        {/* Organizer Name and Email */}
        <div>
          <label className="block mb-2">Organizer Name:</label>
          <input
            type="text"
            value={postDetails.organizerName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Organizer Email:</label>
          <input
            type="email"
            value={postDetails.organizerEmail}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteerNeedPost;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        location: '',
        volunteersNeeded: 0,
        deadline: new Date(),
        thumbnail: '',
    });

    useEffect(() => {
        // Fetch data for the specific post
        fetch(`http://localhost:5000/volunteerNeeds/${id}`)
            .then(res => res.json())
            .then(data => setFormData({ ...data, deadline: new Date(data.deadline) }));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/volunteerNeeds/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(() => {
                Swal.fire('Success', 'Post updated successfully!', 'success');
                navigate('/manageMyPost');
            });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Update Volunteer Need Post</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
                <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
                <input type="number" name="volunteersNeeded" value={formData.volunteersNeeded} onChange={handleChange} placeholder="Volunteers Needed" required />
                <DatePicker selected={formData.deadline} onChange={(date) => setFormData({ ...formData, deadline: date })} />
                <input type="file" name="thumbnail" onChange={(e) => setFormData({ ...formData, thumbnail: URL.createObjectURL(e.target.files[0]) })} />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-4">Update Post</button>
            </form>
        </div>
    );
};

export default Update;

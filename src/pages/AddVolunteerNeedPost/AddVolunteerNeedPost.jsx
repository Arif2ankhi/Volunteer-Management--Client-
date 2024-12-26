import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddVolunteerNeedPost = () => {

    const {user} = useAuth();
    // console.log(user);


const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const newVolunteer = Object.fromEntries(formData.entries());
    console.log(newVolunteer);


    fetch('http://localhost:5000/volunteers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVolunteer)
     })   
    .then(res => res.json())
    .then(data => {
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
}

  return (
    <div>
      <div>
        <h2 className="text-3xl font-extrabold text-green-900 text-center px-4">Volunteer Need Post</h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Thumbnail */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Thumbnail</span>
            </label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Thumbnail"
              className="input input-bordered"
              required
            />
          </div>
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Post Title</span>
            </label>
            <input
              type="text"
              name="postTitle"
              placeholder="postTitle"
              className="input input-bordered"
              required
            />
          </div>
          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              name="description"
              required
            ></textarea>
          </div>
          
          
          
          
          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue="Category"
              className="select select-ghost w-full max-w-xs"
            >
              {/* <option disabled>Category</option> */}
              <option>Healthcare</option>
              <option>Education</option>
              <option>Social Service</option>
              <option>Animal Welfare</option>
            </select>
          </div>
          
          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>

          {/* No of Volunteer  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">No. of Volunteer needed</span>
            </label>
            <input
              type="text"
              name="number of volunteer"
              placeholder="No. of Volunteer needed"
              className="input input-bordered"
              required
            />
          </div>

          {/*  Deadline */}
          <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name='deadline' placeholder="Deadline" className="input input-bordered" required />
                </div>
          
          
          {/* organizer Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Organizer Name</span>
            </label>
            <input
              type="text"
              name="organizerName"
              placeholder="organizerName"
            //   readOnly
              className="input input-bordered"
              required
            />
          </div>
          
         

          {/* Organizer Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Organizer Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              name="organizerEmail"
              placeholder="organizerEmail"
            //   readOnly
              className="input input-bordered"
              required
            />
          </div>
          {/* submit button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-secondary w-full mt-4">
                Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;

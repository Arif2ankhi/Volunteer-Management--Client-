
import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const VolunteerCard = ({volunteer}) => {
  // eslint-disable-next-line react/prop-types
  const { _id, thumbnail, postTitle, category, deadline } = volunteer;
  return (
       

    <div className="card card-compact bg-orange-100  shadow-xl">
      <figure>
        <img className='w-96 h-64 rounded-2xl p-2'
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-extrabold justify-center text-center  text-green-800">{postTitle}</h2>
        <p className="text-xl font-extrabold justify-center text-center  text-orange-800">{category}</p>
        <p className="text-xl font-extrabold justify-center text-center  text-purple-800">Deadline: {deadline}</p>
        
        <div className="card-actions justify-end">
            <Link to={`/volunteers/${_id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>


          
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;

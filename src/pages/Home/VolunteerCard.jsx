

// eslint-disable-next-line react/prop-types
const VolunteerCard = ({volunteer}) => {
  // eslint-disable-next-line react/prop-types
  const { thumbnail, postTitle, category, deadline } = volunteer;
  return (


    // <div className="text-3xl font-extrabold justify-center text-center  text-red-800 mt-6 p-8 animate__animated animate__bounce animate__delay-2s">
    //   <button className="text-3xl font-extrabold text-center text-red-800 mt-8 mb-8">
    //     {/* {" "} */}
    //     Brands On Sell
    //   </button>
    // </div>


    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img className='w-96 h-64 rounded-2xl'
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{postTitle}</h2>
        <p>{category}</p>
        <p>Deadline: {deadline}</p>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;

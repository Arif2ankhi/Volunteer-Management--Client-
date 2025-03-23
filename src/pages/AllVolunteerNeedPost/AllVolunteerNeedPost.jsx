import { useState, useEffect } from "react";
import VolunteerCard from "../Home/VolunteerCard";
import 'animate.css';

const AllVolunteerNeedPost = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState(""); 

  useEffect(() => {
    fetch('https://volunteer-management-server-ten.vercel.app/volunteers')
      .then((res) => res.json())
      .then((data) => {
        const sortedVolunteers = data.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        setVolunteers(sortedVolunteers);
      });
  }, []);

  // Filter volunteers based on search query and selected category
  const filteredVolunteers = volunteers.filter((volunteer) => {
    const matchesSearch =
      volunteer.postTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || volunteer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-bold text-center mb-6 ">All Volunteer Needs</h1>

      {/* Search and Category Filter */}
      <div className="flex justify-between mb-6">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search by Post Title"
          className="input input-bordered w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          className="select select-bordered w-1/3 "
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {/* Dynamically generate categories based on available categories in the data */}
          {Array.from(new Set(volunteers.map((volunteer) => volunteer.category))).map(
            (category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate__animated animate__flip animate__slow animate__repeat 1 1">
        {filteredVolunteers.map((volunteer) => (
          <VolunteerCard key={volunteer._id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedPost;








// import VolunteerCard from "../Home/VolunteerCard";
// import 'animate.css';

// const AllVolunteerNeedPost = () => {
//   const [volunteers, setVolunteers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); 
//   const [selectedCategory, setSelectedCategory] = useState(""); 

//   useEffect(() => {
//     fetch("https://volunteer-management-server-ten.vercel.app/volunteers")
//       .then((res) => res.json())
//       .then((data) => {
//         const sortedVolunteers = data.sort(
//           (a, b) => new Date(a.deadline) - new Date(b.deadline)
//         );
//         setVolunteers(sortedVolunteers);
//       });
//   }, []);

//   // Filter volunteers based on search query and selected category
//   const filteredVolunteers = volunteers.filter((volunteer) => {
//     const matchesSearch =
//       volunteer.postTitle.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "" || volunteer.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="p-8 ">
//       <h1 className="text-3xl font-bold text-center mb-6 ">All Volunteer Needs</h1>

//       {/* Search and Category Filter */}
//       <div className="flex justify-between mb-6">
//         {/* Search Box */}
//         <input
//           type="text"
//           placeholder="Search by Post Title"
//           className="input input-bordered w-1/3"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />

//         {/* Category Dropdown */}
//         <select
//           className="select select-bordered w-1/3 "
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           {/* Dynamically generate categories based on available categories in the data */}
//           {Array.from(new Set(volunteers.map((volunteer) => volunteer.category))).map(
//             (category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             )
//           )}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate__animated animate__flip animate__slow animate__repeat 1 1">
//         {filteredVolunteers.map((volunteer) => (
//           <VolunteerCard key={volunteer._id} volunteer={volunteer} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllVolunteerNeedPost;







import Banner from '../../components/Banner/Banner';
import RequiredVolunteers from './RequiredVolunteers';
import { easeOut, motion } from "framer-motion";




const Home = () => {
    return (
        <div className='bg-green-200'>
           <Banner></Banner>

        <section>
        <div className="text-3xl font-extrabold justify-center text-center  text-red-800 mt-6 p-8 animate__animated animate__bounce animate__delay-2s">
        Volunteer Needs Now 
        </div>
            
        </section>
        

           <RequiredVolunteers></RequiredVolunteers>

           <section className="mt-10 p-8 bg-gray-100">
           <h2 className="text-3xl font-extrabold text-green-600 text-center mb-4">Our Mission</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          At our organization, we aim to bring positive change to the community by connecting volunteers with meaningful opportunities. Join us in making a difference.
        </p> 
        {/* <motion.p
        animate={{ x: 50 }}
        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
        className="text-5xl font-bold">
            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        At our organization, we aim to bring positive change to the community by connecting volunteers with meaningful opportunities. Join us in making a difference.
        </motion.p> */}

      </section>

      <section className="mt-10 p-8 bg-white">
        <h2 className="text-3xl font-extrabold text-cyan-600 text-center mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold justify-center text-center  text-orange-800 mb-2">Fund Raising</h3>
            <p className="text-sm text-gray-600">Join us for our upcoming fundraiser to support local communities.</p>
          </div>
    
          <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
            {/* <h3 className="font-semibold mb-2"> Recent Campaign</h3> */}
            <h3 className="text-2xl font-bold justify-center text-center  text-green-800 mb-2"> Recent Campaign</h3>
            <p className="text-sm text-gray-600">Thank you to all volunteers who participated in our recent campaign!</p>
          </div>
          <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold justify-center text-center  text-purple-800 mb-2">Subscription</h3>
            <p className="text-sm text-gray-600">Subscribe to get the upcoming events. Email Subscription</p>
          </div>
        </div>
      </section>


           
        </div>
        
    );
};

export default Home;
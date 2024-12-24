
import Banner from '../../components/Banner/Banner';
import RequiredVolunteers from './RequiredVolunteers';


const Home = () => {
    return (
        <div>
           <Banner></Banner>

        {/* <div>Volunteer Need Now </div> */}
        <div className="text-3xl font-extrabold justify-center text-center  text-red-800 mt-6 p-8 animate__animated animate__bounce animate__delay-2s">
        Volunteer Need Now 
        </div>

           <RequiredVolunteers></RequiredVolunteers>
        </div>
    );
};

export default Home;
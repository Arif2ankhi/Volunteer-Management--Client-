import  { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  
const SocialHandle = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();  
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            
            // Show SweetAlert 
            Swal.fire({
                icon: 'success',
                title: 'Signed in successfully!',
                text: 'Welcome to your account!',
                showConfirmButton: false,
                timer: 1500,  
            });

            // Redirect to home page after successful sign-in
            navigate("/");  
        })
        .catch(error => {
            console.log(error.message);

            //  Error alert
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Failed to sign in with Google. Please try again.',
            });
        });
    }

    return (
        <div className='m-4'> 
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn bg-red-300 text-green-700 font-bold'>
                <FcGoogle /> Google
            </button>
        </div>
    );
};

export default SocialHandle;

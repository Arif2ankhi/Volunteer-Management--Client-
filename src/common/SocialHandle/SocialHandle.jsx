import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2

const SocialHandle = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();  // Navigate to home after sign-in

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            
            // Show SweetAlert success message when Google sign-in is successful
            Swal.fire({
                icon: 'success',
                title: 'Signed in successfully!',
                text: 'Welcome to your account!',
                showConfirmButton: false,
                timer: 1500,  // Dismiss alert after 1.5 seconds
            });

            // Redirect to home page after successful sign-in
            navigate("/");  // Change this to your desired route
        })
        .catch(error => {
            console.log(error.message);

            // Optionally, you can show an error alert
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

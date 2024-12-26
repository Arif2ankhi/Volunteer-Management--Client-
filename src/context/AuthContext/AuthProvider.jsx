import  { useState } from 'react';
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import { useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types


const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const  [user, setUser] = useState(null);
    const [loading, setLoading]  = useState(true);

    // sign in with email and assword

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google sign on 
    
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
       return signOut(auth)
       .then(() => {
            console.log('User signed out');
        })
    }


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
             console.log('User is signed in:', currentUser?.email);
            // jwt started feom the yop line with condition rendering with currentuser 
            if(currentUser?. email){
                const user = {email: currentUser.email};

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log('login token', res.data);
                    setLoading(false);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', {}, {withCredentials: true

                })
                .then(res => {
                    console.log('logout', res.data)
                setLoading(false)
            })
         }


        })

        return () =>{
            unsubscribe();  
        }
    }, [])


    const authInfo = {
        user, 
        loading, 
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }
   


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



// import  { useState } from 'react';
// import AuthContext from "./AuthContext";
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import auth from '../../firebase/firebase.init';
// import { useEffect } from 'react';

// // eslint-disable-next-line react/prop-types


// const googleProvider = new GoogleAuthProvider();
// // eslint-disable-next-line react/prop-types
// const AuthProvider = ({children}) => {

//     const  [user, setUser] = useState(null);
//     const [loading, setLoading]  = useState(true);

//     // sign in with email and assword

//     const createUser = (email, password) =>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email,password);
//     }

//     const signInUser = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }
//     // google sign on 
    
//     const signInWithGoogle = () =>{
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//     }

//     const signOutUser = () => {
//         setLoading(true);
//        return signOut(auth)
//     }


//     useEffect(() => {
//        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
//              console.log('User is signed in:', currentUser);
//             setLoading(false);

//         })

//         return () =>{
//             unsubscribe();  
//         }
//     }, [])


//     const authInfo = {
//         user, 
//         loading, 
//         createUser,
//         signInUser,
//         signInWithGoogle,
//         signOutUser
//     }
   


//     return (
//         <AuthContext.Provider value={authInfo} >
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import AllVolunteerNeedPost from "../pages/AllVolunteerNeedPost/AllVolunteerNeedPost";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import MyProfile from "../pages/MyProfile/MyProfile";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import PrivateRoute from "./PrivateRoute";
import VolunteerDetails from "../pages/VolunteerDetails/VolunteerDetails";
import VolunteerApply from "../pages/VolunteerApply/VolunteerApply";
import Update from "../pages/Update/Update";
import MyVolunteerNeed from "../pages/MyVolunteerNeed/MyVolunteerNeed";
import MyVolunteerRequest from "../pages/MyVolunteerRequest/MyVolunteerRequest";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:'/volunteers/:id',
          element:<PrivateRoute><VolunteerDetails></VolunteerDetails>,</PrivateRoute>,
          loader: ({params}) => fetch (`http://localhost:5000/volunteers/${params.id}`)
        },
        {
          path: '/volunteerApply/:id',
          element:<PrivateRoute><VolunteerApply></VolunteerApply></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/volunteers/${params.id}`)
          
        },
        {
            path:'register',
            element:<Register></Register>
        },

        {
          path:'volunteerNeedPost',
          element:<PrivateRoute><AllVolunteerNeedPost></AllVolunteerNeedPost></PrivateRoute>

        },
        {
          path:'addVolunteer',
          element:<PrivateRoute><AddVolunteerNeedPost></AddVolunteerNeedPost></PrivateRoute>
          
        },
        {
          path:'manageMyPost',
          element:<PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>
        },

        {
          path:'myProfile',
          element:<MyProfile></MyProfile>
        },

        {
            path:'signin',
            element:<Signin></Signin>
        },
        {
          path: "update/:id",
          element: <PrivateRoute><Update /></PrivateRoute>,
          // loader: ({ params }) => fetch(`http://localhost:5000/volunteers/${params.id}`),
        },
        
        // {
        //   path:'update',
        //   element:<Update></Update>
        // },
        {
          path:'myVolunteerNeed',
          element:<MyVolunteerNeed></MyVolunteerNeed>
        },
        {
          path:'myVolunteerRequest',
          element:<PrivateRoute><MyVolunteerRequest></MyVolunteerRequest></PrivateRoute>

        }

        
      ]
    },
  ]);

  export default router;
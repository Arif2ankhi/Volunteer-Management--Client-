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
          element:<VolunteerDetails></VolunteerDetails>,
          loader: ({params}) => fetch (`http://localhost:5000/volunteers/${params.id}`)

        },
        {
            path:'register',
            element:<Register></Register>
        },

        {
          path:'volunteerNeedPost',
          element:<AllVolunteerNeedPost></AllVolunteerNeedPost>

        },
        {
          path:'addVolunteer',
          element:<PrivateRoute><AddVolunteerNeedPost></AddVolunteerNeedPost></PrivateRoute>
          // element:<AddVolunteerNeedPost></AddVolunteerNeedPost>
        },
        {
          path:'manageMyPost',
          element:<ManageMyPost></ManageMyPost>
        },

        {
          path:'myProfile',
          element:<MyProfile></MyProfile>
        },

        {
            path:'signin',
            element:<Signin></Signin>
        },

        
      ]
    },
  ]);

  export default router;
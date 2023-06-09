import { createBrowserRouter } from "react-router-dom";
import AdmissionDetails from "../Components/AdmissionDetails/AdmissionDetails";
import Clubs from "../Components/Clubs/Clubs";
import Dashboard from "../Components/Dashboard/Dashboard";
import Error from "../Components/Error";
import Gallery from "../Components/Gallery/Gallery";
import Header from "../Components/Header/Header";
import Nav1 from "../Components/Nav/Nav1";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../Layout/Main";
import Private from "../Layout/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main></Main>
      </>
    ),

    children: [
      {
        path: "/",
        element: (
          <>
            <Header></Header>
          </>
        ),
      },
      // {
      //   path: "/signin",
      //   element: <SignIn></SignIn>,
      // },
      {
        path: "/admissiondetails",
        element: <AdmissionDetails></AdmissionDetails>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard></Dashboard>
          </Private>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/club",
        element: <Clubs></Clubs>,
      },
      // {
      //   path: "/singleservice/:id",
      //   element: (
      //     <Private>
      //       <SingleService></SingleService>
      //     </Private>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://travel-site-backend.vercel.app/singleservice/${params.id}`
      //     ),
      // },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;

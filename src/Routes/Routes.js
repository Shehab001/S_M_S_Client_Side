import { createBrowserRouter } from "react-router-dom";
import AdmissionDetails from "../Components/AdmissionDetails/AdmissionDetails";
import Dashboard from "../Components/Dashboard/Dashboard";
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
      // {
      //   path: "/addservicee",
      //   element: <SingleService></SingleService>,
      // },
      // {
      //   path: "/addservice",
      //   element: <AddService></AddService>,
      // },
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
      // {
      //   path: "*",
      //   element: <Error></Error>,
      // },
    ],
  },
]);

export default router;

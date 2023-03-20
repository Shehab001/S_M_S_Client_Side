import { createBrowserRouter } from "react-router-dom";
import AdmissionDetails from "../Components/AdmissionDetails/AdmissionDetails";
import Header from "../Components/Header/Header";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      // {
      //   path: "/signin",
      //   element: <SignIn></SignIn>,
      // },
      {
        path: "/admissiondetails",
        element: <AdmissionDetails></AdmissionDetails>,
      },
      // {
      //   path: "/signup",
      //   element: <SignUP></SignUP>,
      // },
      // {
      //   path: "/myreview",
      //   element: (
      //     <Private>
      //       <MyReview></MyReview>
      //     </Private>
      //   ),
      // },
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

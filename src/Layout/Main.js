import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import AdmissionDetails from "../Components/AdmissionDetails/AdmissionDetails";
import Contact from "../Components/Contact/Contact";
import Fifth from "../Components/Fifth/Fifth";
import Footer from "../Components/Footer/Footer";
import Fourth from "../Components/Fourth/Fourth";
import Header from "../Components/Header/Header";
import History from "../Components/History/History";
import Second from "../Components/Second/Second";
import Seventh from "../Components/Seventh/Seventh";
import Sixth from "../Components/Sixth/Sixth";
import Third from "../Components/Third/Third";
import Nav1 from "../Components/Nav/Nav1";
import Nav2 from "../Components/Nav/Nav2";

const Main = () => {
  return (
    <Box maxWidth={"1440px"}>
      <Nav1></Nav1>
      <Nav2></Nav2>

      <Outlet></Outlet>

      <Footer></Footer>
    </Box>
  );
};

export default Main;

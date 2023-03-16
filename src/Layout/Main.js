import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Fifth from "../Components/Fifth/Fifth";
import Footer from "../Components/Footer/Footer";
import Fourth from "../Components/Fourth/Fourth";
import Header from "../Components/Header/Header";
import History from "../Components/History/History";
import Second from "../Components/Second/Second";
import Seventh from "../Components/Seventh/Seventh";
import Sixth from "../Components/Sixth/Sixth";
import Third from "../Components/Third/Third";

const Main = () => {
  return (
    <Box maxWidth={"1440px"}>
      <Header></Header>
      <Second></Second>
      <History></History>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
      <Sixth></Sixth>
      <Seventh></Seventh>
      <Outlet></Outlet>
      <Footer></Footer>
    </Box>
  );
};

export default Main;

import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Fourth from "../Components/Fourth/Fourth";
import Header from "../Components/Header/Header";
import Second from "../Components/Second/Second";
import Third from "../Components/Third/Third";

const Main = () => {
  return (
    <Box maxWidth={"1440px"}>
      <Header></Header>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Outlet></Outlet>
    </Box>
  );
};

export default Main;

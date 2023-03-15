import { Box } from "@mui/material";
import React from "react";
import Carousal from "../Carousal/Carousal";
import Nav1 from "../Nav/Nav1";
import Nav2 from "../Nav/Nav2";

const Header = () => {
  return (
    <div>
      <Nav1></Nav1>
      <Nav2></Nav2>
      <Carousal></Carousal>
    </div>
  );
};

export default Header;

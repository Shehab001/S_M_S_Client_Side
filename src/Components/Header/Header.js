import { Box } from "@mui/material";
import React from "react";
import AdmissionDetails from "../AdmissionDetails/AdmissionDetails";
import Carousal from "../Carousal/Carousal";
import Contact from "../Contact/Contact";
import Fifth from "../Fifth/Fifth";
import Fourth from "../Fourth/Fourth";
import History from "../History/History";
import Second from "../Second/Second";
import Seventh from "../Seventh/Seventh";
import Sixth from "../Sixth/Sixth";
import Third from "../Third/Third";

const Header = () => {
  return (
    <div>
      <Carousal></Carousal>
      <Second></Second>
      <History></History>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
      <Sixth></Sixth>
      <Seventh></Seventh>
      <Contact></Contact>
    </div>
  );
};

export default Header;

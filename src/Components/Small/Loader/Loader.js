import React from "react";
import Loading from "../Lottie/Loading .json";
import Lottie from "lottie-react";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box>
      <Lottie animationData={Loading} />
    </Box>
  );
};

export default Loader;

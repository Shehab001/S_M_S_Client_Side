import React from "react";
import error from "../Assets/Main.json";
import Lottie from "lottie-react";
import { Box } from "@mui/system";

const Error = () => {
  return (
    <Box sx={{ width: "400px", mx: "auto", my: 5 }}>
      <Lottie animationData={error} />
    </Box>
  );
};

export default Error;

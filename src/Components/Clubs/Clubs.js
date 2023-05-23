import { Box } from "@mui/system";
import React from "react";
import cs from "../../Assets/coming-soon.json";
import Lottie from "lottie-react";

const Clubs = () => {
  return (
    <Box sx={{ width: "400px", mx: "auto", my: 5 }}>
      <Lottie animationData={cs} />
    </Box>
  );
};

export default Clubs;

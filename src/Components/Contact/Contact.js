import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";
import Mapp from "./Mapp";

const Contact = () => {
  return (
    <Box id="contact" mb={10} mx={10}>
      <Typography
        sx={{
          color: "black",
          fontSize: { xs: "20px", md: "40px" },
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "5px",
          mb: 5,
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <Mapp></Mapp>
        </Grid>
        <Grid item xs={12} md={6}>
          <Form></Form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

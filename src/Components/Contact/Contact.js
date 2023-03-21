import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Form from "./Form";
import Mapp from "./Mapp";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box id="contact" mb={10} mx={10} overflow={"hidden"}>
      <motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Mapp></Mapp>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: 350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Form></Form>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

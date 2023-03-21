import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../Assets/signature.png";
import img1 from "../../Assets/welcome-img-1.jpg";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

const Third = () => {
  return (
    <Box
      px={{ xs: 5, md: 10 }}
      py={{ xs: 10, md: 10 }}
      backgroundColor={"#fafafa"}
      overflow={"hidden"}
    >
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={6} sx={{ textAlign: "start", pt: 5 }}>
          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Typography
              sx={{
                fontFamily: "jest",
                fontSize: "25px",
                fontWeight: "bold",
                my: "",
                letterSpacing: "3px",
                opacity: 0.8,
              }}
            >
              Grandmaster Talk
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              sx={{
                fontFamily: "jest",
                fontSize: "30px",
                fontWeight: "bold",
                mt: 1,
                mb: 4,
                letterSpacing: "1px",
              }}
            >
              EDUCATION IS THE MOST<br></br> POWERFUL WEAPON
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Typography
              sx={{
                fontFamily: "jest",
                fontSize: "16px",

                opacity: 0.5,
                width: "90%",
              }}
            >
              Our students are talented, hard-working and full of good ideas. We
              encourage and empower them to bring their ideas to life. Hands-on
              opportunities are what we're all about. Our students are busy
              doing things that matter. Take a look at the opportunities you'll
              have at the University. The task of the modern educator is not to
              cut down jungles, but to irrigate deserts.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Typography
              sx={{
                mt: 3,
                mb: 1,
              }}
            >
              <img src={img} alt="Signature"></img>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Typography
              sx={{
                fontFamily: "jest",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "3px",

                opacity: 0.7,
              }}
            >
              Katherine Gonzalez
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              sx={{
                fontFamily: "jest",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "3px",

                opacity: 0.4,
              }}
            >
              Sekolah Grandmaster
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: 350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {" "}
            <Tilt className="Tilt" options={{ max: 25 }}>
              <img
                src={img1}
                alt="collage"
                style={{ width: "100%", border: "3px solid #e5e5e5" }}
              ></img>
            </Tilt>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Third;

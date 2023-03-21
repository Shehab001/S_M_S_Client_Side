import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../../Assets/we-have-faith-img-1.png";
import img1 from "../../Assets/we-have-faith-img-2.png";
import img2 from "../../Assets/we-have-faith-img-3.png";
import img3 from "../../Assets/we-have-faith-img-4.png";
import { motion } from "framer-motion";

const Fourth = () => {
  return (
    <Box mx={{ sm: 5, md: 10 }} my={10} overflow={"hidden"}>
      <Box>
        <motion.div
          initial={{ x: 350, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "3px",
              opacity: 0.8,
              mb: 5,
            }}
          >
            WE HAVE FAITH IN OUR STUDENT FUTURE
          </Typography>
        </motion.div>

        <motion.div
          initial={{ x: 350, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <Typography
            sx={{
              letterSpacing: "3px",
              opacity: 0.5,
              mb: 8,
              px: { xs: 5, sm: 10, md: 20 },
            }}
          >
            Our students are talented, hard-working and full of good ideas. We
            encourage and empower them to bring their ideas to life. Hands-on
            opportunities are what we're all about
          </Typography>
        </motion.div>
      </Box>
      <Box>
        <motion.div
          initial={{ x: 350, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography>
                <img src={img} alt="icon"></img>
              </Typography>

              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "semi-bold",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  opacity: 0.8,
                  my: 2,
                }}
              >
                Empower
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  opacity: 0.5,
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              {" "}
              <Typography>
                <img src={img1} alt="icon"></img>
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "semi-bold",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  opacity: 0.8,
                  my: 2,
                }}
              >
                Engage
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  opacity: 0.5,
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography>
                <img src={img2} alt="icon"></img>
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "semi-bold",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  opacity: 0.8,
                  my: 2,
                }}
              >
                Graduation
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  opacity: 0.5,
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography>
                <img src={img3} alt="icon"></img>
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "semi-bold",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  opacity: 0.8,
                  my: 2,
                }}
              >
                Awarding
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  opacity: 0.5,
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Fourth;

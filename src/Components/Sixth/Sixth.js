import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../Assets/image.jpg";
import img1 from "../../Assets/62a0432a90c05993939702.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

const Sixth = () => {
  return (
    <Box
      overflow={"hidden"}
      px={{ sm: 3, md: 10 }}
      mt={10}
      py={10}
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
      }}
    >
      <Box sx={{ color: "white" }}>
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <Typography
            sx={{
              fontFamily: "jest",
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "40px",
              px: 5,
              mb: 2,
            }}
          >
            A.K High School & College,Dhaka
          </Typography>
          <Typography
            sx={{
              fontFamily: "jest",
              opacity: 0.6,
              letterSpacing: "1px",
              fontSize: "16px",
              px: { xs: 5, sm: 10, md: 20 },
              mb: 10,
            }}
          >
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart
            like mine.
          </Typography>
        </motion.div>
      </Box>
      <Box>
        <Grid container spacing={2} alignItems={"center"} mt={5}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -350, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {" "}
              <Tilt className="Tilt" options={{ max: 25 }}>
                <img src={img1} style={{ width: "100%" }} alt="Group"></img>
              </Tilt>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} px={10} mt={{ md: 0, xs: 10 }}>
            <Grid container spacing={2} ml={5} textAlign={"center"}>
              <Grid
                item
                xs={5}
                sx={{
                  border: 1,
                  m: "12px",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  cursor: "pointer",
                  "&:hover": { borderColor: "#e8b742", transition: ".5s" },
                }}
              >
                {" "}
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Typography sx={{ fontSize: { xs: "40px", sm: "60px" } }}>
                    <CountUp
                      start={0}
                      end={175}
                      duration={2.75}
                      enableScrollSpy={true}
                    ></CountUp>
                  </Typography>
                  <Typography sx={{ fontSize: "20px", pb: 5 }}>
                    TEACHERS
                  </Typography>
                </motion.div>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  border: 1,
                  m: "12px",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  cursor: "pointer",
                  "&:hover": { borderColor: "#e8b742", transition: ".5s" },
                }}
              >
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Typography sx={{ fontSize: { xs: "40px", sm: "60px" } }}>
                    <CountUp
                      start={0}
                      end={52}
                      duration={2.75}
                      enableScrollSpy={true}
                    ></CountUp>
                  </Typography>
                  <Typography sx={{ fontSize: "20px", pb: 5 }}>
                    YEARS
                  </Typography>
                </motion.div>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  border: 1,
                  m: "12px",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  cursor: "pointer",
                  "&:hover": { borderColor: "#e8b742", transition: ".5s" },
                }}
              >
                {" "}
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  {" "}
                  <Typography sx={{ fontSize: { xs: "40px", sm: "60px" } }}>
                    <CountUp
                      start={0}
                      end={9176}
                      duration={4.75}
                      enableScrollSpy={true}
                    ></CountUp>
                  </Typography>
                  <Typography sx={{ fontSize: "20px", pb: 5 }}>
                    STUDENTS
                  </Typography>
                </motion.div>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  border: 1,
                  m: "12px",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  cursor: "pointer",
                  "&:hover": { borderColor: "#e8b742", transition: ".5s" },
                }}
              >
                {" "}
                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Typography sx={{ fontSize: { xs: "40px", sm: "60px" } }}>
                    <CountUp
                      start={0}
                      end={4}
                      duration={2.75}
                      enableScrollSpy={true}
                    ></CountUp>
                  </Typography>
                  <Typography sx={{ fontSize: "20px", pb: 5 }}>
                    BUILDING
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Sixth;

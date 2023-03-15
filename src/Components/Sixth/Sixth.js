import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../Assets/image.jpg";
import img1 from "../../Assets/62a0432a90c05993939702.png";
import CountUp from "react-countup";

const Sixth = () => {
  return (
    <Box
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
          these sweet mornings of spring which I enjoy with my whole heart like
          mine.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} alignItems={"center"} mt={5}>
          <Grid item xs={12} md={6}>
            <img src={img1} style={{ width: "100%" }} alt="Group"></img>
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
                <Typography sx={{ fontSize: "60px" }}>
                  <CountUp
                    start={0}
                    end={91}
                    duration={2.75}
                    enableScrollSpy={true}
                  ></CountUp>
                </Typography>
                <Typography sx={{ fontSize: "20px", pb: 5 }}>
                  TEACHERS
                </Typography>
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
                <Typography sx={{ fontSize: "60px" }}>
                  <CountUp
                    start={0}
                    end={73}
                    duration={2.75}
                    enableScrollSpy={true}
                  ></CountUp>
                </Typography>
                <Typography sx={{ fontSize: "20px", pb: 5 }}>YEARS</Typography>
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
                <Typography sx={{ fontSize: "60px" }}>
                  <CountUp
                    start={0}
                    end={6536}
                    duration={4.75}
                    enableScrollSpy={true}
                  ></CountUp>
                </Typography>
                <Typography sx={{ fontSize: "20px", pb: 5 }}>
                  STUDENTS
                </Typography>
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
                <Typography sx={{ fontSize: "60px" }}>
                  <CountUp
                    start={0}
                    end={6}
                    duration={2.75}
                    enableScrollSpy={true}
                  ></CountUp>
                </Typography>
                <Typography sx={{ fontSize: "20px", pb: 5 }}>
                  BUILDING
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Sixth;

import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/call-to-action-bg.jpg";
import img1 from "../../Assets/call-to-action-img.png";

const Fifth = () => {
  return (
    <Box mx={{ sm: 5, md: 10 }} my={10}>
      <Box
        sx={{ height: "150px", width: "100%", backgroundImage: `url(${img})` }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: "rgba(15,78,163,0.9)",
          }}
        >
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={3}>
              <img src={img1} alt="icon"></img>
            </Grid>
            <Grid item xs={6} textAlign={"start"} color={"white"}>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "25px" },
                  fontWeight: "bold",
                  fontFamily: "jest",
                  letterSpacing: "1px",
                }}
              >
                OUR STUDENTS ARE TALENTED,
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "25px" },
                  fontWeight: "semi-bold",
                  fontFamily: "jest",
                  letterSpacing: "1px",
                }}
              >
                passionate, hard-working and full of good ideas
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                <Button
                  sx={{
                    width: "80%",
                    backgroundColor: "#f5ab35",
                    py: 2,
                    color: "white",
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Fifth;

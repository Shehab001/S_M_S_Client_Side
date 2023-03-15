import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/aaron-burden-6jYoil2GhVk-unsplash.jpg";
import img1 from "../../Assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import img2 from "../../Assets/foto-sushi-6anudmpILw4-unsplash.jpg";

const Second = () => {
  return (
    <Box mx={{ md: 10, xs: 5 }} my={10}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            width: "400px",

            height: "300px",
            backgroundImage: `url(${img})`,
          }}
        >
          <Link to="/">
            {" "}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "rgba(235,35,88,0.9)",
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(235,35,88,0.4)",
                  transition: "1s",
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 25,
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "jest",
                  color: "white",
                }}
              >
                STUDENT <br></br>EVENTS
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            width: "400px",

            height: "300px",
            backgroundImage: `url(${img1})`,
          }}
        >
          <Link to="/">
            {" "}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "rgba(245,140,4,0.9)",
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(245,140,4,0.4)",
                  transition: "1s",
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 25,
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "jest",
                  color: "white",
                }}
              >
                CLASSROOM <br></br>STORIES
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            width: "400px",

            height: "300px",
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
          }}
        >
          <Link to="/">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "rgba(74,217,217,0.9)",
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(74,217,217,0.4)",
                  transition: "1s",
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 25,
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "jest",
                  color: "white",
                }}
              >
                TEACHERS <br></br>PROFILE
              </Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Second;

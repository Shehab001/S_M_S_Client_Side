import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "rgb(15,78,163)" }}>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} md={2} sx={{ backgroundColor: "#003085", py: 3 }}>
            <img
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1678765870/SMS/%E0%A6%8F.%E0%A6%95%E0%A7%87.%E0%A6%B9%E0%A6%BE%E0%A6%87_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2_%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1_%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C_%E0%A6%AE%E0%A6%A8%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE_wfyslz.png"
              alt="Icon"
              width={"135px"}
            />
            <Typography
              sx={{
                fontFamily: "jest",
                letterSpacing: "3.5px",
                color: "white",
              }}
            >
              A.K High School & College
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ backgroundColor: "rgb(15,78,163)", pt: { xs: 5, md: 0 } }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    School
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Login
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Register
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    About
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Teachers
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Contact
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Events
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Excursion
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Gallery
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Academics
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    Timetable
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      "&:hover": { transform: "translateX(20px)" },
                    }}
                  >
                    News
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              backgroundColor: "rgb(15,78,163)",
              display: "flex",
              justifyContent: "space-evenly",
              py: { xs: 5, md: 0 },
            }}
          >
            <Box
              sx={{
                width: "35px",
                height: "35px",
                borderRadius: "100%",
                backgroundColor: "#a6b5d4",
              }}
            >
              <Link to="/">
                <FacebookIcon sx={{ mt: "5px", color: "white" }}></FacebookIcon>
              </Link>
            </Box>
            <Box
              sx={{
                width: "35px",
                height: "35px",
                borderRadius: "100%",
                backgroundColor: "#a6b5d4",
              }}
            >
              <Link to="/">
                <LinkedInIcon sx={{ mt: "5px", color: "white" }}></LinkedInIcon>
              </Link>
            </Box>
            <Box
              sx={{
                width: "35px",
                height: "35px",
                borderRadius: "100%",
                backgroundColor: "#a6b5d4",
              }}
            >
              <Link to="/">
                <WhatsAppIcon sx={{ mt: "5px", color: "white" }}></WhatsAppIcon>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "jest",
            fontSize: "10px",
            py: 2,
            letterSpacing: "3px",
            backgroundColor: "#003085",
            color: "white",
          }}
        >
          Copyright 2022-2023 | ALL RIGHTS RESERVED BY MD.SHEHAB CHOWDHURY |©
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

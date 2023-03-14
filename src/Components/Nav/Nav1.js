import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Marquee from "react-marquee-slider";

const theme = createTheme({
  typography: {
    fontFamily: ["playfair"].join(","),
  },
});

const Nav1 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box py={2} px={{ sm: 10, xs: 2 }}>
        <Grid container spacing={2} alignItems={"Center"}>
          <Grid item xs={6} sm={4}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#00BBB4",

                "&:hover": {
                  backgroundColor: "#001B1A",
                  transform: "scale(1.1)",
                  transition: ".5s",
                },
              }}
            >
              Click here for admission-2023
            </Button>
          </Grid>
          <Grid item xs={4} sm={4} display={{ xs: "none", sm: "block" }}>
            <Marquee>
              {" "}
              <Typography
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: ".5s",
                    cursor: "pointer",
                  },
                }}
              >
                ২০২৩ সালের HSC পরীক্ষায় অংশগ্রহণেচ্ছুক অনিয়মিত ও জিপিএ উন্নয়ন
                পরীক্ষার্থীবৃন্দ &nbsp; &nbsp;
              </Typography>
            </Marquee>
          </Grid>
          <Grid item xs={6} sm={4} textAlign={"end"}>
            <Typography
              sx={{
                fontWeight: "bold",
                letterSpacing: "2px",
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: ".5s",
                  cursor: "pointer",
                },
              }}
            >
              akhighschool@edu.bd
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                letterSpacing: "2px",
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: ".5s",
                },
              }}
            >
              +8801790199194
            </Typography>
          </Grid>
        </Grid>
        <Divider></Divider>
      </Box>
    </ThemeProvider>
  );
};

export default Nav1;

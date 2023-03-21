import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ReactCardSlider from "../Small/Slider/Slider";
import img from "../../Assets/education_bg.jpg";
import img1 from "../../Assets/thumb_276_370_240_0_0_crop.jpg";
import img2 from "../../Assets/thumb_278_370_240_0_0_crop.jpg";
import img3 from "../../Assets/thumb_557_370_240_0_0_crop.jpg";
import img4 from "../../Assets/IMG-20221216-WA0005.jpg";
import img5 from "../../Assets/2017_12$largeimg25_Monday_2017_005642153.jpg";
import img6 from "../../Assets/images.jpg";
import { motion } from "framer-motion";

const Seventh = () => {
  const slides = [
    {
      image: img1,
      title: "নবীন বরণ",
      date: "Jan 15,2022",
    },
    {
      image: img2,
      title: "স্বাধীনতা দিবস",
      date: "Mar 26,2022",
    },
    {
      image: img3,
      title: " ত্রাণ বিতরণ",
      date: "Jul 13,2022",
    },
    {
      image: img4,
      title: " মাতৃভাষা দিবস",
      date: "Feb 21,2022",
    },
    {
      image: img6,
      title: "মহান বিজয় দিবস",
      date: "Dec 16,2022",
    },
    {
      image: img5,
      title: " বার্ষিক ক্রীড়া প্রতিযোগীতা",
      date: "Dec 17,2022",
    },
  ];
  return (
    <Box
      overflow={"hidden"}
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
      }}
    >
      <Box px={{ sm: 3, md: 10 }} pt={20} pb={5}>
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            sx={{
              fontFamily: "jest",
              fontSize: "30px",
              fontWeight: "bold",
              letterSpacing: "3px",
              px: 5,
              mb: 2,
            }}
          >
            RECENT AND UPCOMING EVENTS
          </Typography>
          <Typography
            sx={{
              fontFamily: "jest",
              fontSize: "16px",
              fontWeight: "semi-bold",
              letterSpacing: "2px",
              backgroundColor: "rgba(15,78,163,0.9)",
              color: "white",
              mx: { xs: "20px", sm: "40px", md: "200px" },
            }}
          >
            I feel the presence of the Almighty, who formed us in his own image,
            and the breath.
          </Typography>
        </motion.div>

        <Divider
          sx={{
            borderColor: "rgba(15,78,163,0.9)",
            width: "200px",
            borderBottomWidth: 4,
            mx: "auto",
            opacity: 0.6,
            mt: 5,
          }}
        ></Divider>
      </Box>
      <Box sx={{ px: "9.1%", mt: 5, mb: 10 }}>
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ReactCardSlider slides={slides} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Seventh;

import React from "react";
import img1 from "../../Assets/scll.png";
import img2 from "../../Assets/aa.jpg";
import "./Carousal.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import { fontFamily, letterSpacing } from "@mui/system";
import { motion } from "framer-motion";

const Carousal = () => {
  var items = [
    {
      img: img1,
      text: "Welcome To A.K. High School & College",
      text1: "Eastablish In 1971",
      text2: "Dania,Kadamtoly,Dhaka",
    },
    {
      img: img1,
      text: "Welcome To A.K. High School & College",
      text1: "Eastablish In 1971",
      text2: "Dania,Kadamtoly,Dhaka",
    },
    {
      img: img1,
      text: "Welcome To A.K. High School & College",
      text1: "Eastablish In 1971",
      text2: "Dania,Kadamtoly,Dhaka",
    },
  ];
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item(props) {
  return (
    <Paper className="background-tint" sx={{ position: "relative" }}>
      <img
        src={props.item.img}
        alt="Images"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "70vh",
          opacity: 0.8,
        }}
      ></img>
      <Typography
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-40%)",
          fontFamily: "jest",
          fontWeight: "bold",
          fontSize: { xs: "30px", sm: "40px", md: 50 },
          letterSpacing: "3px",
          color: "white",
        }}
      >
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {props.item.text}
        </motion.div>

        <Typography
          sx={{
            fontFamily: "jest",
            fontWeight: "semi-bold",
            letterSpacing: "3px",
            fontSize: "20px",
          }}
        >
          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {props.item.text1}
          </motion.div>
        </Typography>
        <Typography
          sx={{
            fontFamily: "jest",
            fontWeight: "semi-bold",
            letterSpacing: "3px",
            fontSize: "20px",
          }}
        >
          <motion.div
            initial={{ x: -350, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {props.item.text2}
          </motion.div>
        </Typography>
      </Typography>

      <a href="#aboutus">
        <Button
          sx={{
            backgroundImage:
              "linear-gradient(to right top, #6b7ad1, #5a67c1, #4a54b2, #3941a2, #282f92, #1f278b, #151e85, #08157e, #06157e, #04147f, #02147f, #00137f)",
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translate(-50%,-10%)",
            color: "white",
            fontFamily: "jest",
            letterSpacing: "3px",
            py: 1,
            px: 3,
          }}
        >
          Know Us
        </Button>
      </a>
    </Paper>
  );
}

export default Carousal;

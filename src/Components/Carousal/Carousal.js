import React from "react";
import img1 from "../../Assets/img2.jpg";
import img2 from "../../Assets/aa.jpg";
import "./Carousal.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import { letterSpacing } from "@mui/system";

const Carousal = () => {
  var items = [
    { img: img1, text: "Welcome To A.K High School & College", text1: "" },
    { img: img1, text: "Welcome To A.K High School & College", text1: "" },
    { img: img1, text: "Welcome To A.K High School & College", text1: "" },
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
          height: "auto",
          opacity: 0.8,
        }}
      ></img>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "jest",
          fontWeight: "bold",
          fontSize: { xs: "20px", sm: "30px", md: 50 },
          letterSpacing: "2px",
          color: "white",
        }}
      >
        {props.item.text}
      </Typography>
    </Paper>
  );
}

export default Carousal;

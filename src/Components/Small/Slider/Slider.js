import React from "react";
import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography } from "@mui/material";

const ReactCardSlider = (props) => {
  console.log(props.slides);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />

      <div id="slider">
        {props.slides.map((slide, index) => {
          //console.log(slide.object, index);
          return (
            <Link to="/">
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <Box className="description-controller">
                  <Box className="slider-card-title" sx={{ display: "flex" }}>
                    <CalendarMonthIcon
                      sx={{ color: "rgba(15,78,163)", fontSize: "20px" }}
                    ></CalendarMonthIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        pt: 0.2,
                        opacity: 0.5,
                        ml: 0.5,
                      }}
                    >
                      {slide.date}
                    </Typography>
                  </Box>

                  <Typography
                    className="slider-card-description"
                    sx={{ color: "black", letterSpacing: "1px" }}
                  >
                    {slide.title}
                  </Typography>
                </Box>
              </div>
            </Link>
          );
        })}
      </div>

      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};
export default ReactCardSlider;

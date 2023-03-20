import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import img from "../../Assets/Admission-Form-for-College-back-page1.jpg";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { createRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pdf from "../../Assets/ad1.pdf";
import pdf1 from "../../Assets/Admission-Form-for-College-fond-page.pdf";
import pdf2 from "../../Assets/Admission-Form-for-Morning-Shift-School.pdf";
import img1 from "../../Assets/Admission-Form-for-College-fond-page.jpg";
import img2 from "../../Assets/Admission-Form-for-Morning-Shift-School.jpg";
import "./AdmissionDetails.css";
import Marquee from "react-marquee-slider";
import { Button, TextField, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";

const AdmissionDetails = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [id, setId] = useState(0);

  return (
    <div style={{ backgroundColor: "#e5e5e5", padding: "20px 0" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        {id === 1 && <Viewer fileUrl={pdf} />}
        {id === 2 && <Viewer fileUrl={pdf1} />}
        {id === 3 && <Viewer fileUrl={pdf2} />}
      </Worker>
      <div
        style={{
          width: "400px",
          margin: "auto",
          marginTop: "0",
          cursor: "pointer",
          paddingTop: "10px",
        }}
      >
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
                py: 5,
              },
            }}
          >
            1.Click for Download &nbsp; &nbsp; 2.Complete the form &nbsp;
            &nbsp;3.Submit it below.&nbsp;&nbsp;
          </Typography>
        </Marquee>
        <Slider {...settings}>
          <div
            onClick={() => {
              setId(1);
            }}
          >
            <img src={img1} alt="img" width={"100%"}></img>
          </div>
          <div
            onClick={() => {
              setId(2);
            }}
          >
            <img src={img} alt="img" width={"100%"}></img>
          </div>
          <div
            onClick={() => {
              setId(3);
            }}
          >
            <img src={img2} alt="img" width={"100%"}></img>
          </div>
          <div
            onClick={() => {
              setId(4);
            }}
          >
            <img src={img} alt="img" width={"100%"}></img>
          </div>
        </Slider>
        <Box my={5}>
          <form>
            <TextField
              id="outlined-basic"
              label="File Link"
              variant="outlined"
            />
            <Button
              variant="contained"
              size="small"
              type="submit"
              sx={{ ml: 5, mt: 1.5 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default AdmissionDetails;

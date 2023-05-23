import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Divider, Typography } from "@mui/material";
import img1 from "../../Assets/Gallery/1.jpg";

export default function Gallery() {
  return (
    <Box sx={{ width: "100%", height: "auto", my: 5 }}>
      <Typography
        sx={{
          fontFamily: "jest",
          letterSpacing: "1px",
          fontSize: { md: "35px", xs: "20px" },
          fontWeight: "bold",
          color: "Black4",
          textDecoration: "underline",
          fontStyle: "italic",
          my: 2,
        }}
      >
        Gallery
      </Typography>
      <Divider sx={{ mb: 5 }}></Divider>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814447/School_Gallery/12_syxvel.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814447/School_Gallery/2_klpl2u.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814446/School_Gallery/11_ywk2gl.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814446/School_Gallery/9_svdgh3.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814445/School_Gallery/4_pf7qsl.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814445/School_Gallery/5_akqqvd.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814445/School_Gallery/6_r91nqy.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814445/School_Gallery/10_r3h4zj.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814446/School_Gallery/3_ub1e01.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814446/School_Gallery/7_rsuamt.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814446/School_Gallery/8_aiyl5n.jpg",
    title: "",
    author: "",
  },
  {
    img: "https://res.cloudinary.com/dc9bjecdl/image/upload/v1684814446/School_Gallery/1_bnarql.jpg",
    title: "",
    author: "",
  },
];

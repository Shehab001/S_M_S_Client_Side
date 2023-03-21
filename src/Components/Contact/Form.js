import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

import { Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tilt from "react-tilt";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gfqrgba",
        "template_mbpip0a",
        form.current,
        "WehNcLX2SaPrdq4Yq"
      )
      .then(
        (result) => {
          //console.log(result.text);
          toast.success("Sent");
        },
        (error) => {
          toast.error("Failed");
        }
      );
  };

  return (
    <Tilt className="Tilt" options={{ max: 5, speed: 50, scale: 1 }}>
      {" "}
      <Box id="contact" className="Appp" boxShadow={3} py={5}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <form ref={form} onSubmit={sendEmail}>
          <Box sx={{ flexGrow: 1, mx: "2%" }}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                {" "}
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-error-helper-text"
                  label="Full Name"
                  name="user_name"
                  placeholder="Enter Full Name..."
                />{" "}
              </Grid>{" "}
              <Grid item xs={12} sx={{ my: 3 }}>
                {" "}
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-error-helper-text"
                  label="Email"
                  name="user_email"
                  placeholder="Enter contact email..."
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
                <TextField
                  style={{ width: "100%" }}
                  placeholder="Enter Message"
                  name="message"
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
                <Button
                  type="submit"
                  style={{ width: "100%" }}
                  variant="contained"
                >
                  {" "}
                  Send Message{" "}
                </Button>{" "}
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Tilt>
  );
}

export default Form;

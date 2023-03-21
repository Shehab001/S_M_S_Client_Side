import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Loader from "../Small/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Context/Context";
import { Paper } from "@mui/material";
import study from "../Small/Lottie/SignUp.json";
import Lottie from "lottie-react";
const axios = require("axios");

const theme = createTheme();

export default function SignUp() {
  const { createUser, updateUserProfile, user } = React.useContext(AuthContext);
  // console.log(user, createUser, updateUserProfile);
  const [error, setError] = React.useState("");
  //const [success, setSuccess] = React.useState(false);
  const [spin, setSpin] = React.useState(false);
  const [role, setRole] = React.useState("student");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const saveUser = (name, email, role, uid) => {
    //console.log(name, url, email);
    const userr = {
      name: name,
      email: email,
      role: role,
      uid: uid,
    };
    console.log(userr);
    axios({
      method: "post",
      url: "http://localhost:5000/saveuser",
      data: userr,
    })
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success("User Added");
        }
        setSpin(false);
      })
      .catch(function (error) {
        // handle error
        setSpin(false);
        toast.error("Error");
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    setSpin(true);
    event.preventDefault();
    // setSuccess(false);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.img.value;
    console.log(name, password, img, email);

    if (password.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // setSuccess(true);
        form.reset();
        setError("");
        saveUser(name, email, role, user.uid);
        handleUpdateUserProfile(img, name);
        setSpin(false);
        navigate(from, { replace: true });
        toast.success("Logged In");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSpin(false);
        toast.error("Error");
        // ..
      });
    const handleUpdateUserProfile = (img, name) => {
      const profile = {
        photoURL: img,
        displayName: name,
      };
      console.log(profile);
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => toast.error("Update Error"));
    };
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid container spacing={2} mt={0} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          {/* <img src={img} alt="Icon" style={{ marginTop: "20vw" }}></img> */}
          <Lottie animationData={study} />
        </Grid>
        <Grid item xs={12} md={6} sx={{}} elevation={6} component={Paper}>
          {spin === true ? (
            <Box sx={{ mt: { xs: 0, md: 0 } }}>
              <Loader></Loader>
            </Box>
          ) : (
            <>
              {" "}
              <ThemeProvider theme={theme}>
                <Container
                  component="main"
                  maxWidth="xs"
                  sx={{ mb: 10, pt: { xs: 0, md: 8 } }}
                >
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgColor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign Up
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2} sx={{ color: "white" }}>
                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white",
                            }}
                            autoComplete="given-name"
                            name="Full Name"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            autoFocus
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white",
                            }}
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white",
                            }}
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white ",
                            }}
                            required
                            fullWidth
                            id="img"
                            label="Image Link"
                            name="img"
                            autoComplete="img"
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ textAlign: "start", color: "black" }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  color: "black",
                                }}
                                value="allowExtraEmails"
                                color="primary"
                                required
                              />
                            }
                            label="Remember Me."
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="teacher"
                                color="primary"
                                sx={{ ml: 5, color: "black" }}
                                onClick={(event) => {
                                  setRole(event.target.value);
                                }}
                              />
                            }
                            label="Teacher"
                          />
                        </Grid>
                      </Grid>
                      {
                        <Typography sx={{ textAlign: "start", color: "red" }}>
                          {error}
                        </Typography>
                      }
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link
                            to="/signin"
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                          >
                            Already have an account?Sign In
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

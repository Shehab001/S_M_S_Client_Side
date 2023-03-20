import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GoogleAuthProvider } from "firebase/auth";
import Loader from "../Small/Loader/Loader";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthContext } from "../../Context/Context";
import study from "../Small/Lottie/SignIn.json";
import Lottie from "lottie-react";

const theme = createTheme();

export default function SignIn() {
  const { signIn, providerLogin } = React.useContext(AuthContext);
  //console.log(user?.displayName);
  // useDocumentTitle("Travo Log In");
  // // const [user, setUser] = useState({});
  const [error, setError] = React.useState("");
  const [spin, setSpin] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  //console.log(from);

  const handleBtn = () => {
    // signInWithPopup(googleProvider)
    setSpin(true);

    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        setSpin(false);
        toast.success("Logged In");
        navigate(from, { replace: true });
        //console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleForm = (event) => {
    setSpin(true);
    event.preventDefault();

    const form = event.target;
    const name = form.email.value;
    const pass = form.password.value;
    //console.log(name, pass);
    //console.log(loading);

    signIn(name, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential;
        setSpin(false);
        toast.success("Logged In");
        setError("");
        //setUser(user);
        // console.log(user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSpin(false);
        const errorMessage = error.message;
        setError("Invalid Credentials");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-center" autoClose={500} />
      <Grid container component="main" alignItems={"center"}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={6} sx={{ mt: { xs: 10, sm: 0 } }}>
          <Lottie animationData={study} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
          sx={{ textAlign: "start" }}
          square
        >
          {spin === true ? (
            <Box sx={{ mt: { xs: 0, md: 0 } }}>
              <Loader></Loader>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  pt: 12,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleForm}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    required
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Typography sx={{ textAlign: "start", color: "red" }}>
                        {error}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link to="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <GoogleIcon
                    sx={{
                      mt: 3,
                      fontSize: "40px",
                      color: "#1976d2",
                      cursor: "pointer",
                      "&:hover": { transform: "scale(1.2)" },
                    }}
                    onClick={handleBtn}
                  ></GoogleIcon>
                </Box>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

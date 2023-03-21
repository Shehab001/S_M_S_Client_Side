import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { AuthContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    fontFamily: ["roboto"].join(","),
  },
});

function Nav2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logOut } = React.useContext(AuthContext);

  const open = Boolean(anchorEl);

  const location = useLocation();
  let navigate = useNavigate();
  //console.log(location.pathname);

  const handleBtn = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Logged Out");
      })
      .catch((error) => console.error(error));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [active, setActive] = React.useState(0);
  return (
    <>
      <ToastContainer position="top-center" autoClose={500} />
      <Box
        py={2}
        sx={{
          position: "absolute",
          zIndex: 1500,
          top: { xs: 55, sm: 50 },
          left: { xs: "30%", sm: "40%", md: 50 },
          transform: { xs: "translate(50,-40%)", md: "none" },
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.1)",
            transition: ".5s",
          },
        }}
      >
        <Link to="/">
          {" "}
          <img
            src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1678765870/SMS/%E0%A6%8F.%E0%A6%95%E0%A7%87.%E0%A6%B9%E0%A6%BE%E0%A6%87_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2_%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1_%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C_%E0%A6%AE%E0%A6%A8%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE_wfyslz.png"
            alt="Icon"
            width={"150px"}
          />
        </Link>
      </Box>
      <ThemeProvider theme={theme}>
        {" "}
        <AppBar
          position="static"
          sx={{
            mt: { xs: 1, sm: 0 },
            backgroundImage:
              "linear-gradient(to right top, #6b7ad1, #5a67c1, #4a54b2, #3941a2, #282f92, #1f278b, #151e85, #08157e, #06157e, #04147f, #02147f, #00137f)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* responsive */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">Home</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <a href="aboutus" style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">About</Typography>
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">Administration</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">Academic</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="admissiondetails"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography textAlign="center">Admission</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="clubs" style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">Club</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="gallery" style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">Gallery</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <a href="contact" style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">Contact</Typography>
                    </a>
                  </MenuItem>
                </Menu>
              </Box>
              {/* responsive finished */}

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Link to="/">
                  {" "}
                  <Button
                    onClick={handleCloseNavMenu}
                    onMouseOver={() => {
                      setActive(0);
                    }}
                    sx={
                      active === 0
                        ? {
                            my: 2,
                            color: "white",
                            display: "block",
                            borderRadius: 0,
                            borderBottom: 1,
                            borderBottomColor: "red",
                            transition: "1s",
                            mx: 1,
                          }
                        : {
                            my: 2,
                            color: "white",
                            display: "block",
                            borderRadius: 0,
                            borderBottom: 0,
                            mx: 1,
                          }
                    }
                  >
                    Home
                  </Button>
                </Link>
                <a href="#aboutus">
                  <Button
                    id="basic-button1"
                    aria-controls={open ? "basic-menu1" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleCloseNavMenu}
                    onMouseOver={(event) => {
                      setActive(1);
                      setAnchorEl(event.currentTarget);
                    }}
                    sx={
                      active === 1
                        ? {
                            my: 2,
                            color: "white",
                            display: "block",
                            borderRadius: 0,
                            borderBottom: 1,
                            borderBottomColor: "red",
                            transition: "1s",
                            mx: 1,
                          }
                        : {
                            my: 2,
                            color: "white",
                            display: "block",
                            borderRadius: 0,
                            borderBottom: 0,
                            mx: 1,
                          }
                    }
                  >
                    About
                  </Button>
                </a>

                {/* <Menu
                  sx={{ mt: 2 }}
                  id="basic-menu1"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button1",
                  }}
                >
                  <Box
                    sx={{ width: 300 }}
                    onMouseLeave={() => {
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem
                      sx={{
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                        },
                      }}
                    >
                      At A Glance
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem>History</MenuItem>
                    <Divider></Divider>
                    <MenuItem>Infrastructure</MenuItem>
                    <Divider></Divider>
                    <MenuItem>News & Events</MenuItem>
                  </Box>
                </Menu> */}
                {/* another button */}
                <Button
                  id="basic-button2"
                  aria-controls={open ? "basic-menu2" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleCloseNavMenu}
                  onMouseOver={(event) => {
                    setActive(2);
                    setAnchorEl(event.currentTarget);
                  }}
                  sx={
                    active === 2
                      ? {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 1,
                          borderBottomColor: "red",
                          transition: "1s",
                          mx: 1,
                        }
                      : {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 0,
                          mx: 1,
                        }
                  }
                >
                  Administration
                </Button>
                {/* <Menu
                  sx={{ mt: 2 }}
                  id="basic-menu2"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button2",
                  }}
                >
                  <Box
                    sx={{ width: 300 }}
                    onMouseLeave={() => {
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem
                      sx={{
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                        },
                      }}
                    >
                      Governing Body
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem>Faculty & Stuff Information</MenuItem>
                    <Divider></Divider>
                  </Box>
                </Menu> */}
                {/* <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleCloseNavMenu}
                  onMouseOver={(event) => {
                    setActive(3);
                    setAnchorEl(event.currentTarget);
                  }}
                  sx={
                    active === 3
                      ? {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 1,
                          borderBottomColor: "red",
                          transition: "1s",
                          mx: 1,
                        }
                      : {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 0,
                          mx: 1,
                        }
                  }
                >
                  Academic
                </Button>  */}
                {/* <Menu
                  sx={{ mt: 2 }}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Box
                    sx={{ width: 300 }}
                    onMouseLeave={() => {
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem
                      sx={{
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                        },
                      }}
                    >
                      At A Glance
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem>History</MenuItem>
                    <Divider></Divider>
                    <MenuItem>Infrastructure</MenuItem>
                    <Divider></Divider>
                    <MenuItem>News & Events</MenuItem>
                  </Box>
                </Menu> */}
                {/* <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleCloseNavMenu}
                  onMouseOver={(event) => {
                    setActive(4);
                    setAnchorEl(event.currentTarget);
                  }}
                  sx={
                    active === 4
                      ? {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 1,
                          borderBottomColor: "red",
                          transition: "1s",
                          mx: 1,
                        }
                      : {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 0,
                          mx: 1,
                        }
                  }
                >
                  Admission
                </Button> */}
                {/* <Menu
                  sx={{ mt: 2 }}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Box
                    sx={{ width: 300 }}
                    onMouseLeave={() => {
                      setAnchorEl(null);
                    }}
                  >
                    <MenuItem
                      sx={{
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                        },
                      }}
                    >
                      At A Glance
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem>History</MenuItem>
                    <Divider></Divider>
                    <MenuItem>Infrastructure</MenuItem>
                    <Divider></Divider>
                    <MenuItem>News & Events</MenuItem>
                  </Box>
                </Menu> */}
                <Button
                  onClick={handleCloseNavMenu}
                  onMouseOver={() => {
                    setActive(5);
                  }}
                  sx={
                    active === 5
                      ? {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 1,
                          borderBottomColor: "red",
                          transition: "1s",
                          mx: 1,
                        }
                      : {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 0,
                          mx: 1,
                        }
                  }
                >
                  Clubs
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  onMouseOver={() => {
                    setActive(6);
                  }}
                  sx={
                    active === 6
                      ? {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 1,
                          borderBottomColor: "red",
                          transition: "1s",
                          mx: 1,
                        }
                      : {
                          my: 2,
                          color: "white",
                          display: "block",
                          borderRadius: 0,
                          borderBottom: 0,
                          mx: 1,
                        }
                  }
                >
                  Gallery
                </Button>
                <a href="#contact">
                  {" "}
                  <Button
                    onClick={handleCloseNavMenu}
                    onMouseOver={() => {
                      setActive(7);
                    }}
                    sx={
                      active === 7
                        ? {
                            my: 2,
                            color: "white",
                            display: "block",
                            borderRadius: 0,
                            borderBottom: 1,
                            borderBottomColor: "red",
                            transition: "1s",
                            mx: 1,
                          }
                        : {
                            my: 2,
                            color: "white",
                            display: "block",
                            borderRadius: 0,
                            borderBottom: 0,
                            mx: 1,
                          }
                    }
                  >
                    Contact
                  </Button>
                </a>
              </Box>

              {/* finished */}

              <Box sx={{ flexGrow: 0, mx: 1 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ pt: 0, "&:hover": { transform: "scale(1.1)" } }}
                  >
                    {user?.uid ? (
                      <Avatar
                        sx={{ width: 56, height: 56 }}
                        alt="User Image"
                        src={user.photoURL}
                      />
                    ) : (
                      <Avatar src="/broken-image.jpg" />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {user?.uid ? (
                    <>
                      <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center">
                          <Button sx={{ px: 5 }}>Dashboard</Button>
                        </Typography>
                      </Link>

                      <Typography textAlign="center">
                        <Button sx={{ px: 5 }} onClick={handleBtn}>
                          Log Out
                        </Button>
                      </Typography>
                    </>
                  ) : (
                    <Box>
                      <MenuItem>
                        <Button sx={{ px: 5 }} size="small">
                          <Link style={{ textDecoration: "none" }} to="/signup">
                            Sign Up
                          </Link>
                        </Button>
                      </MenuItem>

                      <MenuItem>
                        <Button sx={{ px: 5 }} size="small">
                          <Link style={{ textDecoration: "none" }} to="/signin">
                            Sign In
                          </Link>
                        </Button>
                      </MenuItem>
                    </Box>
                  )}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
export default Nav2;

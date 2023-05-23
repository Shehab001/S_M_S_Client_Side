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
import { Divider, Popover } from "@mui/material";
import { AuthContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { borderColor } from "@mui/system";
//import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["roboto"].join(","),
  },
});
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   },
//   button: {
//     marginRight: theme.spacing(2),
//   },
// }));

function Nav2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logOut } = React.useContext(AuthContext);
  // responsive menu popover
  const [anchorEll, setAnchorEll] = React.useState(null);
  const [anchorEll1, setAnchorEll1] = React.useState(null);
  const [anchorEll2, setAnchorEll2] = React.useState(null);

  const location = useLocation();
  let navigate = useNavigate();
  //console.log(location.pathname);
  // for menu
  const [menu1AnchorEl, setMenu1AnchorEl] = React.useState(null);
  const [menu2AnchorEl, setMenu2AnchorEl] = React.useState(null);
  const [menu3AnchorEl, setMenu3AnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  // for menu
  const handleMenu1Click = (event) => {
    setMenu1AnchorEl(event.currentTarget);
  };

  const handleMenu2Click = (event) => {
    setMenu2AnchorEl(event.currentTarget);
  };
  const handleMenu3Click = (event) => {
    setMenu3AnchorEl(event.currentTarget);
  };
  const handleMenu1Close = () => {
    setMenu1AnchorEl(null);
  };

  const handleMenu2Close = () => {
    setMenu2AnchorEl(null);
  };
  const handleMenu3Close = () => {
    setMenu3AnchorEl(null);
  };

  //const classes = useStyles();

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

  // responsive menu popover
  const handlePopoverOpen = (event) => {
    setAnchorEll(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEll(null);
  };
  const handlePopoverOpen1 = (event) => {
    setAnchorEll1(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setAnchorEll1(null);
  };
  const handlePopoverOpen2 = (event) => {
    setAnchorEll2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEll2(null);
  };

  const openn = Boolean(anchorEll);
  const openn1 = Boolean(anchorEll1);
  const openn2 = Boolean(anchorEll2);

  return (
    <Box>
      <ToastContainer position="top-center" autoClose={500} />
      <Box
        py={2}
        sx={{
          display: { xl: "none" },
          position: { xs: "absolute" },
          zIndex: 1500,
          top: { xs: 55, sm: 50 },
          left: { xs: "30%", sm: "40%", md: 50 },
          transform: { xs: "translate(-50,-40%)", md: "none" },
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
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
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
                  <Divider></Divider>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Home</Typography>
                    </Link>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      aria-owns={openn ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                      color={"black"}
                    >
                      Administration
                    </Typography>
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={openn}
                      anchorEl={anchorEll}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Divider></Divider>
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Governing Body
                        </Typography>
                      </Link>
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Faculty & Staffs
                        </Typography>
                      </Link>
                      <Divider></Divider>
                    </Popover>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      aria-owns={openn1 ? "mouse-over-popover1" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen1}
                      onMouseLeave={handlePopoverClose1}
                      color={"black"}
                    >
                      Admission
                    </Typography>
                    <Popover
                      id="mouse-over-popover1"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={openn1}
                      anchorEl={anchorEll1}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handlePopoverClose1}
                      disableRestoreFocus
                    >
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Apply Now
                        </Typography>
                      </Link>
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Fees & Payment
                        </Typography>
                      </Link>
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Scholarships
                        </Typography>
                      </Link>
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Transfer Procedure
                        </Typography>
                      </Link>
                      <Divider></Divider>
                    </Popover>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      aria-owns={openn2 ? "mouse-over-popover2" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen2}
                      onMouseLeave={handlePopoverClose2}
                      color={"black"}
                    >
                      Academic
                    </Typography>
                    <Popover
                      id="mouse-over-popover2"
                      sx={{
                        pointerEvents: "none",
                      }}
                      open={openn2}
                      anchorEl={anchorEll2}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handlePopoverClose2}
                      disableRestoreFocus
                    >
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Code Of Conducts
                        </Typography>
                      </Link>
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Parents Guideline
                        </Typography>
                      </Link>
                      <Divider></Divider>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography textAlign="center" sx={{ px: 3, py: 1 }}>
                          Dress Code
                        </Typography>
                      </Link>
                      <Divider></Divider>
                    </Popover>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="club"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Club</Typography>
                    </Link>
                  </MenuItem>
                  <Divider></Divider>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      to="gallery"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Gallery</Typography>
                    </Link>
                  </MenuItem>
                  <Divider></Divider>
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

                {/* another button */}

                <Button
                  onMouseEnter={(event) => {
                    handleMenu1Click(event);
                    setActive(2);
                  }}
                  //onMouseOver={setActive(2)}
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

                <Menu
                  anchorEl={menu1AnchorEl}
                  keepMounted
                  open={Boolean(menu1AnchorEl)}
                  onClose={handleMenu1Close}
                >
                  <Box sx={{ width: 300 }} onMouseLeave={handleMenu1Close}>
                    <Divider></Divider>
                    <MenuItem
                      onClick={handleMenu2Close}
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                          fontFamily: "jest",
                        },
                      }}
                    >
                      Governing Body
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem
                      onClick={handleMenu2Close}
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                          fontFamily: "jest",
                        },
                      }}
                    >
                      Faculty & Staffs
                    </MenuItem>
                    <Divider></Divider>
                  </Box>
                </Menu>

                <Button
                  onMouseEnter={(event) => {
                    handleMenu2Click(event);
                    setActive(3);
                  }}
                  //onMouseOver={setActive(2)}
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
                </Button>

                <Menu
                  anchorEl={menu2AnchorEl}
                  keepMounted
                  open={Boolean(menu2AnchorEl)}
                  onClose={handleMenu2Close}
                >
                  <Box sx={{ width: 300 }} onMouseLeave={handleMenu2Close}>
                    <Divider></Divider>
                    <MenuItem
                      onClick={handleMenu2Close}
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                          fontFamily: "jest",
                        },
                      }}
                    >
                      Code of Conducts
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem
                      onClick={handleMenu2Close}
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                          fontFamily: "jest",
                        },
                      }}
                    >
                      Parents Guideline
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem
                      onClick={handleMenu2Close}
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                          fontFamily: "jest",
                        },
                      }}
                    >
                      Dress Code
                    </MenuItem>
                    <Divider></Divider>
                  </Box>
                </Menu>
                <Button
                  onMouseEnter={(event) => {
                    handleMenu3Click(event);
                    setActive(4);
                  }}
                  //onMouseOver={setActive(2)}
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
                </Button>

                <Menu
                  anchorEl={menu3AnchorEl}
                  keepMounted
                  open={Boolean(menu3AnchorEl)}
                  onClose={handleMenu3Close}
                >
                  <Box sx={{ width: 300 }} onMouseLeave={handleMenu3Close}>
                    <Divider></Divider>
                    <MenuItem
                      onClick={handleMenu3Close}
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                          fontFamily: "jest",
                        },
                      }}
                    >
                      Apply Now
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                        },
                      }}
                      onClick={handleMenu3Close}
                    >
                      Fees & Payment
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                        },
                      }}
                      onClick={handleMenu3Close}
                    >
                      Scholarships
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem
                      sx={{
                        fontFamily: "jest",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: ".1s",
                          ml: 2,
                        },
                      }}
                      onClick={handleMenu3Close}
                    >
                      Transfer Procedures
                    </MenuItem>
                    <Divider></Divider>
                  </Box>
                </Menu>
                <Link to="/club" style={{ textDecoration: "none" }}>
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
                </Link>

                <Link to="/gallery" style={{ textDecoration: "none" }}>
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
                </Link>
              </Box>

              {/* finished */}

              <Box sx={{ flexGrow: 0, mx: 1 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ pt: 1, "&:hover": { transform: "scale(1.1)" } }}
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
        </AppBar>{" "}
      </ThemeProvider>
    </Box>
  );
}
export default Nav2;

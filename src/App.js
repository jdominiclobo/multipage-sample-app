import React from "react";

import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

import ojus from "./ojus.png";

import { styled, useTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Home from "./components/static/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import Account from "./components/auth/Account";
import MyDevices from "./components/Devices/MyDevices";
import DeviceDiagnostics from "./components/Devices/DeviceDiagnostics/DeviceDiagnostics";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    padding: "2px",
    border: "3px",
    background: "transparent",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Bebas Neue",
  },
}));

const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function App(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to Logout?",
      text: "You will have to log in again",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES, LOGOUT!",
    }).then((result) => {
      if (result.value === true) {
        localStorage.removeItem("user");
        Swal.fire({
          icon: "success",
          title: "Logged Out",
        });
        window.location.href = "/";
      }
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const user = localStorage.getItem("user");

  return (
    <div align="sticky">
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar
            position="static"
            style={{ background: "#ffffff", height: "70px" }}
          >
            <Toolbar>
              <Typography align="left" variant="h4" className={classes.title}>
                {/* Biller */}
                <img alt="appImage" src={ojus} width="200px" height="70px" />
              </Typography>
              {!user ? (
                <>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button color="default">
                      <span>Home</span>
                    </Button>
                  </Link>

                  <Link to="/users/login" style={{ textDecoration: "none" }}>
                    <Button color="default">Login</Button>
                  </Link>
                  <Link to="/users/register" style={{ textDecoration: "none" }}>
                    <Button color="default">Register</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button color="default">
                      <span>Home</span>
                    </Button>
                  </Link>
                  <Link to="/account" style={{ textDecoration: "none" }}>
                    <Button color="default">
                      <span>Account</span>
                    </Button>
                  </Link>
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={handleLogout}
                  >
                    <Button color="default">
                      <span>Logout</span>
                    </Button>
                  </Link>
                  <IconButton
                    color="default"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    sx={{
                      width: drawerWidth,
                      flexShrink: 0,
                      "& .MuiDrawer-paper": {
                        width: drawerWidth,
                      },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                  >
                    <DrawerHeader>
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                          <ChevronLeftIcon />
                        ) : (
                          <ChevronRightIcon />
                        )}
                      </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                      {[
                        "Book and appointment",
                        "Buy consumables",
                        "Buy spares",
                        "Drafts",
                      ].map((text, index) => (
                        <ListItem button key={text}>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                    <List>
                      {["All mail", "Trash", "Contact us"].map(
                        (text, index) => (
                          <ListItem button key={text}>
                            <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Drawer>
                </>
              )}
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/users/register" component={Register} />
            <Route path="/users/login" component={Login} />
            <Route path="/account" component={Account} exact />
            <Route path="/account/devices" component={MyDevices} exact />
            <Route
              path="/account/devices/device"
              component={DeviceDiagnostics}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

export default App;

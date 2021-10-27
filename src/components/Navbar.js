import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import { React, useState } from "react";

const usestyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.55),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchbutton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setopen] = useState(false);
  const classes = usestyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.logoLg}>
          lama dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Lama
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setopen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchbutton}
            onClick={() => setopen(true)}
          />

          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="user"
            src="https://images.pexels.com/photos/6785291/pexels-photo-6785291.jpeg?cs=srgb&dl=pexels-limuel-gonzales-6785291.jpg&fm=jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
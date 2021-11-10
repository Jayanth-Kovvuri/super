import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

const usestyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    padding: 20,
    width: 300,
    margin: "20px auto",
  },
}));

const Signup = () => {
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const classes = usestyles();
  return (
    <Grid>
      <Paper elevation={20} className={classes.paper}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            style={btnstyle}
            fullWidth
            label="Name"
            placeholder="Enter your name"
          />
          <TextField
            style={btnstyle}
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />

          <TextField
            style={btnstyle}
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            style={btnstyle}
            label="Password"
            placeholder="Enter your password"
          />
          <TextField
            fullWidth
            style={btnstyle}
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
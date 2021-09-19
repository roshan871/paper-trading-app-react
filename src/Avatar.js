import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./Avatar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar  src="https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_400_400/0/1627602129072?e=1635984000&v=beta&t=O99s6JoeCNEA6l7-azw37DO30e3WIWsfXJqstKlImvI" alt="Remy Sharp" />
    </div>
  );
}

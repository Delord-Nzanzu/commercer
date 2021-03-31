import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  route: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
}));

function Form(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <form className={classes.route} autoComplete="off">
      {children}
    </form>
  );
}

export default Form;

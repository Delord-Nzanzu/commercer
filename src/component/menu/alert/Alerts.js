import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alerts(props) {
  const { typeError, titleError, messageError, etat } = props;
  const [open, setOpen] = React.useState(etat);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        transitionDuration={4000}
      >
        <Collapse in={open}>
          <Alert
            severity={typeError}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>{titleError}</AlertTitle>
            {messageError}
          </Alert>
        </Collapse>
      </Snackbar>
    </div>
  );
}

export default Alerts;

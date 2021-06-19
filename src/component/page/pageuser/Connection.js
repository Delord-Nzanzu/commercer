import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Index } from "../../etat/Index";
import { Link } from "react-router-dom";
import ActionUser from "../../redux/actionicons/ActionUser";
import { useDispatch } from "react-redux";
import Api from "../../axios/Api";
import Alerts from "../../menu/alert/Alerts";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: "5%",
    // marginBottom: "5%",
  },
}));

const varaible = {
  email: "",
  password: "",
};

function Connection() {
  const [etat, setEtat] = useState(false);
  const [etat2, setEtat2] = useState(false);
  const [datalert, setDatalert] = useState({
    typeError: "",
    titleError: "",
    messageError: "",
  });
  const dispatch = useDispatch();
  const disp = useDispatch();
  const classes = useStyles();

  const validate = () => {
    let tbs = {};
    tbs.email = /$^|.+@.+..+/.test(values.email) ? "" : "completer..";
    tbs.password = values.password ? "" : "completer..";
    setError({ ...tbs });
    return Object.values(tbs).every((x) => x === "");
  };
  const { values, onchange, error, setError, videlechamps } =
    Index.Etat(varaible);

  const logine = () => {
    if (validate()) {
      try {
        const data = {
          username: values.email,
          password: values.password,
        };
        Api.post("client/login", data)
          .then((result) => {
            console.log(result.data);
            dispatch(ActionUser());
            setEtat2(true);
            setEtat(true);
            setDatalert({
              typeError: "error",
              titleError: "Error",
              messageError: result.data.message,
            });
            disp({ type: "etatachatlogine" });
            sessionStorage.setItem("tockenclient", values.email);
          })
          .catch((err) => {});
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: "2%", marginBottom: "2%", height: "25vw" }}
    >
      <Index.Form>
        <Paper elevation={0} className={classes.paper}>
          <Typography
            variant="subtitle1"
            style={{ marginLeft: "2%", fontSize: "20px" }}
          >
            Logine
          </Typography>
          <Divider />
          <Grid item xs={12} style={{ marginTop: "2%", paddingBottom: "5%" }}>
            <Index.Input
              label="Email"
              name="email"
              value={values.email}
              onChange={onchange}
              error={error.email}
              type=""
              variant="outlined"
            />
            <Index.Input
              label="Password"
              name="password"
              value={values.password}
              onChange={onchange}
              error={error.password}
              type="password"
              variant="outlined"
            />

            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                logine();
              }}
              style={{ marginLeft: "2%" }}
            >
              {etat2 === true ? (
                <Link style={{ textDecoration: "none" }} to="/acceuille">
                  connection
                </Link>
              ) : (
                "connection"
              )}
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => videlechamps()}
              style={{ marginLeft: "1%" }}
            >
              Annuler
            </Button>
            <Link style={{ textDecoration: "none" }} to="/creationcompte">
              <Typography
                variant="subtitle2"
                style={{
                  marginLeft: "2%",
                }}
                component="div"
              >
                creation compte
              </Typography>
            </Link>
          </Grid>
        </Paper>
        {etat === true ? (
          <Alerts
            typeError={datalert.typeError}
            titleError={datalert.titleError}
            messageError={datalert.messageError}
            etat={true}
          />
        ) : (
          ""
        )}
      </Index.Form>
    </Grid>
  );
}

export default Connection;

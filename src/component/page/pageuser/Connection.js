import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Index } from "../../etat/Index";
import { Link } from "react-router-dom";
import ActionUser from "../../redux/actionicons/ActionUser";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const disp = useDispatch();
  const classes = useStyles();

  // const hstoiry = useHistory();

  const validate = () => {
    let tbs = {};
    tbs.email = /$^|.+@.+..+/.test(values.email) ? "" : "completer..";
    tbs.password = values.password ? "" : "completer..";
    setError({ ...tbs });
    return Object.values(tbs).every((x) => x === "");
  };
  const { values, onchange, error, setError, videlechamps } = Index.Etat(
    varaible
  );

  const logine = () => {
    if (validate()) {
      dispatch(ActionUser());
      disp({ type: "etatachatlogine" });
      sessionStorage.setItem("tockenclient", values.email);
    }
  };
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: "2%", marginBottom: "2%" }}
    >
      <Index.Form>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="subtitle1">Logine</Typography>
          <Grid item xs={12}>
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
              <Link to="/acceuille">connection</Link>
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => videlechamps()}
              style={{ marginLeft: "1%" }}
            >
              Annuler
            </Button>
            <Link to="/creationcompte">
              <Typography
                variant="subtitle2"
                style={{
                  marginLeft: "2%",
                }}
              >
                creer un compte
              </Typography>
            </Link>
          </Grid>
        </Paper>
      </Index.Form>
    </Grid>
  );
}

export default Connection;

import { Button, Grid, Paper } from "@material-ui/core";
import { Index } from "../../etat/Index";
import { useDispatch } from "react-redux";
import ActionIconsAdmin from "../../redux/actionicons/ActionIconsAdmin";
import { Link } from "react-router-dom";

const varaible = {
  email: "",
  password: "",
};

function ConnectionAdmin() {
  const dispatch = useDispatch();
  const validate = () => {
    let tbs = {};
    tbs.email = /$^|.+@.+..+/.test(values.email) ? "" : "completer..";
    tbs.password = values.password ? "" : "completer..";
    setError({ ...tbs });
    return Object.values(tbs).every((x) => x === "");
  };
  const { values, onchange, error, setError, videlechamps } =
    Index.Etat(varaible);

  const Logine = () => {
    if (validate()) {
      dispatch(ActionIconsAdmin());
    }
  };
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: "5%", marginBottom: "5%" }}
    >
      <Index.Form>
        <Paper elevation={0}>
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
                Logine();
              }}
              style={{ marginLeft: "2%" }}
            >
              <Link to="/adminehome">connection</Link>
            </Button>

            <Button
              color="secondary"
              variant="outlined"
              onClick={() => videlechamps()}
              style={{ marginLeft: "1%" }}
            >
              Annuler
            </Button>
          </Grid>
        </Paper>
      </Index.Form>
    </Grid>
  );
}

export default ConnectionAdmin;

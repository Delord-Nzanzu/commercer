import { Grid, Paper } from "@material-ui/core";
import { Index } from "../../etat/Index";

const varaible = {
  email: "",
  password: "",
};
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

const Logine = () => {
  if (validate()) {
  }
};

function ConnectionAdmin() {
  return (
    <Grid container justify="center">
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
          </Grid>
        </Paper>
      </Index.Form>
    </Grid>
  );
}

export default ConnectionAdmin;

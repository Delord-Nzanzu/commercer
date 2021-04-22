import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Index } from "../../etat/Index";
import airtel from "../../image/airtel.jpg";
import mpsa from "../../image/mpsa.png";
const useStyles = makeStyles((theme) => ({}));
const variable = {
  address: "",
};
function Paiement() {
  const classes = useStyles();
  const validate = () => {
    let tbs = {};
    tbs.address = values.address ? "" : "completer cette champs";
    setError({ ...tbs });
    return Object.values(tbs).every((e) => e === "");
  };
  const { values, onchange, error, setError } = Index.Etat(variable);

  //validate
  const valide = () => {
    if (validate()) {
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          style={{ marginLeft: "5%", marginTop: "1%", marginBottom: "1%" }}
        >
          Selectionner votre mode de Paiement
        </Typography>
        <Grid container>
          <img
            src={airtel}
            alt="Airtel"
            style={{ width: "5%", marginLeft: "5%", marginBottom: "1%" }}
          />
          <img
            src={mpsa}
            alt="Airtel"
            style={{ width: "5%", marginLeft: "5%", marginBottom: "1%" }}
          />
        </Grid>
      </Grid>
      <Divider style={{ color: "red" }} />
      <Grid item xs={12}>
        <Index.Form>
          <Index.Input
            label="Addresse Complet"
            name="address"
            value={values.address}
            onChange={onchange}
            type=""
            variant="outlined"
            error={error.address}
          />
          <Button
            variant="outlined"
            size="small"
            color="primary"
            style={{ marginLeft: "5%" }}
            onClick={() => valide()}
          >
            Valider la Trasation
          </Button>
        </Index.Form>
      </Grid>
    </Grid>
  );
}

export default Paiement;

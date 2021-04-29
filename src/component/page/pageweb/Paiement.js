import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Index } from "../../etat/Index";
import airtel from "../../image/airtel.jpg";
import mpsa from "../../image/mpsa.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));
const variable = {
  address: "",
};
function Paiement() {
  const [typeselectionne, setTypeselectionne] = useState("");
  const classes = useStyles();
  const selePaiement = useSelector((store) => store.paiement); //on pointe sur le varibale du state
  console.log(selePaiement);
  const seldisp = useDispatch();
  const dispZeroCompteur = useDispatch();

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
            onClick={() => {
              seldisp({ type: "paiementrue" });
              setTypeselectionne("Airtel");
            }}
          />
          <img
            src={mpsa}
            alt="Airtel"
            style={{ width: "5%", marginLeft: "5%", marginBottom: "1%" }}
            onClick={() => {
              seldisp({ type: "paiementrue" });
              setTypeselectionne("Vodacom");
            }}
          />
        </Grid>
        <Divider />
      </Grid>

      <Grid item xs={12} style={{ marginLeft: "5%", marginTop: "5%" }}>
        {selePaiement === false ? (
          ""
        ) : (
          <div>
            {" "}
            <Index.Form>
              <Typography variant="subtitle1" style={{ marginBottom: "2%" }}>
                Entre le mot de passe pour le compte {typeselectionne}
              </Typography>
              <Index.Input
                label="Password"
                name="address"
                value={values.address}
                onChange={onchange}
                type="password"
                variant="outlined"
                error={error.address}
              />
            </Index.Form>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => {
                valide();
                dispZeroCompteur({ type: "achazero" });
              }}
            >
              <Link to="/remerciement"> Valider la Trasation</Link>
            </Button>
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default Paiement;

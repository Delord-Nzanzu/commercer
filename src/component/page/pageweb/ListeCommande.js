import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import MaterialTable from "material-table";
import { useSelector } from "react-redux";
import { BackspaceSharp } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Index } from "../../etat/Index";
import { Link } from "react-router-dom";

const variable = {
  address: "",
};

function ListeCommande(props) {
  const { achat } = props;
  const validate = () => {
    let tbs = {};
    tbs.address = values.address ? "" : "completer cette champs";
    setError({ ...tbs });
    return Object.values(tbs).every((e) => e === "");
  };
  const { values, onchange, error, setError } = Index.Etat(variable);
  const totalAch = useSelector((store) => store.achat);

  const dispath = useDispatch();
  let tx = achat.map((item) => {
    return {
      id: item.id,
      type: item.type,
      prix: item.prix + " " + item.devise,
    };
  });
  let xx = 0;
  achat.map((item) => {
    return (xx = parseFloat(xx) + item.prix);
  });

  //validate
  const valide = () => {
    if (validate()) {
    }
  };
  const colonne = [
    {
      title: "id",
      field: "id",
    },
    {
      title: "type",
      field: "type",
    },
    {
      title: "prix",
      field: "prix",
    },
  ];

  return (
    <Grid container style={{ margin: "2%" }}>
      <Container>
        <IconButton onClick={() => dispath({ type: "falseafficheachat" })}>
          <BackspaceSharp color="primary" />
        </IconButton>
        <Grid container>
          <Grid item xs={9} style={{ marginRight: "2%" }}>
            <MaterialTable
              title="Listes commandes"
              data={tx}
              columns={colonne}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="subtitle1"
              style={{ marginLeft: "5%", fontSize: "13px" }}
            >
              Quaniter commander: {totalAch} pièce(s)
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ marginBottom: "5%", marginLeft: "5%" }}
            >
              Total a payer: $ {xx}
            </Typography>
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
                <Link to="/Paiement">Acheter</Link>
              </Button>
            </Index.Form>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ListeCommande;

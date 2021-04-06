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

function ListeCommande(props) {
  const { achat } = props;
  const totalAch = useSelector((store) => store.achat);
  const dispath = useDispatch();
  let tx = achat.map((item) => {
    return {
      id: item.id,
      type: item.type,
      prix: item.prix + " " + item.devise,
    };
  });

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
            <Typography variant="subtitle1">
              Quaniter commander: {totalAch}
            </Typography>
            <Typography variant="subtitle2">Total a payer: $0</Typography>
            <Button variant="outlined" size="small" color="primary">
              Acheter
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ListeCommande;

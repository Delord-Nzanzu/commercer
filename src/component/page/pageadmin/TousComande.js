import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import MaterialTable from "material-table";
import ItemCommande from "../../menu/item/ItemCommande";

const useStyles = makeStyles((theme) => ({
  bnt: {
    backgroundColor: "#528686",
    color: "white",
    marginBottom: "5%",
  },
}));

function TousComande() {
  const classes = useStyles();
  const column = [
    {
      title: "designation",
      field: "designation",
    },
    {
      title: "quantiter",
      field: "quantiter",
    },
    {
      title: "prix",
      field: "prix",
    },
    {
      title: "categorie",
      field: "categorie",
    },
    {
      title: "taille",
      field: "taille",
    },
  ];
  return (
    <Grid container style={{ backgroundColor: "#F2F2F2" }}>
      <Grid item xs={12}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            marginTop: "1%",
            marginBottom: "5%",
          }}
        >
          <ItemCommande />
          <MaterialTable
            title="Commande"
            columns={column}
            style={{ marginBottom: "1%", padding: "1%" }}
          />
          <Button variant="contained" size="small" className={classes.bnt}>
            Imprimer
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
}

export default TousComande;

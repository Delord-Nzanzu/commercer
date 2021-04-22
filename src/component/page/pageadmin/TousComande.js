import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import MaterialTable from "material-table";

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
    <Grid container>
      <Grid item xs={12}>
        <Container>
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

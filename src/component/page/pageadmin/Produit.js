import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

function Produit() {
  return (
    <Grid container justify="center">
      <Typography variant="h4">Gestion de produit </Typography>
      <Container>
        <Typography variant="h6">Gestion de produit </Typography>
      </Container>
    </Grid>
  );
}

export default Produit;

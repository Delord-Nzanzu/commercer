import { Container, Grid } from "@material-ui/core";
import React from "react";
import CommandeDay from "./CommandeDay";

function Commande() {
  return (
    <Grid container style={{ backgroundColor: "#F2F2F2" }}>
      <Container
        style={{
          backgroundColor: "#ffffff",
          marginTop: "1%",
          marginBottom: "3%",
        }}
      >
        <Grid item xs={12}>
          <CommandeDay />
        </Grid>
      </Container>
    </Grid>
  );
}

export default Commande;

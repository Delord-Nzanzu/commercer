import { Container, Grid } from "@material-ui/core";
import React from "react";
import ItemCommande from "../../menu/item/ItemCommande";
import { Switch, Route } from "react-router-dom";
import TousComande from "./TousComande";

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
          <ItemCommande />
          <Switch>
            <Route exact={true} path="/daycommande" component={TousComande} />
          </Switch>
          <TousComande />
        </Grid>
      </Container>
    </Grid>
  );
}

export default Commande;

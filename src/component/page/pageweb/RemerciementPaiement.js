import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function RemerciementPaiement() {
  const dispt = useDispatch();
  return (
    <Grid container>
      <Grid item xs={12} style={{ marginBottom: "5%" }}>
        <Typography variant="h4" style={{ marginBottom: "5%" }}>
          Merci pour votre commande ...
        </Typography>
        <Link
          to="/acceuille"
          onClick={() => dispt({ type: "falseafficheachat" })}
        >
          {" "}
          <Button variant="text" color="primary">
            acceuille
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default RemerciementPaiement;

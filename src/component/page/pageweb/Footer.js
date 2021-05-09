import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";

function Footer() {
  return (
    <Grid
      container
      justify="center"
      style={{
        backgroundColor: "#528686",
        height: "10vw",
        width: "100%",
        paddingLeft: "5%",
        color: "white",
      }}
    >
      <Grid item xs={4} style={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <h6>Qui sommes nous</h6>
        <Divider />
      </Grid>
      <Grid item xs={4} style={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <h6>Nos Contact</h6>
        <Divider />
      </Grid>
      <Grid item xs={4} style={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <h6>Aide</h6>
        <Divider />
      </Grid>
    </Grid>
  );
}

export default Footer;

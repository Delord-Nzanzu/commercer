import { Grid } from "@material-ui/core";
import React from "react";
import ListAllData from "./panie/ListAllData";
function Home() {
  return (
    <Grid container direction="row-reverse" justify="center">
      <Grid item xs={12}>
        <ListAllData />
      </Grid>
    </Grid>
  );
}

export default Home;

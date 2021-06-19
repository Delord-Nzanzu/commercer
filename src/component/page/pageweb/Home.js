import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import ListAllData from "./panie/ListAllData";
import xa from "../../image/xa.jpg";
import Carouseles from "../carouseles/Carouseles";
function Home() {
  return (
    <Grid container direction="row-reverse" justify="center">
      <Box
        style={{
          backgroundImage: `url(${xa})`,
          // backgroundColor: "#1E5E9D",
          justifyContent: "center",
          alignItems: "center",
        }}
        height="20vw"
        width="100vw"
      >
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            component="div"
            style={{
              color: "red",

              fontSize: "100px",
              marginLeft: "5%",
              marginTop: "2%",
            }}
          >
            DUKA LETU
          </Typography>
        </Grid>
      </Box>
      <Grid item xs={12}>
        <ListAllData />
      </Grid>
      <Grid item xs={12}>
        <Carouseles />
      </Grid>
    </Grid>
  );
}

export default Home;

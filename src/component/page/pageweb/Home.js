import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import ListAllData from "./panie/ListAllData";
import xa from "../../image/xa.jpg";
function Home() {
  return (
    <Grid container direction="row-reverse" justify="center">
      <Box
        style={{
          backgroundImage: `url(${xa})`,

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
              color: "#FFFFFF",
              fontSize: "50px",
              marginLeft: "5%",
            }}
          >
            Maison d'habillement Exostie yes
          </Typography>
        </Grid>
      </Box>
      <Grid item xs={12}>
        <ListAllData />
      </Grid>
    </Grid>
  );
}

export default Home;

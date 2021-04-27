import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React from "react";
import ModificationCompte from "./ModificationCompte";

function Profile() {
  return (
    <Grid container style={{ backgroundColor: "#F2F2F2" }}>
      <Grid item xs={12}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            marginTop: "1%",
            marginBottom: "4%",
          }}
        >
          <Typography var="h5" component="div">
            <span>
              {" "}
              <Settings color="primary" fontSize="inherit" />
            </span>
            Parametre
          </Typography>
          <Divider />
          <ModificationCompte />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Profile;

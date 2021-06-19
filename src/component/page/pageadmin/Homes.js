import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import React from "react";
import MaterialTable from "material-table";

function Homes() {
  return (
    <Grid container style={{ marginTop: "1%", marginBottom: "2%" }}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Paper style={{ width: "20%", height: "10vw", marginLeft: "2%" }}>
            <Typography
              variant="body1"
              color="primary"
              style={{ marginLeft: "2%", marginTop: "2%" }}
            >
              Totals vente journaliere
            </Typography>
            <Divider />
            <Typography
              variant="h2"
              color="primary"
              align="center"
              style={{ marginTop: "4%" }}
            >
              20
            </Typography>
          </Paper>
          <Paper style={{ width: "20%", height: "10vw", marginLeft: "2%" }}>
            <Typography
              variant="body1"
              color="secondary"
              style={{ marginLeft: "2%", marginTop: "2%" }}
            >
              Totals clients
            </Typography>
            <Divider />
            <Typography
              variant="h2"
              color="secondary"
              align="center"
              style={{ marginTop: "4%" }}
            >
              180
            </Typography>
          </Paper>
          <Paper style={{ width: "20%", height: "10vw", marginLeft: "2%" }}>
            <Typography
              variant="body1"
              color="inherit"
              style={{ marginLeft: "2%", marginTop: "2%" }}
            >
              Totales vente annuelle
            </Typography>
            <Divider />
            <Typography
              variant="h2"
              color="inherit"
              align="center"
              style={{ marginTop: "4%" }}
            >
              200
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MaterialTable
          title="Commandes"
          style={{ marginTop: "2%", marginLeft: "2%", marginRight: "3%" }}
        />
      </Grid>
    </Grid>
  );
}

export default Homes;

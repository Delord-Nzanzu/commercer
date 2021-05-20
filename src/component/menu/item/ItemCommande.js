import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { DataCommande } from "../../datas/Data";
import { Link } from "react-router-dom";

function ItemCommande() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          style={{
            backgroundColor: "#F2F2F2",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          {DataCommande.map((item) => {
            return (
              <List key={item.id}>
                <ListItem>
                  <ListItemIcon>{item.icons}</ListItemIcon>
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <ListItemText primary={item.title} />
                  </Link>
                </ListItem>
              </List>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ItemCommande;

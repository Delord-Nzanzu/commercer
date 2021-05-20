import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import React from "react";
import { DataSideAdmin } from "../../datas/Data";
import { Link } from "react-router-dom";

function ItemSideBarA(props) {
  const { open, setOpen } = props;
  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Grid
        container
        style={{
          height: "100%",
          width: "200px",
          backgroundColor: "#608585",
        }}
      >
        <Grid item style={{ marginTop: "20%" }}>
          {DataSideAdmin.map((item) => {
            return (
              <List key={item.id}>
                <ListItem>
                  <ListItemIcon>{item.icons}</ListItemIcon>
                  <Link
                    to={item.lik}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </Link>
                </ListItem>
              </List>
            );
          })}
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default ItemSideBarA;

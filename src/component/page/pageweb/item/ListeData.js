import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  ListItem,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { DataProduit } from "../../../datas/Data";
function ListeData(props) {
  return (
    <Grid container style={{ backgroundColor: "#ffffff" }}>
      <ListItem>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            {DataProduit.map((item, i) => {
              return (
                <Card key={i.toString()} style={{ marginBottom: "1%" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5">{item.type}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {" "}
                        {item.prix}
                        {item.devise}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => props.addpanier(item)}
                    >
                      <AddShoppingCart />
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </ListItem>
    </Grid>
  );
}

export default ListeData;

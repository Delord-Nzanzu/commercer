import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  GridList,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { DataProduit } from "../../../datas/Data";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "100%",
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

function ListeData(props) {
  const classes = useStyles();
  return (
    <Grid container style={{ backgroundColor: "#ffffff" }}>
      <ListItem>
        <Grid item xs={12}>
          {/*   <GridList className={classes.gridList} cols={2.5}>*/}
          <Grid container direction="row" justify="space-around">
            {DataProduit.map((item, i) => {
              return (
                <Card
                  key={i.toString()}
                  style={{
                    marginBottom: "1%",
                    marginTop: "1%",
                    maxWidth: 345,
                  }}
                >
                  <CardActionArea>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 7, stiffness: 5 }}
                    >
                      <CardMedia
                        component="img"
                        // alt={item.type}
                        height="120"
                        image={item.image}
                        title={item.type}
                      />
                    </motion.div>

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
          {/* </GridList>*/}
        </Grid>
      </ListItem>
    </Grid>
  );
}

export default ListeData;

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
    <div
      style={{
        backgroundColor: "#FFFFFF",
        // paddingTop: "1%",
        paddingLeft: "1%",
        paddingBottom: "1%",
        paddingRight: "2%",
      }}
    >
      <h5>Last produit</h5>
      <GridList
        cellHeight={300}
        cols={1}
        style={{
          width: "100%",
          backgroundColor: "#F2F2F2",
          marginBottom: "1vw",
        }}
      >
        <Grid container>
          <ListItem>
            <Grid item xs={12}>
              {/*   <GridList className={classes.gridList} cols={2.5}>*/}
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
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
                            transition={{ delay: 1, duration: 5, stiffness: 2 }}
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
                              <span style={{ color: "red", fontSize: "20px" }}>
                                {item.prix}
                              </span>
                              <span style={{ fontSize: "20px" }}>
                                {item.devise}
                              </span>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => {
                              props.addpanier(item);
                            }}
                          >
                            <AddShoppingCart color="primary" />
                          </Button>
                        </CardActions>
                      </Card>
                    );
                  })}
                </Grid>
              </motion.div>
              {/* </GridList>*/}
            </Grid>
          </ListItem>
        </Grid>
      </GridList>
    </div>
  );
}

export default ListeData;

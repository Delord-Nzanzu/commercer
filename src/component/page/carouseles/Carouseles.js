import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { SkipNext, SkipPrevious } from "@material-ui/icons";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { DataProduit } from "../../datas/Data";

function Carouseles() {
  return (
    <Grid
      container
      justify="center"
      style={{
        marginBottom: "2%",
        // paddingTop: "2%",
        backgroundColor: "#F2F2F2",
      }}
    >
      <Container
        style={{
          backgroundColor: "#FFFFFF",
          // justifyContent: "center",
          // alignItems: "center",
          // paddingTop: "1%",
          marginBottom: "2%",
          // paddingLeft: "25%",
        }}
      >
        <Typography
          variant="body1"
          component="div"
          style={{
            backgroundColor: "#3A8787",
            marginBottom: "2%",
            marginTop: "0.4%",
            color: "white",
            height: "5vw",
            alignItems: "center",
            fontSize: "50px",
          }}
        >
          Publiciter
        </Typography>
        <Carousel
          fullHeightHover={false}
          NextIcon={<SkipNext />}
          PrevIcon={<SkipPrevious />}
          navButtonsProps={{
            style: {
              backgroundColor: "#3A8787",
              borderRadius: 5,
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "#3A8787",
            },
          }}
        >
          {DataProduit.map((item, i) => {
            return (
              <Card
                key={i.toString()}
                style={{
                  maxWidth: 600,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "25%",
                }}
                elevation={0}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // alt={item.type}
                    height="300"
                    image={item.image}
                    title={item.type}
                  />
                </CardActionArea>
                <Typography variant="body1" color="textPrimary">
                  {item.type}
                </Typography>
              </Card>
            );
          })}
        </Carousel>
      </Container>
    </Grid>
  );
}

export default Carouseles;

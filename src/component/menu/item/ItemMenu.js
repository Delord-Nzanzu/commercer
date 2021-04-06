import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart, ExitToApp, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { DataMEnu } from "../../datas/Data";
import { Link } from "react-router-dom";
import ItemSideBarA from "./ItemSideBarA";
import { useSelector, useDispatch } from "react-redux";
import DownItem from "../../menu/drodownitem/DownItem";
import AfficheAcha from "../../redux/actionicons/AfficheAcha";

function ItemMenu() {
  const [opens, setOpens] = useState(false);
  const etat = useSelector((state) => state.etatadmin);
  const etatuser = useSelector((state) => state.logineicones);
  const achat = useSelector((state) => state.achat);
  const [open2, setOpen2] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dispth = useDispatch();
  const dispth2 = useDispatch();

  const handleToggle = () => {
    setOpen2((prevOpen) => !prevOpen);
  };

  const ActiveDrawer = () => {
    setOpens(true);
  };
  const chg = () => {
    dispth(AfficheAcha());
  };
  return (
    <Grid container>
      <Grid item xs={2}>
        <Grid container>
          {etat === false ? (
            ""
          ) : (
            <IconButton
              onClick={() => {
                ActiveDrawer();
              }}
            >
              <Menu style={{ color: "white" }} />
            </IconButton>
          )}

          <Typography variant="subtitle1" style={{ marginTop: "5%" }}>
            Activiter
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row" justify="center">
          {DataMEnu.map((item) => {
            return (
              <List key={item.id}>
                <Link
                  to={item.link}
                  style={{ color: "white" }}
                  onClick={() => dispth2({ type: item.type })}
                >
                  <ListItem>
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </ListItem>
                </Link>
              </List>
            );
          })}
          {etatuser === false ? (
            ""
          ) : (
            <Button
              ref={anchorRef}
              aria-controls={open2 ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              variant="text"
              size="small"
            >
              Liste categorie
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container direction="row" justify="flex-end">
          {/*  clic sur la verification du liste de commande  */}
          <IconButton onClick={() => chg()}>
            <AddShoppingCart fontSize="large" color="secondary" />
            <Typography variant="subtitle1" style={{ color: "white" }}>
              {achat === 0 ? "" : achat}
            </Typography>
          </IconButton>
          <IconButton>
            <ExitToApp style={{ color: "white" }} fontSize="small" />
            <Link to="/connection" style={{ color: "white" }}>
              <Typography variant="subtitle2" style={{ color: "white" }}>
                connection
              </Typography>
            </Link>
          </IconButton>
        </Grid>
      </Grid>
      <ItemSideBarA open={opens} setOpen={setOpens} />
      <DownItem open={open2} setOpen={setOpen2} anchorRef={anchorRef} />
    </Grid>
  );
}

export default ItemMenu;

import {
  Badge,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import {
  AccountCircle,
  AddShoppingCart,
  ExitToApp,
  Menu,
} from "@material-ui/icons";
import React, { useState } from "react";
import { DataMEnu } from "../../datas/Data";
import { Link } from "react-router-dom";
import ItemSideBarA from "./ItemSideBarA";
import { useSelector, useDispatch } from "react-redux";
import DownItem from "../../menu/drodownitem/DownItem";
import DrownItemUser from "../../menu/drodownitem/DrownItemUser";
import AfficheAcha from "../../redux/actionicons/AfficheAcha";
import { motion } from "framer-motion";

function ItemMenu() {
  const [opens, setOpens] = useState(false);
  const etat = useSelector((state) => state.etatadmin);
  const etatuser = useSelector((state) => state.logineicones);
  const achat = useSelector((state) => state.achat);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef2 = React.useRef(null);
  const dispth = useDispatch();
  const dispth2 = useDispatch();
  const disp = useDispatch();

  const handleToggle = () => {
    setOpen2((prevOpen) => !prevOpen);
  };
  const handleToggle2 = () => {
    setOpen3((prevOpen) => !prevOpen);
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 5 }}
            >
              <IconButton
                onClick={() => {
                  ActiveDrawer();
                }}
              >
                <Menu style={{ color: "white" }} />
              </IconButton>
            </motion.div>
          )}
          <motion.div
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            style={{ marginTop: "5%" }}
          >
            <Typography variant="subtitle1">Activiter</Typography>
          </motion.div>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row" justify="center">
          {DataMEnu.map((item) => {
            return (
              <List key={item.id}>
                <Link
                  to={item.link}
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => {
                    dispth2({ type: item.type });
                    disp({ type: "etatachatlogine" });
                  }}
                >
                  <ListItem>
                    <motion.div
                      whileHover={{ scale: 1, color: "#79C951", originX: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Typography variant="subtitle2">{item.title}</Typography>
                    </motion.div>
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
            {achat === 0 ? (
              <Badge badgeContent="0" color="secondary">
                <AddShoppingCart
                  fontSize="default"
                  style={{ color: "white" }}
                />
              </Badge>
            ) : (
              <Badge badgeContent={achat} color="secondary">
                <AddShoppingCart
                  fontSize="default"
                  style={{ color: "white" }}
                />
              </Badge>
            )}
          </IconButton>
          {etatuser === false ? (
            ""
          ) : (
            <IconButton
              ref={anchorRef2}
              aria-controls={open3 ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle2}
              variant="text"
              size="small"
            >
              <AccountCircle style={{ color: "white" }} />
            </IconButton>
          )}

          <IconButton>
            <ExitToApp style={{ color: "white" }} fontSize="small" />
            <Link
              to="/connection"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Typography variant="subtitle2" style={{ color: "white" }}>
                connection
              </Typography>
            </Link>
          </IconButton>
        </Grid>
      </Grid>
      <ItemSideBarA open={opens} setOpen={setOpens} />
      <DownItem open={open2} setOpen={setOpen2} anchorRef={anchorRef} />
      <DrownItemUser open={open3} setOpen={setOpen3} anchorRef={anchorRef2} />
    </Grid>
  );
}

export default ItemMenu;

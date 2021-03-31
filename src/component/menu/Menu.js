import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import ItemMenu from "./item/ItemMenu";

function Menu() {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#608585" }}
      elevation={0}
    >
      <Toolbar>
        <ItemMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Menu;

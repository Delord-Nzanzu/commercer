import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import React from "react";
import { DataDownItemCategorie } from "../../datas/Data";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Grid } from "@material-ui/core";

function DownItem(props) {
  const { open, setOpen, anchorRef } = props;

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      // disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper
            elevation={1}
            style={{ backgroundColor: "white", maxWidth: "100%" }}
          >
            {DataDownItemCategorie.map((item) => {
              return (
                <ClickAwayListener onClickAway={handleClose} key={item.id}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Grid container>
                      {item.icons}
                      <MenuItem>{item.title}</MenuItem>
                    </Grid>
                  </MenuList>
                </ClickAwayListener>
              );
            })}
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default DownItem;

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ScreenDialog({
  open,
  onClose,
  screenSize,
  dialogContent,
}) {
  return (
    <Dialog
      fullScreen={screenSize}
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      sx={{ textAlign: "center" }}
    >
      <AppBar
        sx={{
          position: "relative",
          alignItems: "flex-end",
          paddingLeft: "4rem",
          backgroundColor: "#198754",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </AppBar>
      <Box sx={{ marginTop: "10rem" }}>{dialogContent}</Box>
    </Dialog>
  );
}

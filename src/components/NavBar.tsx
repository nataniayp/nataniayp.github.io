import React from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Stack
          marginTop={4}
          spacing={8}
          direction={"row"}
          marginLeft={"auto"}
          color="black"
          marginRight={8}
        >
          <Typography sx={{ fontWeight: 600 }}>Home</Typography>
          <Typography sx={{ fontWeight: 600 }}>Portfolio</Typography>
          <Typography sx={{ fontWeight: 600 }}>Blog</Typography>
          <Typography sx={{ fontWeight: 600 }}>Contact</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

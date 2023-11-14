import React from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
          <Typography style={{color: "inherit", textDecoration: "none"}} sx={{ fontWeight: 600 }} component={Link} to="/">Home</Typography>
          <Typography style={{color: "inherit", textDecoration: "none"}} sx={{ fontWeight: 600 }} component={Link} to="/portfolio">Portfolio</Typography>
          <Typography style={{color: "inherit", textDecoration: "none"}} sx={{ fontWeight: 600 }} component={Link} to="/blog">Blog</Typography>
          <Typography style={{color: "inherit", textDecoration: "none"}} sx={{ fontWeight: 600 }} component={Link} to="/contact">Contact</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

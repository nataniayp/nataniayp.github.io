import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const STypography = styled(Typography)`
  ${(_) => css`
    color: inherit;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  `}
`;

const pages = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsDrawerOpen(open);
    };

  return isMobile ? (
    <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginY="8px"
        marginX="16px"
        alignItems="center"
      >
        <Box
          sx={{
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "4px",
            color: theme.palette.primary.main,
          }}
        >
          NATANIAYP
        </Box>
        <IconButton onClick={toggleDrawer(true)} edge="end">
          <MenuIcon sx={{ color: theme.palette.primary.main }} />
        </IconButton>
      </Box>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Stack
          marginTop={4}
          marginBottom={3}
          spacing={8}
          direction={"column"}
          marginRight="64px"
          color="black"
          marginLeft="32px"
        >
          {pages.map((page) => (
            <STypography
              key={page.to}
              component={Link}
              to={page.to}
              onClick={toggleDrawer(false)}
            >
              {page.label}
            </STypography>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  ) : (
    <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Toolbar>
        <Stack
          marginTop={4}
          marginBottom={3}
          spacing={8}
          direction={"row"}
          marginLeft={"auto"}
          color="black"
          marginRight={8}
        >
          {pages.map((page) => (
            <STypography key={page.to} component={Link} to={page.to}>
              {page.label}
            </STypography>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

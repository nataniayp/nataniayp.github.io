import React from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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

import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import profilePicture from "../assets/homepage.png";
import styled, { css } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const SImg = styled.img`
  object-fit: cover;
  alt: profile;
`;

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return isMobile ? (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        <SImg height="300px" width="300px" src={profilePicture} />

        <Box
          display="flex"
          marginBottom="4px"
          sx={{
            fontWeight: 700,
            fontSize: "2rem",
            color: theme.palette.primary.main,
          }}
        >
          Hi, I am Natania.
        </Box>
        <Typography align="center">
          I like doing web development, like this website!
        </Typography>
        <Typography align="center">
          Click any of the tabs on top to find out more about me.
        </Typography>
      </Box>
    </Container>
  ) : (
    <Container>
      <Box
        marginX="4rem"
        marginTop="2rem"
        marginBottom="4rem"
        padding="4rem"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "4rem",
              color: theme.palette.primary.main,
            }}
          >
            Hi, I am Natania.
          </Box>
          <Typography>
            I like doing web development, like this website!
          </Typography>
          <Typography>
            Click any of the tabs on top to find out more about me.
          </Typography>
        </Box>
        <Box paddingLeft="1rem" paddingTop="1rem">
          <SImg height="400em" width="400em" src={profilePicture} />
        </Box>
      </Box>
    </Container>
  );
};

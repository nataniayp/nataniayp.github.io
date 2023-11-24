import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";
import profilePicture from "../assets/homepage.png";
import keyboardPicture from "../assets/keyboard.png";
import styled, { css } from "styled-components";

const SImg = styled.img`
  object-fit: cover;
  alt: profile;
`;

const SLink = styled(Link)<{ textColor: string }>`
  ${(props) => css`
    color: ${props.textColor};
  `}
`;

export const Home = () => {
  const theme = useTheme();
  return (
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
              color: theme.palette.primary.dark,
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
      {/* <Box display="flex" alignItems="center">
        <SImg height="300em" src={keyboardPicture} />
        <Box display="flex" flexDirection="column" marginLeft="32px">
          <Typography>I play the keyboard.</Typography>
          <Typography>
            Currently, I am in{" "}
            <SLink
              textColor="#E24900"
              underline="hover"
              href="https://instagram.com/officiallyaight"
            >
              aight.
            </SLink>{" "}
            and{" "}
            <SLink
              textColor="#E24900"
              underline="hover"
              href="https://instagram.com/wearematb"
            >
              Marisa and the Baristas.
            </SLink>
          </Typography>
        </Box>
      </Box> */}
    </Container>
  );
};

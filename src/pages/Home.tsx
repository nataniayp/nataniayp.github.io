import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";
import profilePicture from "../assets/picture.jpg";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SBox = styled(Box)<{ bgColor: string }>`
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 8rem;
  margin-bottom: 8rem;
  padding: 3rem;
  height: 28rem;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
`;

const SImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  alt: profile;
`;

const SButton = styled(Button)<{ textColor: string }>`
  ${(props) => css`
    color: ${props.textColor};
    font-size: 1.2em;
    font-weight: 600;
  `}
`;

const SHeader = styled(Box)<{ textColor: string }>`
  ${(props) => css`
    color: ${props.textColor};
    font-size: 2em;
    font-weight: 600;
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
          <Typography>This website is still work in progress.</Typography>
        </Box>
        <Box paddingLeft="1rem" paddingTop="1rem">
          <SImg height="300em" width="300em" src={profilePicture} />
        </Box>
      </Box>
      <SBox bgColor="#E24900">
        <SHeader textColor="#FFE9D9">Portfolio</SHeader>
        <Box>Images</Box>
        <SButton textColor="#FFE9D9" href={"/portfolio"}>
          MORE
        </SButton>
      </SBox>
      <SBox bgColor="#FFE9D9">
        <SHeader textColor="#014920">Blog</SHeader>
        <Box>Images</Box>
        <SButton textColor="#014920" href={"/blog"}>
          MORE
        </SButton>
      </SBox>
    </Container>
  );
};

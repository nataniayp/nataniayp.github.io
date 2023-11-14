import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";
import profilePicture from "../assets/picture.jpg";
import "./Home.css";

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
          {/* <Typography variant="h4">Tech, math, music, photography</Typography> */}
        </Box>
        <Box paddingLeft="1rem" paddingTop="1rem">
          <img height="300em" width="300em" src={profilePicture} />
        </Box>
      </Box>
      <Box
        marginX="4rem"
        marginY="8rem"
        padding="3rem"
        height="28rem"
        bgcolor="#E24900"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="2rem"
      >
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "2em",
            color: "#FFE9D9",
          }}
        >
          Portfolio
        </Box>
        <Box>Images</Box>
        <Button
          variant="text"
          sx={{ color: "#FFE9D9", fontSize: "1.2em", fontWeight: 600 }}
        >
          MORE
        </Button>
      </Box>
      <Box
        marginX="4rem"
        marginY="8rem"
        padding="3rem"
        height="28rem"
        bgcolor="#FFE9D9"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="2rem"
      >
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "2em",
            color: "#014920",
          }}
        >
          Blog
        </Box>
        <Box>Images</Box>
        <Button
          variant="text"
          sx={{ color: "#014920", fontSize: "1.2em", fontWeight: 600 }}
        >
          MORE
        </Button>
      </Box>
    </Container>
  );
};

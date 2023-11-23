import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";

export const Blog = () => {
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
          <Typography>This Blog page is still work in progress.</Typography>
        </Box>
      </Box>
    </Container>
  );
};

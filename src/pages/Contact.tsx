import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";
import styled, { css } from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const STypography = styled(Typography)`
  ${(_) => css`
    margin-top: 12px;
    display: flex;
    align-items: center;
    color: #004921;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      background: none;
      background-color: none;
    }
  `}
`;

export const Contact = () => {
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
            Let's connect!
          </Box>
          <STypography component={Link} to={"mailto:natania.yovela@gmail.com"}>
            <SendIcon
              sx={{ color: "#004921", height: "12px", marginRight: "2px" }}
            />
            SEND AN EMAIL
          </STypography>
        </Box>
      </Box>
    </Container>
  );
};

import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled, { css } from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const STypography = styled(Typography)`
  ${(_) => css`
    margin-top: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      background: none;
      background-color: none;
    }
  `}
`;

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

export const Contact = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nessage, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value && !isValidEmail(event.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmail(event.target.value);
      setEmailError("");
    }
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };

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
        <Box display="flex" flexDirection={"column"} gap="24px">
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "4rem",
              color: theme.palette.primary.main,
            }}
          >
            Let's connect!
          </Box>
          <TextField required label="Name" onChange={handleNameChange} />

          <TextField
            required
            error={!!emailError}
            label="Email Address"
            onChange={handleEmailChange}
            helperText={emailError}
          />

          <TextField multiline label="Message" onChange={handleMessageChange} />

          <STypography
            color={theme.palette.primary.main}
            component={Link}
            to={"mailto:natania.yovela@gmail.com"}
          >
            <SendIcon
              sx={{
                color: theme.palette.primary.main,
                height: "12px",
                marginRight: "2px",
              }}
            />
            Send
          </STypography>
        </Box>
      </Box>
    </Container>
  );
};

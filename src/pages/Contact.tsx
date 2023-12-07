import React, { useState, ChangeEvent } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled, { css } from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

const SLoadingButton = styled(LoadingButton)`
  ${(_) => css`
    margin-top: 12px;
    display: flex;
    justify-content: start;
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
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newName = event.target.value;
    setName(newName);
    if (newName) {
      setNameError("");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (newEmail && !isValidEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };

  const resetForm = () => {
    setLoading(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (): void => {
    if (!name) {
      setNameError("Empty name");
    }

    if (!email || emailError) {
      const error = emailError === "" ? "Empty email address" : emailError;
      setEmailError(error);
    }

    if (name && email && !nameError && !emailError) {
      try {
        setLoading(true);
        const contactMessage = {
          name: name,
          email: email,
          message: message,
        };

        setTimeout(() => {
          axios
            .post(
              "https://personal-site-db.onrender.com/contacts",
              contactMessage
            )
            .then((response) => {
              console.log(response.data);
              console.log(response.status, response.data.token);
              setSuccessMessage("Thanks, " + name + "!");
              console.log("set success 1");
              resetForm();

              setTimeout(() => {
                setSuccessMessage("");
              }, 2000);
            });
        }, 2000);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
        } else {
          console.log("unexpected error: ", error);
        }
      }
    }
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
          <TextField
            required
            label="Name"
            value={name}
            error={!!nameError}
            onChange={handleNameChange}
            helperText={nameError}
          />

          <TextField
            required
            error={!!emailError}
            value={email}
            label="Email Address"
            onChange={handleEmailChange}
            helperText={emailError}
          />

          <TextField
            multiline
            label="Message"
            value={message}
            onChange={handleMessageChange}
          />
          <SLoadingButton
            loading={loading}
            disableRipple
            onClick={handleSubmit}
            startIcon={
              <SendIcon
                sx={{
                  color: theme.palette.primary.main,
                  height: "12px",
                }}
              />
            }
            loadingPosition="start"
          >
            <span>Send</span>
          </SLoadingButton>
          {successMessage && <Typography>{successMessage}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

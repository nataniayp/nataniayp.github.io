import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const STypography = styled(Typography)<{
  textcolor?: string;
  islink?: boolean;
}>`
  ${(props) => css`
    color: ${props.textcolor || "black"};
    text-decoration: none;
    font-weight: 600;
    &:hover {
      cursor: ${props.islink ? "pointer" : "auto"};
      text-decoration: ${props.islink ? "underline" : "none"};
    }
  `}
`;

export const Blog = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box paddingX="270px" paddingY="40px">
      <Box
        marginTop="26px"
        display="flex"
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <STypography
          textcolor={theme.palette.secondary.main}
          islink={false}
          fontSize="32px"
        >
          Play&nbsp;
        </STypography>
        <STypography
          textcolor={theme.palette.secondary.main}
          onClick={() => navigate("/blog/ttt")}
          islink={true}
          fontSize="32px"
        >
          Tic-Tac-Toe
        </STypography>
      </Box>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TttSquare } from "../components/Ttt/TttSquare";

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

export const Tictactoe = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(" "));
  const [nextPlayer, setNextPlayer] = useState("X");
  const [history, setHistory] = useState<string[][]>([]);
  const handleReset = (): void => {
    setBoard(Array(9).fill(" "));
  };

  const handleClick = (idx: number): void => {
    if (board[idx] === " ") {
      const newBoard = [...board];
      newBoard[idx] = nextPlayer;

      const newHistory = [...history];
      newHistory.push(board);
      setHistory(newHistory);
      setBoard(newBoard);
      setNextPlayer(nextPlayer === "O" ? "X" : "O");
    }
  };

  const handleUndo = (): void => {
    console.log(history.length);
    console.log(history);
    if (history.length) {
      setNextPlayer(nextPlayer === "O" ? "X" : "O");
      setBoard(history[history.length - 1]);
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
    }
  };

  const handleBack = (): void => {
    navigate(-1);
  };

  return (
    <Box paddingX="270px" paddingY="40px">
      <STypography islink={true} fontSize="16px" onClick={handleBack}>
        BACK
      </STypography>
      <STypography
        marginTop="24px"
        fontSize={"64px"}
        textcolor={theme.palette.secondary.light}
      >
        Tic-Tac-Toe
      </STypography>
      <Box
        marginTop="24px"
        display="flex"
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <STypography islink={false} fontSize="32px">
          NEXT:&nbsp;
        </STypography>
        <STypography
          fontSize="32px"
          textcolor={
            nextPlayer === "O"
              ? theme.palette.primary.main
              : theme.palette.secondary.main
          }
        >
          {nextPlayer}
        </STypography>
      </Box>
      <Board board={board} handleClick={handleClick} />
      <Box
        marginTop="24px"
        display="flex"
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <STypography
          fontSize="16px"
          islink={!!history.length}
          textcolor={history.length ? theme.palette.secondary.light : "grey"}
          onClick={handleUndo}
        >
          UNDO
        </STypography>
        <STypography
          fontSize="16px"
          islink={true}
          textcolor={theme.palette.secondary.light}
          onClick={handleReset}
        >
          RESET
        </STypography>
      </Box>
    </Box>
  );
};

interface BoardProps {
  board: string[];
  handleClick: (idx: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, handleClick }) => {
  const handleSquareClick = (idx: number): void => {
    handleClick(idx);
  };
  return (
    <Box
      marginTop="16px"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <Box display="flex" flexDirection={"row"}>
        <TttSquare value={board[0]} onClick={() => handleSquareClick(0)} />
        <TttSquare value={board[1]} onClick={() => handleSquareClick(1)} />
        <TttSquare value={board[2]} onClick={() => handleSquareClick(2)} />
      </Box>
      <Box display="flex" flexDirection={"row"}>
        <TttSquare value={board[3]} onClick={() => handleSquareClick(3)} />
        <TttSquare value={board[4]} onClick={() => handleSquareClick(4)} />
        <TttSquare value={board[5]} onClick={() => handleSquareClick(5)} />
      </Box>
      <Box display="flex" flexDirection={"row"}>
        <TttSquare value={board[6]} onClick={() => handleSquareClick(6)} />
        <TttSquare value={board[7]} onClick={() => handleSquareClick(7)} />
        <TttSquare value={board[8]} onClick={() => handleSquareClick(8)} />
      </Box>
    </Box>
  );
};

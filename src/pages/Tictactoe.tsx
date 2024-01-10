import { Box, Modal, Typography } from "@mui/material";
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

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400;
  transform: translate(-50%, -50%);
  boxshadow: 24;
  background: wheat;
  padding: 4px;
`;

const checkGameStatus = (board: string[]): number => {
  const triples = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const triple of triples) {
    const [a, b, c] = triple;
    if (board[a] !== " " && board[a] === board[b] && board[b] === board[c]) {
      return 1;
    }
  }

  // not done
  if (board.includes(" ")) {
    return 0;
  }

  // draw
  return -1;
};

export const Tictactoe = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(" "));
  const [nextPlayer, setNextPlayer] = useState("X");
  const [history, setHistory] = useState<string[][]>([]);
  const [open, setOpen] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };
  const handleReset = (): void => {
    setBoard(Array(9).fill(" "));
    setIsDone(false);
    setHistory([]);
  };

  const handleClick = (idx: number): void => {
    if (isDone) {
      return;
    }
    if (board[idx] === " ") {
      const newBoard = [...board];
      newBoard[idx] = nextPlayer;

      const newHistory = [...history];
      newHistory.push(board);
      setHistory(newHistory);
      setBoard(newBoard);

      const status = checkGameStatus(newBoard);
      if (status === 1) {
        setOpen(true);
        setIsDone(true);
      } else if (status == 0) {
        setNextPlayer(nextPlayer === "O" ? "X" : "O");
      } else {
        // -1
        setIsDraw(true);
        setOpen(true);
        setIsDone(true);
      }
    }
  };

  const handleUndo = (): void => {
    if (history.length) {
      if (!isDone) {
        setNextPlayer(nextPlayer === "O" ? "X" : "O");
      }
      setBoard(history[history.length - 1]);
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setIsDone(false);
    }
  };

  const handleBack = (): void => {
    navigate(-1);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        {isDraw ? (
          <ModalBox>It's a draw!</ModalBox>
        ) : (
          <ModalBox>{nextPlayer} wins!</ModalBox>
        )}
      </Modal>
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
    </>
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
        <TttSquare
          pos={0}
          value={board[0]}
          onClick={() => handleSquareClick(0)}
        />
        <TttSquare
          pos={1}
          value={board[1]}
          onClick={() => handleSquareClick(1)}
        />
        <TttSquare
          pos={2}
          value={board[2]}
          onClick={() => handleSquareClick(2)}
        />
      </Box>
      <Box display="flex" flexDirection={"row"}>
        <TttSquare
          pos={3}
          value={board[3]}
          onClick={() => handleSquareClick(3)}
        />
        <TttSquare
          pos={4}
          value={board[4]}
          onClick={() => handleSquareClick(4)}
        />
        <TttSquare
          pos={5}
          value={board[5]}
          onClick={() => handleSquareClick(5)}
        />
      </Box>
      <Box display="flex" flexDirection={"row"}>
        <TttSquare
          pos={6}
          value={board[6]}
          onClick={() => handleSquareClick(6)}
        />
        <TttSquare
          pos={7}
          value={board[7]}
          onClick={() => handleSquareClick(7)}
        />
        <TttSquare
          pos={8}
          value={board[8]}
          onClick={() => handleSquareClick(8)}
        />
      </Box>
    </Box>
  );
};

import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

interface SquareProps {
  pos: number;
  value: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TttSquare: React.FC<SquareProps> = ({ pos, value, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      style={{
        fontWeight: 600,
        fontSize: "64px",
        width: "120px",
        height: "120px",
        borderRadius: 0,
        borderLeft: pos == 1 || pos == 4 || pos == 7 ? "1px solid black" : "0",
        borderRight: pos == 1 || pos == 4 || pos == 7 ? "1px solid black" : "0",
        borderTop: pos >= 3 && pos <= 5 ? "1px solid black" : "0",
        borderBottom: pos >= 3 && pos <= 5 ? "1px solid black" : "0",
        color:
          value === "O"
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
      }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

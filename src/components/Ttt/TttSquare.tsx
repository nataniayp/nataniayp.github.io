import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

interface SquareProps {
  value: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TttSquare: React.FC<SquareProps> = ({ value, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      style={{
        fontWeight: 600,
        fontSize: "64px",
        width: "120px",
        height: "120px",
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

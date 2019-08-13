interface SquareProps extends React.Props<any> {
  value: "O" | "X";
  onClick: () => void;
}
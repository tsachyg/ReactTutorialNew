interface GameState {
  history: Array<SingleBoardHistory>;
  stepNumber: number;
  xIsNext: boolean;
}
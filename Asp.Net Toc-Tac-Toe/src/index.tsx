import * as React  from 'react';
import * as ReactDOM from 'react-dom';
import * as css from './index.scss';

interface SquareState {
  value: string;
}
interface SquareProps extends React.Props<any> {
  value: number;
}

class Square extends React.Component<SquareProps> {
  state: SquareState;
  value: number;
  constructor(props) {
    super(props);
    this.state = {
      value: "X",
    };
  }

  render() {
    return (
      <button className={css.square} onClick={() => this.setState({ value: this.state.value === "X" ? "O" : "X" })}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className={css.status}>{status}</div>
        <div className={css.boardRow}>
          <Square value={0}/>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className={css.game}>
        <div className={css.gameBoard}>
          <Board />
        </div>
        <div className={css.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
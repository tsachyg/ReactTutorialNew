"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const css = require("./index.scss");
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "X",
        };
    }
    render() {
        return (<button className={css.square} onClick={() => this.setState({ value: this.state.value === "X" ? "O" : "X" })}>
        {this.state.value}
      </button>);
    }
}
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }
    render() {
        const status = 'Next player: X';
        return (<div>
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
      </div>);
    }
}
class Game extends React.Component {
    render() {
        return (<div className={css.game}>
        <div className={css.gameBoard}>
          <Board />
        </div>
        <div className={css.gameInfo}>
          <div></div>
          <ol></ol>
        </div>
      </div>);
    }
}
// ========================================
ReactDOM.render(<Game />, document.getElementById('root'));
//# sourceMappingURL=index.jsx.map
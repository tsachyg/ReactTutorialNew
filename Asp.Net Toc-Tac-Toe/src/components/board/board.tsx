import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as css from 'index.scss';
import Square from 'components/square/square';
import { playerMove } from 'actions';

const mapStateToProps = (state: GameState) => {
  return state.history[state.stepNumber];
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: index => dispatch(playerMove({ squareIndex: index }))
  };
}

class BoardToConnect extends React.Component<BoardProps> {

  renderSquare(i) {
    const { squares, onClick } = this.props;
    return <Square
      value={squares[i]}
      onClick={() => onClick(i)}
    />;
  }

  render() {
    return (
      <div>
        <div className={css.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={css.boardRow} >
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={css.boardRow} >
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const Board = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(BoardToConnect);

export default Board;
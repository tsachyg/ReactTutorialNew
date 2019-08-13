import * as ActionTypes from 'constants/action-types';
import { Action } from 'redux-action';

export default function playerMoveReducer(state: GameState, action: Action<PlayerMovePayload>) {
  if (action.type === ActionTypes.PLAYER_MOVE) {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[action.payload.squareIndex] = state.xIsNext ? 'X' : 'O';
    return {
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    };
  }
  return state;
};
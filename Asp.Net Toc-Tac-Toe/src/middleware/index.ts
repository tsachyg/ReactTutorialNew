import { Store } from "redux";
import { Action } from 'redux-action';
import * as ActionTypes from 'constants/action-types';
import { calculateWinner } from "utils";

export default function forbiddenPlayerMoveMiddleware(store: Store) {
  return function (next) {
    return function (action: Action<PlayerMovePayload>) {
      if (action.type === ActionTypes.PLAYER_MOVE) {
        // do your stuff
        const state: GameState = store.getState();
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[action.payload.squareIndex]) {
          return store.dispatch({
            type: ActionTypes.FORBIDDEN_PLAYER_MOVE
          });
        }
      }
      return next(action);
    }
  }
}
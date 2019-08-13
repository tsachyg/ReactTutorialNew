import * as ActionTypes from 'constants/action-types';
import { Action } from 'redux-action';

export function playerMove(payload: PlayerMovePayload): Action<PlayerMovePayload> {
  return { type: ActionTypes.PLAYER_MOVE, payload };
}

export function navigateHistory(payload: NavigateHistoryPayload): Action<NavigateHistoryPayload> {
  return { type: ActionTypes.NAVIGATE_HISTORY, payload };
}
import * as ActionTypes from 'constants/action-types';
import { Action } from 'redux-action';

export default function navigateHistory(state: GameState, action: Action<NavigateHistoryPayload>) {
  if (action.type === ActionTypes.NAVIGATE_HISTORY) {
    
  }
  return state;
};
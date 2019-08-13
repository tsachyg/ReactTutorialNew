import reduceReducers from 'reduce-reducers';
import playerMove from 'reducers/player-move';
import navigateHistory from 'reducers/navigate-history';
import initialState from 'reducers/initial-state';

const rootReducer = reduceReducers(initialState, playerMove, navigateHistory);
export default rootReducer;
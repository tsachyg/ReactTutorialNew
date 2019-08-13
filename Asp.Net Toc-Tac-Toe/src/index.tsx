import * as React  from 'react';
import * as ReactDOM from 'react-dom';
import Game from 'components/game/game';
import { Provider } from 'react-redux';
import store from "store/index";
import { playerMove } from "actions/index";

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

window["store"] = store;
window["playerMove"] = playerMove;
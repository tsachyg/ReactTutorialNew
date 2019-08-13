"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const game_1 = require("components/game/game");
const react_redux_1 = require("react-redux");
const index_1 = require("store/index");
const index_2 = require("actions/index");
ReactDOM.render(<react_redux_1.Provider store={index_1.default}>
    <game_1.default />
  </react_redux_1.Provider>, document.getElementById('root'));
window["store"] = index_1.default;
window["playerMove"] = index_2.playerMove;
//# sourceMappingURL=index.jsx.map
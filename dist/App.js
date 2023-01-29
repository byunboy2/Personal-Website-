"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavBar_1 = __importDefault(require("./NavBar"));
const react_router_dom_1 = require("react-router-dom");
const RoutesList_1 = __importDefault(require("./RoutesList"));
require("./App.css");
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", { className: "App" },
                react_1.default.createElement(NavBar_1.default, null),
                react_1.default.createElement("main", null,
                    react_1.default.createElement(RoutesList_1.default, null))))));
}
exports.default = App;
//# sourceMappingURL=App.js.map
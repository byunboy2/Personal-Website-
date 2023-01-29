"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Personal_1 = __importDefault(require("./Personal"));
const Portfolio_1 = __importDefault(require("./Portfolio"));
const Contact_1 = __importDefault(require("./Contact"));
const Home_1 = __importDefault(require("./Home"));
function RoutesList() {
    return (React.createElement("div", { className: 'RoutesList col-md-8 offset-md-2' },
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/personal", element: React.createElement(Personal_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/portfolio", element: React.createElement(Portfolio_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/contact", element: React.createElement(Contact_1.default, null) }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement("p", null, "Hmmm. I can't seem to find what you want.") }))));
}
;
exports.default = RoutesList;
//# sourceMappingURL=RoutesList.js.map
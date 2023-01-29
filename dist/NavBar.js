"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./NavBar.css");
const react_router_dom_1 = require("react-router-dom");
const reactstrap_1 = require("reactstrap");
function NavBar() {
    return (react_1.default.createElement("nav", { className: "Navigation navbar navbar-expand-md" },
        react_1.default.createElement(reactstrap_1.Nav, { style: { display: 'flex', flexDirection: 'row' } },
            react_1.default.createElement(reactstrap_1.NavItem, null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/" }, "Home")),
            react_1.default.createElement(reactstrap_1.NavItem, null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/personal" }, "About")),
            react_1.default.createElement(reactstrap_1.NavItem, null,
                react_1.default.createElement("a", { href: "https://drive.google.com/file/d/1fbmDMOoQPguE9QT-crPRf4NPk-yRBQGq/view?usp=sharing", target: "_blank", rel: "noopener noreferrer" }, "Resume")),
            react_1.default.createElement(reactstrap_1.NavItem, null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/portfolio" }, "Portfolio")),
            react_1.default.createElement(reactstrap_1.NavItem, null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/contact" }, "Contact Me")))));
}
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map
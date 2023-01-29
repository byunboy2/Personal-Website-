"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
require("bootstrap-icons/font/bootstrap-icons.css");
function Home() {
    return (react_1.default.createElement("div", { styles: { backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).webp')" } },
        react_1.default.createElement("section", { className: "col-md-8" },
            react_1.default.createElement(reactstrap_1.Card, null,
                react_1.default.createElement(reactstrap_1.CardBody, { className: "text-center" },
                    react_1.default.createElement(reactstrap_1.CardTitle, null,
                        react_1.default.createElement("p", { className: "fw-bold", style: { fontSize: "5em" } },
                            "Hi, I'm Daniel!",
                            react_1.default.createElement("br", null),
                            "Software Engineer",
                            react_1.default.createElement("br", null),
                            react_1.default.createElement("i", { class: "bi bi-geo-alt-fill" }),
                            " Fullerton, CA"),
                        react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-around" } },
                            react_1.default.createElement("a", { href: "https://github.com/byunboy2", class: "nav-link" },
                                react_1.default.createElement("i", { class: "bi bi-github" }),
                                "Github"),
                            react_1.default.createElement("a", { href: "https://www.linkedin.com/in/daniel-b-75895424a/", class: "nav-link" },
                                react_1.default.createElement("i", { class: "bi bi-linkedin" }),
                                "Linkedin"))))))));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map
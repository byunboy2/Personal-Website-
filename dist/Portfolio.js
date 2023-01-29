"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reactstrap_1 = require("reactstrap");
require("./Portfolio.css");
const Jobly_png_1 = __importDefault(require("./static/images/Jobly.png"));
const Warbler_png_1 = __importDefault(require("./static/images/Warbler.png"));
function Portfolio() {
    return (React.createElement("section", { className: "col-md-4" },
        React.createElement(reactstrap_1.Card, { className: "card" },
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.CardTitle, { className: "fw-bold text-center mb-3", style: { fontSize: '1.5rem', textAlign: "center" } },
                    React.createElement("h1", { class: "section-header" }, "Technical Skills")),
                React.createElement(reactstrap_1.CardText, { style: { fontSize: '1.2rem' } },
                    React.createElement(reactstrap_1.Container, { className: "dev-icons-container" },
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/amazonwebservices/amazonwebservices-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Amazon Web Services")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/css3/css3-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "CSS")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/express/express-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Express")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Flask")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/html5/html5-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "HTML")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/javascript/javascript-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Javascript")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/jquery/jquery-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "jQuery")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/nodejs/nodejs-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "NodeJs")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/postgresql/postgresql-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Postgresql")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/python/python-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Python")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/react/react-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "React")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Sqlalchemy")),
                        React.createElement("div", { className: "dev-icons" },
                            React.createElement("img", { src: "https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/typescript/typescript-original.svg", alt: "technology logo" }),
                            React.createElement("h6", null, "Typescript")))))),
        React.createElement(reactstrap_1.Card, null,
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.CardTitle, null,
                    React.createElement("h1", { style: { textAlign: 'center' } }, "Jobly")),
                React.createElement(reactstrap_1.CardText, null,
                    React.createElement(reactstrap_1.Container, null,
                        React.createElement("div", { style: { textAlign: 'center' } },
                            React.createElement("img", { src: Jobly_png_1.default }),
                            React.createElement("br", null),
                            React.createElement("p", null, "Jobly is a full stack application used to search for jobs. Built using React, Node, Express, PostgreSQL and Bootstrap"),
                            React.createElement("div", { class: "text-center" },
                                React.createElement("a", { href: "https://react-jobly-frontend.onrender.com/", class: "btn btn-secondary link-item" }, "Demo"),
                                React.createElement("a", { href: "https://github.com/trevorhudson/react-jobly-frontend", class: "btn btn-secondary link-item" }, "Front End"),
                                React.createElement("a", { href: "https://github.com/byunboy2/Express-Jobly", class: "btn btn-secondary link-item" }, "Back End"))))))),
        React.createElement(reactstrap_1.Card, null,
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.CardTitle, null,
                    React.createElement("h1", { style: { textAlign: 'center' } }, "Warbler")),
                React.createElement(reactstrap_1.CardText, null,
                    React.createElement(reactstrap_1.Container, null,
                        React.createElement("div", { style: { textAlign: 'center' } },
                            React.createElement("img", { src: Warbler_png_1.default }),
                            React.createElement("br", null),
                            React.createElement("p", null, "Warbler is a full stack application that imitates Twitter. Built using Python, Flask, Bootstrap, HTML, CSS, SqlAlchemy and PostgreSQL"),
                            React.createElement("div", { class: "text-center" },
                                React.createElement("a", { href: "https://warbler-3r1p.onrender.com/" }, "Demo"),
                                React.createElement("a", { href: "https://github.com/byunboy2/rithm-warbler-Daniel-", class: "btn btn-secondary link-item" }, "Back End")))))))));
}
exports.default = Portfolio;
//# sourceMappingURL=Portfolio.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reactstrap_1 = require("reactstrap");
const Selfie_jpeg_1 = __importDefault(require("./static/images/Selfie.jpeg"));
require("./Personal.css");
function Personal() {
    return (React.createElement("section", { className: "col-md-4" },
        React.createElement(reactstrap_1.Card, { className: "card" },
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(reactstrap_1.CardTitle, { className: "fw-bold text-center mb-3", style: { fontSize: '1.5rem', textAlign: "center" } },
                    React.createElement("h1", { class: "section header" }, "About")),
                React.createElement("div", { style: { width: "100%", textAlign: "center" } },
                    React.createElement("img", { src: Selfie_jpeg_1.default, alt: "Profile Picture", style: { display: "inline-block" } })),
                React.createElement(reactstrap_1.CardText, { style: { fontSize: '1.2rem' } },
                    React.createElement("p", null, "I originally majored in the life sciences, but have been working as an accountant for the past several years. I worked with several software engineers at my previous jobs to improve workflows and was duly awed by the impact they made."),
                    React.createElement("p", null, "From what I've observed, the field involves a lot of creativity, collaboration and problem solving. Plus it is constantly evolving so no day is ever the same and there are limitless amount of opportunities."),
                    React.createElement("p", null, "It amazes me how people from all walks of life from different parts of the world could get together build and scale applications that makes a positive impact and solve challenging problems all at the comfort of their homes. Furthermore, I truly believe software engineering is an egalitarian career. All one really needs is a laptop, good internet and a drive to succeed in this field."),
                    React.createElement("p", null, "Inspired by the potential, I quit my job and enrolled in Rithm School to become a software engineer."))))));
}
exports.default = Personal;
//# sourceMappingURL=Personal.js.map
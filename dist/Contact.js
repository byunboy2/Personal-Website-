"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
require("./Contact.css");
function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters long')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        message: Yup.string()
            .min(10, 'Message must be at least 10 characters long')
            .required('Message is required')
    });
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        alert('Your message was sent successfully!');
        resetForm();
        setSubmitting(false);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Contact Me"),
        react_1.default.createElement(formik_1.Formik, { initialValues: { name: '', email: '', message: '' }, validationSchema: validationSchema, onSubmit: handleSubmit }, ({ isSubmitting }) => (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement("div", { className: "form-fields" },
                react_1.default.createElement(formik_1.Field, { type: "text", name: "name", placeholder: "Your name" }),
                react_1.default.createElement(formik_1.ErrorMessage, { name: "name", component: "div" }),
                react_1.default.createElement(formik_1.Field, { type: "email", name: "email", placeholder: "Your email" }),
                react_1.default.createElement(formik_1.ErrorMessage, { name: "email", component: "div" }),
                react_1.default.createElement(formik_1.Field, { component: "textarea", name: "message", placeholder: "Your message", className: "message-field" }),
                react_1.default.createElement(formik_1.ErrorMessage, { name: "message", component: "div" })),
            react_1.default.createElement("button", { type: "submit", disabled: isSubmitting }, "Submit"))))));
}
;
exports.default = Contact;
//# sourceMappingURL=Contact.js.map
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./ReactSimpleInput.css");
var ReactSimpleInput = function (_a) {
    var _b = _a.id, id = _b === void 0 ? "react-simple-input" : _b, error = _a.error, errorColor = _a.errorColor, props = __rest(_a, ["id", "error", "errorColor"]);
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("input", __assign({}, props, { id: id, className: "form_field", style: __assign(__assign({}, props.style), { borderColor: error && (errorColor || "#e81e25") }) })),
        react_1.default.createElement("label", { htmlFor: id, className: "form_label", style: {
                color: error && (errorColor || "#e81e25"),
                fontWeight: error ? 600 : 500,
            } }, props.placeholder),
        react_1.default.createElement("div", { style: { color: error && (errorColor || "#e81e25") } }, error)));
};
exports.default = react_1.default.memo(ReactSimpleInput);
//# sourceMappingURL=ReactSimpleInput.js.map
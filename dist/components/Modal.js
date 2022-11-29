"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function Modal(_ref) {
  var closeModal = _ref.closeModal,
    content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBackground"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return closeModal(false);
    },
    className: "closeBtn"
  }, "X"), /*#__PURE__*/_react.default.createElement("p", {
    className: "contentModal"
  }, content)));
}
var _default = Modal;
exports.default = _default;
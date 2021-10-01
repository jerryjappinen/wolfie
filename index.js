"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sendSimpleApiRequest = _interopRequireDefault(require("./sendSimpleApiRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Simple createClient function
var _default = apiAppId => {
  return {
    fetch() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (0, _sendSimpleApiRequest.default)(apiAppId, ...args);
    }

  };
};

exports.default = _default;
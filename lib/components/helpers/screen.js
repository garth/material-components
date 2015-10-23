"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  getSize: function getSize() {
    return {
      width: window.innerWidth || document.body.clientWidth || 1024,
      height: window.innerHeight || document.body.clientHeight || 768
    };
  }
};
module.exports = exports["default"];
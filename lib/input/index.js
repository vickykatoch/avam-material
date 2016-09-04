'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _reactCssThemr = require('react-css-themr');

var _Input = require('./Input');

var _FontIcon = require('../fonticon/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (0, _Input.inputFactory)(_FontIcon2.default);
var ThemedInput = (0, _reactCssThemr.themr)(_ComponentIdentifiers.INPUT, _theme2.default, { withRef: true })(Input);

exports.default = ThemedInput;
exports.Input = ThemedInput;
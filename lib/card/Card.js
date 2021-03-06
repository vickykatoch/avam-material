'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _ComponentIdentifiers = require('../ComponentIdentifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Card = function Card(_ref) {
  var children = _ref.children;
  var className = _ref.className;
  var raised = _ref.raised;
  var theme = _ref.theme;

  var other = _objectWithoutProperties(_ref, ['children', 'className', 'raised', 'theme']);

  var classes = (0, _classnames3.default)(theme.card, _defineProperty({}, theme.raised, raised), className);

  return _react2.default.createElement(
    'div',
    _extends({ 'data-react-toolbox': 'card', className: classes }, other),
    children
  );
};

Card.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  raised: _react.PropTypes.bool,
  theme: _react.PropTypes.shape({
    card: _react.PropTypes.string,
    raised: _react.PropTypes.string
  })
};

exports.default = (0, _reactCssThemr.themr)(_ComponentIdentifiers.CARD)(Card);
exports.Card = Card;
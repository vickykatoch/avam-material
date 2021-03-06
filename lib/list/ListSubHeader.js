'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSubHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSubHeader = function ListSubHeader(_ref) {
  var caption = _ref.caption;
  var className = _ref.className;
  var theme = _ref.theme;
  return _react2.default.createElement(
    'h5',
    { className: (0, _classnames2.default)(theme.subheader, className) },
    caption
  );
};

ListSubHeader.propTypes = {
  caption: _react.PropTypes.string,
  className: _react.PropTypes.string,
  theme: _react.PropTypes.object
};

ListSubHeader.defaultProps = {
  className: ''
};

exports.default = (0, _reactCssThemr.themr)(_ComponentIdentifiers.LIST)(ListSubHeader);
exports.ListSubHeader = ListSubHeader;
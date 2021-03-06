'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.menuItemFactory = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _FontIcon = require('../fonticon/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Ripple = require('../ripple/Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MenuItem: {
    displayName: 'MenuItem',
    isInFunction: true
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/menu/MenuItem.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/menu/MenuItem.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var factory = function factory(ripple) {
  var _class, _temp2;

  var MenuItem = _wrapComponent('MenuItem')((_temp2 = _class = function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, MenuItem);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick && !_this.props.disabled) {
          _this.props.onClick(event, _this);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuItem, [{
      key: 'render',
      value: function render() {
        var _classnames;

        var _props = this.props;
        var icon = _props.icon;
        var caption = _props.caption;
        var children = _props.children;
        var shortcut = _props.shortcut;
        var selected = _props.selected;
        var disabled = _props.disabled;
        var theme = _props.theme;

        var others = _objectWithoutProperties(_props, ['icon', 'caption', 'children', 'shortcut', 'selected', 'disabled', 'theme']);

        var className = (0, _classnames3.default)(theme.menuItem, (_classnames = {}, _defineProperty(_classnames, theme.selected, selected), _defineProperty(_classnames, theme.disabled, disabled), _classnames), this.props.className);

        return _react3.default.createElement(
          'li',
          _extends({}, others, { 'data-react-toolbox': 'menu-item', className: className, onClick: this.handleClick }),
          icon ? _react3.default.createElement(_FontIcon2.default, { value: icon, className: theme.icon }) : null,
          _react3.default.createElement(
            'span',
            { className: theme.caption },
            caption
          ),
          shortcut ? _react3.default.createElement(
            'small',
            { className: theme.shortcut },
            shortcut
          ) : null,
          children
        );
      }
    }]);

    return MenuItem;
  }(_react2.Component), _class.propTypes = {
    caption: _react2.PropTypes.string,
    children: _react2.PropTypes.any,
    className: _react2.PropTypes.string,
    disabled: _react2.PropTypes.bool,
    icon: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.element]),
    onClick: _react2.PropTypes.func,
    selected: _react2.PropTypes.bool,
    shortcut: _react2.PropTypes.string,
    theme: _react2.PropTypes.shape({
      caption: _react2.PropTypes.string,
      disabled: _react2.PropTypes.string,
      icon: _react2.PropTypes.string,
      menuItem: _react2.PropTypes.string,
      selected: _react2.PropTypes.string,
      shortcut: _react2.PropTypes.string
    })
  }, _class.defaultProps = {
    className: '',
    disabled: false,
    selected: false
  }, _temp2));

  return ripple(MenuItem);
};

var MenuItem = factory((0, _Ripple2.default)({}));
exports.default = (0, _reactCssThemr.themr)(_ComponentIdentifiers.MENU)(MenuItem);
exports.menuItemFactory = factory;
exports.MenuItem = MenuItem;
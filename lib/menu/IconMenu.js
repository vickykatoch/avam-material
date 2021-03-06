'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconMenu = exports.iconMenuFactory = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _IconButton = require('../button/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  IconMenu: {
    displayName: 'IconMenu',
    isInFunction: true
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/menu/IconMenu.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/menu/IconMenu.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var factory = function factory(IconButton, Menu) {
  var _class, _temp2;

  var IconMenu = _wrapComponent('IconMenu')((_temp2 = _class = function (_Component) {
    _inherits(IconMenu, _Component);

    function IconMenu() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, IconMenu);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconMenu.__proto__ || Object.getPrototypeOf(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        active: false
      }, _this.handleButtonClick = function (event) {
        _this.setState({ active: !_this.state.active });
        if (_this.props.onClick) _this.props.onClick(event);
      }, _this.handleMenuHide = function () {
        _this.setState({ active: false });
        if (_this.props.onHide) _this.props.onHide();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(IconMenu, [{
      key: 'render',
      value: function render() {
        return _react3.default.createElement(
          'div',
          { className: (0, _classnames2.default)(this.props.theme.iconMenu, this.props.className) },
          _react3.default.createElement(IconButton, {
            className: this.props.theme.icon,
            icon: this.props.icon,
            onClick: this.handleButtonClick,
            ripple: this.props.iconRipple
          }),
          _react3.default.createElement(
            Menu,
            {
              ref: 'menu',
              active: this.state.active,
              onHide: this.handleMenuHide,
              onSelect: this.props.onSelect,
              onShow: this.props.onShow,
              position: this.props.position,
              ripple: this.props.menuRipple,
              selectable: this.props.selectable,
              selected: this.props.selected,
              theme: this.props.theme
            },
            this.props.children
          )
        );
      }
    }]);

    return IconMenu;
  }(_react2.Component), _class.propTypes = {
    children: _react2.PropTypes.node,
    className: _react2.PropTypes.string,
    icon: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.element]),
    iconRipple: _react2.PropTypes.bool,
    menuRipple: _react2.PropTypes.bool,
    onClick: _react2.PropTypes.func,
    onHide: _react2.PropTypes.func,
    onSelect: _react2.PropTypes.func,
    onShow: _react2.PropTypes.func,
    position: _react2.PropTypes.string,
    selectable: _react2.PropTypes.bool,
    selected: _react2.PropTypes.any,
    theme: _react2.PropTypes.shape({
      icon: _react2.PropTypes.string,
      iconMenu: _react2.PropTypes.string
    })
  }, _class.defaultProps = {
    className: '',
    icon: 'more_vert',
    iconRipple: true,
    menuRipple: true,
    position: 'auto',
    selectable: false
  }, _temp2));

  return IconMenu;
};

var IconMenu = factory(_IconButton2.default, _Menu2.default);
exports.default = (0, _reactCssThemr.themr)(_ComponentIdentifiers.MENU)(IconMenu);
exports.iconMenuFactory = factory;
exports.IconMenu = IconMenu;
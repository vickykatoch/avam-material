'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = exports.radioGroupFactory = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _react4 = require('../utils/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  RadioGroup: {
    displayName: 'RadioGroup',
    isInFunction: true
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/radio/RadioGroup.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/radio/RadioGroup.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var factory = function factory(RadioButton) {
  var _class, _temp2;

  var RadioGroup = _wrapComponent('RadioGroup')((_temp2 = _class = function (_Component) {
    _inherits(RadioGroup, _Component);

    function RadioGroup() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RadioGroup);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (value) {
        if (_this.props.onChange) _this.props.onChange(value);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RadioGroup, [{
      key: 'renderRadioButtons',
      value: function renderRadioButtons() {
        var _this2 = this;

        return _react3.default.Children.map(this.props.children, function (child) {
          return !(0, _react4.isComponentOfType)(RadioButton, child) ? child : _react3.default.cloneElement(child, {
            checked: child.props.value === _this2.props.value,
            disabled: _this2.props.disabled || child.props.disabled,
            onChange: _this2.handleChange.bind(_this2, child.props.value)
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react3.default.createElement(
          'div',
          { 'data-react-toolbox': 'radio-group', className: this.props.className },
          this.renderRadioButtons()
        );
      }
    }]);

    return RadioGroup;
  }(_react2.Component), _class.propTypes = {
    children: _react2.PropTypes.node,
    className: _react2.PropTypes.string,
    disabled: _react2.PropTypes.bool,
    name: _react2.PropTypes.string,
    onChange: _react2.PropTypes.func,
    value: _react2.PropTypes.any
  }, _class.defaultProps = {
    className: '',
    disabled: false
  }, _temp2));

  return RadioGroup;
};

var RadioGroup = factory(_RadioButton2.default);
exports.default = (0, _reactCssThemr.themr)(_ComponentIdentifiers.RADIO)(RadioGroup);
exports.radioGroupFactory = factory;
exports.RadioGroup = RadioGroup;
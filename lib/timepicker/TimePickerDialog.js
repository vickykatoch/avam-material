'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _time = require('../utils/time');

var _time2 = _interopRequireDefault(_time);

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TimePickerDialog: {
    displayName: 'TimePickerDialog',
    isInFunction: true
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/timepicker/TimePickerDialog.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/timepicker/TimePickerDialog.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var factory = function factory(Dialog) {
  var _class, _temp2;

  var TimePickerDialog = _wrapComponent('TimePickerDialog')((_temp2 = _class = function (_Component) {
    _inherits(TimePickerDialog, _Component);

    function TimePickerDialog() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TimePickerDialog);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimePickerDialog.__proto__ || Object.getPrototypeOf(TimePickerDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        display: 'hours',
        displayTime: _this.props.value
      }, _this.handleClockChange = function (value) {
        _this.setState({ displayTime: value });
      }, _this.handleSelect = function (event) {
        _this.props.onSelect(_this.state.displayTime, event);
      }, _this.toggleTimeMode = function () {
        _this.setState({ displayTime: _time2.default.toggleTimeMode(_this.state.displayTime) });
      }, _this.handleHandMoved = function () {
        if (_this.state.display === 'hours') _this.setState({ display: 'minutes' });
      }, _this.switchDisplay = function (event) {
        _this.setState({ display: event.target.id });
      }, _this.actions = [{ label: 'Cancel', className: _this.props.theme.button, onClick: _this.props.onDismiss }, { label: 'Ok', className: _this.props.theme.button, name: _this.props.name, onClick: _this.handleSelect }], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TimePickerDialog, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (!prevProps.active && this.props.active) {
          setTimeout(this.refs.clock.handleCalculateShape, 1000);
        }
      }
    }, {
      key: 'formatHours',
      value: function formatHours() {
        if (this.props.format === 'ampm') {
          return this.state.displayTime.getHours() % 12 || 12;
        } else {
          return this.state.displayTime.getHours();
        }
      }
    }, {
      key: 'renderAMPMLabels',
      value: function renderAMPMLabels() {
        var theme = this.props.theme;

        if (this.props.format === 'ampm') {
          return _react3.default.createElement(
            'div',
            { className: theme.ampm },
            _react3.default.createElement(
              'span',
              { className: theme.am, onClick: this.toggleTimeMode },
              'AM'
            ),
            _react3.default.createElement(
              'span',
              { className: theme.pm, onClick: this.toggleTimeMode },
              'PM'
            )
          );
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var theme = this.props.theme;

        var display = this.state.display + 'Display';
        var format = _time2.default.getTimeMode(this.state.displayTime) + 'Format';
        var className = (0, _classnames2.default)([theme.dialog, theme[display], theme[format]], this.props.className);
        return _react3.default.createElement(
          Dialog,
          {
            actions: this.actions,
            active: this.props.active,
            className: className,
            onEscKeyDown: this.props.onEscKeyDown,
            onOverlayClick: this.props.onOverlayClick
          },
          _react3.default.createElement(
            'header',
            { className: theme.header },
            _react3.default.createElement(
              'span',
              { id: 'hours', className: theme.hours, onClick: this.switchDisplay },
              ('0' + this.formatHours()).slice(-2)
            ),
            _react3.default.createElement(
              'span',
              { className: theme.separator },
              ':'
            ),
            _react3.default.createElement(
              'span',
              { id: 'minutes', className: theme.minutes, onClick: this.switchDisplay },
              ('0' + this.state.displayTime.getMinutes()).slice(-2)
            ),
            this.renderAMPMLabels()
          ),
          _react3.default.createElement(_Clock2.default, {
            ref: 'clock',
            display: this.state.display,
            format: this.props.format,
            onChange: this.handleClockChange,
            onHandMoved: this.handleHandMoved,
            theme: this.props.theme,
            time: this.state.displayTime
          })
        );
      }
    }]);

    return TimePickerDialog;
  }(_react2.Component), _class.propTypes = {
    active: _react2.PropTypes.bool,
    className: _react2.PropTypes.string,
    format: _react2.PropTypes.oneOf(['24hr', 'ampm']),
    name: _react2.PropTypes.string,
    onDismiss: _react2.PropTypes.func,
    onEscKeyDown: _react2.PropTypes.func,
    onOverlayClick: _react2.PropTypes.func,
    onSelect: _react2.PropTypes.func,
    theme: _react2.PropTypes.shape({
      am: _react2.PropTypes.string,
      amFormat: _react2.PropTypes.string,
      ampm: _react2.PropTypes.string,
      button: _react2.PropTypes.string,
      dialog: _react2.PropTypes.string,
      header: _react2.PropTypes.string,
      hours: _react2.PropTypes.string,
      hoursDisplay: _react2.PropTypes.string,
      minutes: _react2.PropTypes.string,
      minutesDisplay: _react2.PropTypes.string,
      pm: _react2.PropTypes.string,
      pmFormat: _react2.PropTypes.string,
      separator: _react2.PropTypes.string
    }),
    value: _react2.PropTypes.object
  }, _class.defaultProps = {
    active: false,
    format: '24hr',
    value: new Date()
  }, _temp2));

  return TimePickerDialog;
};

exports.default = factory;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePicker = undefined;

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _TimePicker = require('./TimePicker');

var _TimePickerDialog = require('./TimePickerDialog');

var _TimePickerDialog2 = _interopRequireDefault(_TimePickerDialog);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickerDialog = (0, _TimePickerDialog2.default)(_dialog2.default);
var ThemedTimePicker = (0, _reactCssThemr.themr)(_ComponentIdentifiers.TIME_PICKER, _theme2.default)((0, _TimePicker.timePickerFactory)(TimePickerDialog, _input2.default));
exports.default = ThemedTimePicker;
exports.TimePicker = ThemedTimePicker;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _progressbar = require('../progressbar');

var _input = require('../input');

var _Slider = require('./Slider');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedSlider = (0, _reactCssThemr.themr)(_ComponentIdentifiers.SLIDER, _theme2.default)((0, _Slider.sliderFactory)(_progressbar.ProgressBar, _input.Input));
exports.default = ThemedSlider;
exports.Slider = ThemedSlider;
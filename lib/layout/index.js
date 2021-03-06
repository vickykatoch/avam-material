'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = exports.NavDrawer = exports.Panel = exports.Layout = undefined;

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _Layout = require('./Layout');

var _Panel = require('./Panel');

var _NavDrawer = require('./NavDrawer');

var _Sidebar = require('./Sidebar');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedLayout = (0, _reactCssThemr.themr)(_ComponentIdentifiers.LAYOUT, _theme2.default)(_Layout.Layout);
var ThemedPanel = (0, _reactCssThemr.themr)(_ComponentIdentifiers.LAYOUT, _theme2.default)(_Panel.Panel);
var ThemedNavDrawer = (0, _reactCssThemr.themr)(_ComponentIdentifiers.LAYOUT, _theme2.default)(_NavDrawer.NavDrawer);
var ThemedSidebar = (0, _reactCssThemr.themr)(_ComponentIdentifiers.LAYOUT, _theme2.default)(_Sidebar.Sidebar);

exports.Layout = ThemedLayout;
exports.Panel = ThemedPanel;
exports.NavDrawer = ThemedNavDrawer;
exports.Sidebar = ThemedSidebar;
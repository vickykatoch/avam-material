'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = undefined;

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _Tabs = require('./Tabs');

var _TabContent = require('./TabContent');

var _Tab = require('./Tab');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyTheme = function applyTheme(Component) {
  return (0, _reactCssThemr.themr)(_ComponentIdentifiers.TABS, _theme2.default)(Component);
};
var ThemedTabContent = applyTheme(_TabContent.TabContent);
var ThemedTab = applyTheme(_Tab.Tab);
var ThemedTabs = applyTheme((0, _Tabs.tabsFactory)(ThemedTab, ThemedTabContent));

exports.Tab = ThemedTab;
exports.Tabs = ThemedTabs;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tabs = exports.tabsFactory = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _ComponentIdentifiers = require('../ComponentIdentifiers');

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Tabs: {
        displayName: 'Tabs',
        isInFunction: true
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/tabs/Tabs.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/tabs/Tabs.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}

var factory = function factory(Tab, TabContent) {
    var _class, _temp2;

    var Tabs = _wrapComponent('Tabs')((_temp2 = _class = function (_Component) {
        _inherits(Tabs, _Component);

        function Tabs() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, Tabs);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                pointer: {}
            }, _this.handleHeaderClick = function (event) {
                var idx = parseInt(event.currentTarget.id);
                if (_this.props.onChange) _this.props.onChange(idx);
            }, _this.handleResize = function () {
                if (!_this.props.fixed) {
                    return;
                }

                if (_this.resizeTimeout) {
                    clearTimeout(_this.resizeTimeout);
                }
                _this.resizeTimeout = setTimeout(_this.handleResizeEnd, 50);
            }, _this.handleResizeEnd = function () {
                _this.updatePointer(_this.props.index);
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Tabs, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                !this.props.disableAnimatedBottomBorder && this.updatePointer(this.props.index);
                window.addEventListener('resize', this.handleResize);
                this.handleResize();
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                !this.props.disableAnimatedBottomBorder && this.updatePointer(nextProps.index);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                window.removeEventListener('resize', this.handleResize);
                clearTimeout(this.resizeTimeout);
                clearTimeout(this.pointerTimeout);
            }
        }, {
            key: 'parseChildren',
            value: function parseChildren() {
                var _this2 = this;

                var headers = [];
                var contents = [];

                _react3.default.Children.forEach(this.props.children, function (item) {
                    if (item.type === Tab) {
                        headers.push(item);
                        if (item.props.children) {
                            contents.push(_react3.default.createElement(TabContent, { children: item.props.children, theme: _this2.props.theme }));
                        }
                    } else if (item.type === TabContent) {
                        contents.push(item);
                    }
                });

                return { headers: headers, contents: contents };
            }
        }, {
            key: 'updatePointer',
            value: function updatePointer(idx) {
                var _this3 = this;

                clearTimeout(this.pointerTimeout);
                this.pointerTimeout = setTimeout(function () {
                    var startPoint = _this3.refs.tabs.getBoundingClientRect().left;
                    var label = _this3.refs.navigation.children[idx].getBoundingClientRect();
                    _this3.setState({
                        pointer: {
                            top: _this3.refs.navigation.getBoundingClientRect().height + 'px',
                            left: label.left - startPoint + 'px',
                            width: label.width + 'px'
                        }
                    });
                }, 20);
            }
        }, {
            key: 'renderHeaders',
            value: function renderHeaders(headers) {
                var _this4 = this;

                return headers.map(function (item, idx) {
                    return _react3.default.cloneElement(item, {
                        id: idx,
                        key: idx,
                        theme: _this4.props.theme,
                        active: _this4.props.index === idx,
                        onClick: function onClick(event) {
                            _this4.handleHeaderClick(event);
                            item.props.onClick && item.props.onClick(event);
                        }
                    });
                });
            }
        }, {
            key: 'renderContents',
            value: function renderContents(contents) {
                var _this5 = this;

                var contentElements = contents.map(function (item, idx) {
                    return _react3.default.cloneElement(item, {
                        key: idx,
                        theme: _this5.props.theme,
                        active: _this5.props.index === idx,
                        hidden: _this5.props.index !== idx && _this5.props.hideMode === 'display',
                        tabIndex: idx
                    });
                });

                if (this.props.hideMode === 'display') {
                    return contentElements;
                }

                return contentElements.filter(function (item, idx) {
                    return idx === _this5.props.index;
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _classnames;

                var _props = this.props;
                var className = _props.className;
                var theme = _props.theme;
                var fixed = _props.fixed;
                var inverse = _props.inverse;

                var _parseChildren = this.parseChildren();

                var headers = _parseChildren.headers;
                var contents = _parseChildren.contents;

                var classes = (0, _classnames3.default)(theme.tabs, className, (_classnames = {}, _defineProperty(_classnames, theme.fixed, fixed), _defineProperty(_classnames, theme.inverse, inverse), _classnames));
                return _react3.default.createElement(
                    'div',
                    { ref: 'tabs', 'data-react-toolbox': 'tabs', className: classes },
                    _react3.default.createElement(
                        'nav',
                        { className: theme.navigation, ref: 'navigation' },
                        this.renderHeaders(headers)
                    ),
                    _react3.default.createElement('span', { className: theme.pointer, style: this.state.pointer }),
                    this.renderContents(contents)
                );
            }
        }]);

        return Tabs;
    }(_react2.Component), _class.propTypes = {
        children: _react2.PropTypes.node,
        className: _react2.PropTypes.string,
        disableAnimatedBottomBorder: _react2.PropTypes.bool,
        fixed: _react2.PropTypes.bool,
        hideMode: _react2.PropTypes.oneOf(['display', 'unmounted']),
        index: _react2.PropTypes.number,
        inverse: _react2.PropTypes.bool,
        onChange: _react2.PropTypes.func,
        theme: _react2.PropTypes.shape({
            fixed: _react2.PropTypes.string,
            inverse: _react2.PropTypes.string,
            navigation: _react2.PropTypes.string,
            pointer: _react2.PropTypes.string,
            tabs: _react2.PropTypes.string
        })
    }, _class.defaultProps = {
        index: 0,
        fixed: false,
        inverse: false,
        hideMode: 'unmounted'
    }, _temp2));

    return Tabs;
};

var Tabs = factory(_Tab2.default, _TabContent2.default);
exports.default = (0, _reactCssThemr.themr)(_ComponentIdentifiers.TABS)(Tabs);
exports.tabsFactory = factory;
exports.Tabs = Tabs;
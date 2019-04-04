"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../prop-types/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultFunc = function defaultFunc() {};

var AtSearchBar = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtSearchBar, _AtComponent);

  function AtSearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSearchBar.__proto__ || Object.getPrototypeOf(AtSearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "value", "focus", "disabled", "maxlength", "placeholder", "actionName", "isFocus", "__fn_onFocus", "__fn_onBlur", "__fn_onChange", "__fn_onConfirm", "__fn_onActionClick", "fixed", "showActionButton", "className", "customStyle"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSearchBar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtSearchBar.prototype.__proto__ || Object.getPrototypeOf(AtSearchBar.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isFocus: props.focus
      };
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        isFocus: true
      });
      this.__triggerPropsFn("onFocus", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        isFocus: false
      });
      this.__triggerPropsFn("onBlur", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.__triggerPropsFn("onChange", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleClear",
    value: function handleClear() {
      this.__triggerPropsFn("onChange", [null].concat([''].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      this.__triggerPropsFn("onConfirm", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleActionClick",
    value: function handleActionClick() {
      this.__triggerPropsFn("onActionClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          value = _props.value,
          placeholder = _props.placeholder,
          maxlength = _props.maxlength,
          fixed = _props.fixed,
          focus = _props.focus,
          disabled = _props.disabled,
          showActionButton = _props.showActionButton,
          actionName = _props.actionName,
          className = _props.className,
          customStyle = _props.customStyle;
      var isFocus = this.__state.isFocus;


      var placeholderStyle = {};
      var actionStyle = {};
      if (isFocus || !isFocus && value) {
        placeholderStyle.width = (placeholder.length + 2.5) * 14 + "px";
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
      } else if (!isFocus && !value) {
        placeholderStyle.width = '100%';
        actionStyle.opacity = 0;
        actionStyle.marginRight = "-" + ((actionName.length + 1) * 14 + 7) + "px";
      }
      if (showActionButton) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
      }
      var anonymousState__temp = (0, _index4.default)({
        'at-search-bar': true,
        'at-search-bar--fixed': fixed
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var anonymousState__temp3 = (0, _index.internal_inline_style)(placeholderStyle);
      var anonymousState__temp4 = { fontSize: '15px' };
      var anonymousState__temp5 = (0, _index.internal_inline_style)(value.length ? 'visibility: hidden;' : 'visibility: visible;');
      var anonymousState__temp6 = (0, _index.internal_inline_style)(value.length ? 'display: flex;' : 'display: none;');
      var anonymousState__temp7 = { fontSize: '15px' };
      var anonymousState__temp8 = (0, _index.internal_inline_style)(actionStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        value: value,
        focus: focus,
        disabled: disabled,
        maxlength: maxlength,
        placeholder: placeholder,
        actionName: actionName
      });
      return this.__state;
    }
  }]);

  return AtSearchBar;
}(_component2.default), _class.properties = {
  "__fn_onFocus": {
    "type": null,
    "value": null
  },
  "__fn_onBlur": {
    "type": null,
    "value": null
  },
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "__fn_onConfirm": {
    "type": null,
    "value": null
  },
  "__fn_onActionClick": {
    "type": null,
    "value": null
  },
  "value": {
    "type": null,
    "value": null
  },
  "placeholder": {
    "type": null,
    "value": null
  },
  "maxlength": {
    "type": null,
    "value": null
  },
  "fixed": {
    "type": null,
    "value": null
  },
  "focus": {
    "type": null,
    "value": null
  },
  "disabled": {
    "type": null,
    "value": null
  },
  "showActionButton": {
    "type": null,
    "value": null
  },
  "actionName": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "customStyle": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleChange", "handleFocus", "handleBlur", "handleConfirm", "handleClear", "handleActionClick"], _class.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxlength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc,
  onActionClick: defaultFunc
}, _class.propTypes = {
  value: _index6.default.string,
  placeholder: _index6.default.string,
  maxlength: _index6.default.number,
  fixed: _index6.default.bool,
  focus: _index6.default.bool,
  disabled: _index6.default.bool,
  showActionButton: _index6.default.bool,
  actionName: _index6.default.string,
  onChange: _index6.default.func,
  onFocus: _index6.default.func,
  onBlur: _index6.default.func,
  onConfirm: _index6.default.func,
  onActionClick: _index6.default.func
}, _temp2);
exports.default = AtSearchBar;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtSearchBar));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtIndexes = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtIndexes, _AtComponent);

  function AtIndexes() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtIndexes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtIndexes.__proto__ || Object.getPrototypeOf(AtIndexes)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "list", "animation", "topKey", "targetView", "scrollTop", "__fn_onClick", "isShowToast", "isVibrate", "className", "customStyle", "children"], _this.getListRef = function (node) {
      return _this.listRef = node;
    }, _this.getIndexesRef = function (node) {
      return _this.indexesRef = node;
    }, _this.getMenuRef = function (node) {
      return _this.menuRef = node;
    }, _this.$$refs = [{
      type: "dom",
      id: "DwLRo",
      refName: "",
      fn: _this.getIndexesRef
    }, {
      type: "dom",
      id: "LSbnd",
      refName: "",
      fn: _this.getMenuRef
    }, {
      type: "dom",
      id: "TGEfT",
      refName: "",
      fn: _this.getListRef
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtIndexes, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtIndexes.prototype.__proto__ || Object.getPrototypeOf(AtIndexes.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        targetView: '',
        scrollTop: 0
        // 右侧导航高度
      };this.menuHeight = 0;
      // 右侧导航距离顶部高度
      this.startTop = 0;
      this.itemHeight = 0;
      this.currentIndex = -1;
      this._scrollTop = 0;
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.__triggerPropsFn("onClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      e.stopPropagation();
      e.preventDefault();
      var list = this.props.list;

      var pageY = e.touches[0].pageY;
      var env = _index2.default.getEnv();
      if (env === _index2.default.ENV_TYPE.WEB) {
        pageY = e.touches[0].clientY;
      }
      var index = Math.floor((pageY - this.startTop) / this.itemHeight);
      if (index >= 0 && index <= list.length && this.currentIndex !== index) {
        this.currentIndex = index;
        var touchView = 'at-indexes__top';
        if (index > 0) {
          touchView = "at-indexes__list-" + list[index - 1].key;
        }
        this.jumpTarget(touchView, index);
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      this.currentIndex = -1;
    }
  }, {
    key: "jumpTarget",
    value: function jumpTarget(targetView, i) {
      var _props = this.props,
          topKey = _props.topKey,
          list = _props.list;

      var env = _index2.default.getEnv();
      if (env === _index2.default.ENV_TYPE.WEAPP) {
        // 小程序环境
        this.setState({
          targetView: targetView
        });
      } else if (env === _index2.default.ENV_TYPE.WEB) {
        // web环境
        var bodyOffsetTop = this.indexesRef.vnode.dom.getBoundingClientRect().top;
        var targetOffsetTop = this.listRef.vnode.dom.childNodes[i].getBoundingClientRect().top;
        var targetScrollTop = this._scrollTop + targetOffsetTop - bodyOffsetTop;

        this.setState({
          scrollTop: targetScrollTop
        });
      }
      if (this.props.isShowToast) {
        _index2.default.showToast({
          title: i === 0 ? topKey : list[i - 1].key,
          icon: 'none',
          duration: 2000
        });
      }
      if (this.props.isVibrate) {
        _index2.default.vibrateShort();
      }
    }
  }, {
    key: "initData",
    value: function initData() {
      var _this2 = this;

      var env = _index2.default.getEnv();
      setTimeout(function () {
        if (env === _index2.default.ENV_TYPE.WEAPP) {
          _this2.menuRef.boundingClientRect(function (rect) {
            _this2.menuHeight = rect.height;
            _this2.startTop = rect.top;
            _this2.itemHeight = Math.floor(_this2.menuHeight / (_this2.props.list.length + 1));
          }).exec();
        } else if (env === _index2.default.ENV_TYPE.WEB) {
          _this2.menuHeight = _this2.menuRef.vnode.dom.getBoundingClientRect().height;
          _this2.startTop = _this2.menuRef.vnode.dom.getBoundingClientRect().top;
          _this2.itemHeight = Math.floor(_this2.menuHeight / (_this2.props.list.length + 1));
        }
      }, 1000);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.list.length !== this.props.list.length) {
        this.initData();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initData();
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(ev) {
      var scrollTop = ev.detail.scrollTop;

      this._scrollTop = scrollTop;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props2 = this.__props,
          className = _props2.className,
          customStyle = _props2.customStyle,
          animation = _props2.animation,
          topKey = _props2.topKey,
          list = _props2.list;

      var anonymousState__temp = (0, _index6.default)({
        'at-indexes': true
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        list: list,
        animation: animation,
        topKey: topKey
      });
      return this.__state;
    }
  }]);

  return AtIndexes;
}(_component2.default), _class.properties = {
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "list": {
    "type": null,
    "value": null
  },
  "topKey": {
    "type": null,
    "value": null
  },
  "isShowToast": {
    "type": null,
    "value": null
  },
  "isVibrate": {
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
  },
  "animation": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleTouchMove", "handleTouchEnd", "jumpTarget", "handleScroll", "handleClick"], _class.defaultProps = {
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: [],
  onClick: function onClick() {}
}, _class.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  animation: _index4.default.bool,
  isVibrate: _index4.default.bool,
  isShowToast: _index4.default.bool,
  topKey: _index4.default.string,
  list: _index4.default.array,
  onClick: _index4.default.func
}, _temp2);
exports.default = AtIndexes;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtIndexes));
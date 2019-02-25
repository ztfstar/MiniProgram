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

var _utils = require("../../common/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _utils.initTestEnv)();
var ENV = _index2.default.getEnv();

var AtIndexes = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtIndexes, _AtComponent);

  function AtIndexes() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtIndexes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtIndexes.__proto__ || Object.getPrototypeOf(AtIndexes)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "list", "rootCls", "toastStyle", "_isShowToast", "_tipText", "listId", "animation", "_scrollTop", "_scrollIntoView", "topKey", "__fn_onClick", "isShowToast", "isVibrate", "className", "customStyle", "children"], _this.handleClick = function () {
      for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        arg[_key2] = arguments[_key2];
      }

      return _this.__triggerPropsFn("onClick", [null].concat([].concat(arg)));
    }, _this.handleTouchMove = function (event) {
      event.stopPropagation();
      event.preventDefault();

      var list = _this.props.list;

      var pageY = event.touches[0].pageY;
      var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);

      if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
        _this.currentIndex = index;
        var key = index > 0 ? list[index - 1].key : 'top';
        var touchView = "at-indexes__list-" + key;
        _this.jumpTarget(touchView, index);
      }
    }, _this.handleTouchEnd = function () {
      _this.currentIndex = -1;
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtIndexes, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtIndexes.prototype.__proto__ || Object.getPrototypeOf(AtIndexes.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        _scrollIntoView: '',
        _scrollTop: 0,
        _tipText: '',
        _isShowToast: false
        // 右侧导航高度
      };this.menuHeight = 0;
      // 右侧导航距离顶部高度
      this.startTop = 0;
      // 右侧导航元素高度
      this.itemHeight = 0;
      // 当前索引
      this.currentIndex = -1;
      this.listId = (0, _utils.isTest)() ? 'indexes-list-AOTU2018' : "list-" + (0, _utils.uuid)();
    }
  }, {
    key: "jumpTarget",
    value: function jumpTarget(_scrollIntoView, idx) {
      var _this2 = this;

      var _props = this.props,
          topKey = _props.topKey,
          list = _props.list;

      var _tipText = idx === 0 ? topKey : list[idx - 1].key;

      if (ENV === _index2.default.ENV_TYPE.WEB) {
        (0, _utils.delayQuerySelector)(this, '.at-indexes', 0).then(function (rect) {
          var targetOffsetTop = _this2.listRef.childNodes[idx].offsetTop;
          var _scrollTop = targetOffsetTop - rect[0].top;
          _this2.updateState({
            _scrollTop: _scrollTop,
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText
          });
        });
        return;
      }

      this.updateState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText
      });
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      var _props2 = this.props,
          isShowToast = _props2.isShowToast,
          isVibrate = _props2.isVibrate;
      var _scrollIntoView = state._scrollIntoView,
          _tipText = state._tipText,
          _scrollTop = state._scrollTop;


      this.setState({
        _scrollIntoView: _scrollIntoView,
        _tipText: _tipText,
        _scrollTop: _scrollTop,
        _isShowToast: isShowToast
      });
      if (isVibrate) {
        _index2.default.vibrateShort();
      }
    }
  }, {
    key: "initData",
    value: function initData() {
      var _this3 = this;

      (0, _utils.delayQuerySelector)(this, '.at-indexes__menu').then(function (rect) {
        var len = _this3.props.list.length;
        _this3.menuHeight = rect[0].height;
        _this3.startTop = rect[0].top;
        _this3.itemHeight = Math.floor(_this3.menuHeight / (len + 1));
      });
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
      if (ENV === _index2.default.ENV_TYPE.WEB) {
        this.listRef = document.getElementById(this.listId);
      }
      this.initData();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var listId = this.listId;
      var _props3 = this.__props,
          className = _props3.className,
          customStyle = _props3.customStyle,
          animation = _props3.animation,
          topKey = _props3.topKey,
          list = _props3.list;
      var _state = this.__state,
          _scrollTop = _state._scrollTop,
          _scrollIntoView = _state._scrollIntoView,
          _tipText = _state._tipText,
          _isShowToast = _state._isShowToast;


      var toastStyle = { minWidth: _index2.default.pxTransform(100) };
      var rootCls = (0, _index6.default)('at-indexes', className);

      var anonymousState__temp = (0, _index.internal_inline_style)(customStyle);
      var loopArray0 = list.map(function (dataList, i) {
        dataList = {
          $original: (0, _index.internal_get_original)(dataList)
        };

        var key = dataList.$original.key;

        var targetView = "at-indexes__list-" + key;
        return {
          key: key,
          targetView: targetView,
          $original: dataList.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        list: list,
        rootCls: rootCls,
        toastStyle: toastStyle,
        listId: listId,
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
}, _class.$$events = ["jumpTarget", "handleClick", "handleTouchMove", "handleTouchEnd"], _temp2);


AtIndexes.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  animation: _index4.default.bool,
  isVibrate: _index4.default.bool,
  isShowToast: _index4.default.bool,
  topKey: _index4.default.string,
  list: _index4.default.array,
  onClick: _index4.default.func
};

AtIndexes.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: [],
  onClick: function onClick() {}
};

exports.default = AtIndexes;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtIndexes));
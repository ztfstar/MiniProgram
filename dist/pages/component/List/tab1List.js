"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import "./tab1.scss";
var tab1Data = {
  "itemList": [{
    "title": "2018\u5E74\u975E\u4E0A\u6D77\u751F\u6E90\u5E94\u5C4A\u666E\u901A\u9AD8\u6821\u6BD5\u4E1A\u751F\u8FDB\u6CAA\u5C31\u4E1A\u7533\u529E\u672C\u5E02\u6237\u7C4D\u529E\u6CD5\u301072\u5206\u3011",
    "note": "\u5B98\u65B9\u53D1\u5E03",
    "id": 0
  }, {
    "title": "\u5E94\u5C4A\u751F\u843D\u6237\u7EC6\u5219  ",
    "note": "\u5B98\u65B9\u53D1\u5E03",
    "id": 1
  }]
};

//
var Tab1List = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Tab1List, _BaseComponent);

  function Tab1List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab1List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab1List.__proto__ || Object.getPrototypeOf(Tab1List)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["tab1Data", "loopArray0"], _this._onClick = function (_ref2) {
      var item = _ref2.item;

      var id = item.id;
      _index2.default.navigateTo({ url: "/pages/component/article/article?id=" + id });
    }, _this.anonymousFunc0Array = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab1List, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Tab1List.prototype.__proto__ || Object.getPrototypeOf(Tab1List.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      var loopArray0 = tab1Data.itemList.map(function (item, __index0) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        _this2.anonymousFunc0Array[__index0] = function () {
          return _this2._onClick({ item: item.$original });
        };

        return {
          $original: item.$original
        };
      }
      //      <AtListItem
      //         key={item.id}
      //         title={item.title}
      //         note={item.note}
      //         extraText='详细信息'
      //         arrow='right'
      //         onClick={()=>this._onClick({item})}//箭头函数里的参数为什么取不到item的值
      //         thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
      //     />
      // </View>
      );
      Object.assign(this.__state, {
        tab1Data: tab1Data,
        loopArray0: loopArray0
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(__index0, e) {
      ;
      this.anonymousFunc0Array[__index0] && this.anonymousFunc0Array[__index0](e);
    }
  }]);

  return Tab1List;
}(_index.Component), _class.properties = {}, _class.$$events = ["anonymousFunc0"], _temp2);
exports.default = Tab1List;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Tab1List));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var discovery = (_temp2 = _class = function (_BaseComponent) {
  _inherits(discovery, _BaseComponent);

  function discovery() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, discovery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = discovery.__proto__ || Object.getPrototypeOf(discovery)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.tobegin = function (userInfo) {
      console.log(userInfo);
      //Taro.authorize(params).then(...)
      _index2.default.setStorage({ key: userInfo.detail.userInfo.nickName, data: userInfo.detail.rawData });
      _index2.default.getStorage({ key: userInfo.detail.userInfo.nickName }).then(function (res) {
        return console.log(res);
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(discovery, [{
    key: "_constructor",
    value: function _constructor() {
      _get(discovery.prototype.__proto__ || Object.getPrototypeOf(discovery.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      this.anonymousFunc0 = function () {
        _index2.default.login({
          success: function success(res) {
            console.log(res);
            if (res.code) {
              //发起网络请求
              _index2.default.request({
                url: 'http://127.0.0.1:3000/login',
                data: {
                  js_code: res.code,
                  appid: 'wxe70f7da720941f21',
                  secret: 'f4c9b6d7b1599ab564ef3af44ac0e345',
                  grant_type: 'authorization_code'
                }
              });
            } else {
              console.log('登录失败');
            }
          },
          fail: function fail() {
            console.log("启用login函数，失败！");
          },
          complete: function complete() {
            console.log("已启用login函数");
          }
        });
      };
      // let s= '011K8KAT15IWd51pTXAT1OmGAT1K8KAL';
      // let s= '021sqVf41znkWS16ZEe41jlOf41sqVfS'


      Object.assign(this.__state, {});
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return discovery;
}(_index.Component), _class.properties = {}, _class.$$events = ["tobegin", "anonymousFunc0"], _temp2);
exports.default = discovery;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(discovery, true));
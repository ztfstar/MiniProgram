"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagePicker = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PagePicker, _BaseComponent);

  function PagePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PagePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PagePicker.__proto__ || Object.getPrototypeOf(PagePicker)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["honor", "honorChecked", "learning", "learningChecked"], _this.onChange1 = function (e) {
      _this.setState({
        honorChecked: _this.state.honor[e.detail.value]
      });
    }, _this.onChange2 = function (e) {
      console.log(e);
      _this.setState({
        //learningChecked: this.state.learning[0][e.detail.value[0]]+'&'+this.state.learning[1][e.detail.value[1]],
        learningChecked: (e.detail.value[0] == 0 ? '全国性' : '地方赛区') + ' & ' + _this.state.learning[1][e.detail.value[1]]
      });
    }, _this.bindMultiPickerColumnChange = function (e) {
      //console.log(e.detail)//column 表示的是第几列，value是某一列的第几个值，表示下标
      // switch(e.detail.column){
      //   case 0:
      //   switch(e.detail.value){
      //     case 0:
      //     //console.log(e.detail.value)//column 表示的是第几列，value是某一列的第几个值，表示下标
      //     this.setState({
      //       learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（10分）','二等奖（8分）','三等奖（6分）']],
      //     })
      //     case 1:
      //     //console.log(e.detail.value)//column 表示的是第几列，value是某一列的第几个值，表示下标
      //     this.setState({
      //       learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（5分）','二等奖（3分）','三等奖（1分）']],
      //     })
      //   }
      //   break
      if (e.detail.column === 0) {
        if (e.detail.value === 0) {
          _this.setState({
            learning: [['上述全国性比赛奖项', '上述全国性比赛地方赛区'], ['一等奖（10分）', '二等奖（8分）', '三等奖（6分）']]
          });
        } else {
          _this.setState({
            learning: [['上述全国性比赛奖项', '上述全国性比赛地方赛区'], ['一等奖（5分）', '二等奖（3分）', '三等奖（1分）']]
          });
        }
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PagePicker, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PagePicker.prototype.__proto__ || Object.getPrototypeOf(PagePicker.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        honor: ['国家级（10分）', '省(自治区、直辖市)级（5分）', '学校级(每次1分，不超过2分)（1分）'],
        honorChecked: '国家级（10分）',
        learning: [['上述全国性比赛奖项', '上述全国性比赛地方赛区'], ['一等奖（10分）', '二等奖（8分）', '三等奖（6分）']],
        learningChecked: ''
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return PagePicker;
}(_index.Component), _class.properties = {}, _class.$$events = ["onChange1", "onChange2", "bindMultiPickerColumnChange"], _temp2);
exports.default = PagePicker;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PagePicker));
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PagePicker.__proto__ || Object.getPrototypeOf(PagePicker)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["honor", "honorChecked", "learning", "learningChecked", "itemPick1", "itemPick2", "getItemPick"], _this.onChange = function (e) {
      if (e.currentTarget.id == 'selector') {
        if (e.detail.value == 0) {
          _this.setState({
            itemPick1: 10
          });
        } else if (e.detail.value == 1) {
          _this.setState({
            itemPick1: 5
          });
        } else if (e.detail.value == 2) {
          _this.setState({
            itemPick1: 2
          });
        } else {
          _this.setState({
            itemPick1: 1
          });
        }
        _this.setState({
          honorChecked: _this.state.honor[e.detail.value]
        });
      } else {
        if (e.detail.value.toString() == [0, 0].toString()) {
          _this.setState({
            itemPick2: 10
          });
        } else if (e.detail.value.toString() == [0, 1].toString()) {
          _this.setState({
            itemPick2: 8
          });
        } else if (e.detail.value.toString() == [0, 2].toString()) {
          _this.setState({
            itemPick2: 6
          });
        } else if (e.detail.value.toString() == [1, 0].toString()) {
          _this.setState({
            itemPick2: 5
          });
        } else if (e.detail.value.toString() == [1, 1].toString()) {
          _this.setState({
            itemPick2: 3
          });
        } else {
          _this.setState({
            itemPick2: 1
          });
        }
        _this.setState({
          learningChecked: (e.detail.value[0] == 0 ? '全国性' : '地方赛区') + ' & ' + _this.state.learning[1][e.detail.value[1]]
        });
      }
      setTimeout(function () {
        _this.props.getItemPick(_this.state.itemPick1, _this.state.itemPick2);
      }, 500);
    }, _this.onChange2 = function (e) {
      //console.log(e)
      _this.setState({
        //learningChecked: this.state.learning[0][e.detail.value[0]]+'&'+this.state.learning[1][e.detail.value[1]],
        learningChecked: (e.detail.value[0] == 0 ? '全国性' : '地方赛区') + ' & ' + _this.state.learning[1][e.detail.value[1]]
      });
    }, _this.bindMultiPickerColumnChange = function (e) {
      //console.log(e.detail)//column 表示的是第几列，value是某一列的第几个值，表示下标
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
        honor: ['国家级（10分）', '省(自治区、直辖市)级（5分）', '学校级2次（2分）', '学校级1次（1分）'],
        honorChecked: '',
        learning: [['全国性比赛奖项', '全国性比赛地方赛区'], ['一等奖（10分）', '二等奖（8分）', '三等奖（6分）']],
        learningChecked: '',
        itemPick1: 0,
        itemPick2: 0
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // xueli = 0,xuexiao = 0,chengji =0,yingyu =0,jisuanji =0,itemPicker=0,
      // itemPick1=0,itemPick2=0,checkBox1=0,checkBox2=0,checkBox=0;
      // //  prevPage = pages[ pages.length - 2 ];  
      // // console.log(prevPage)
      this.setState({
        itemPick1: 0,
        itemPick2: 0
      });
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
}(_index.Component), _class.properties = {
  "getItemPick": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["onChange", "bindMultiPickerColumnChange"], _temp2);
exports.default = PagePicker;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PagePicker));
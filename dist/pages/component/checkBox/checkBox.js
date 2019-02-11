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

var Index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["checkboxOption", "checkedList"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        checkedList: [5]
      };
      this.checkboxOption = [{
        id: 1,
        value: '5',
        label: '基本要素',
        desc: '用人单位招聘高校毕业生行为符合诚信规范，并与毕业生签订劳动或聘用合同期薇一年及以上的就业协议，劳动派遣方式除外 5分'
      }, {
        id: 2,
        value: '3',
        label: '引进重点领域人才',
        desc: '用人单位录用上海市重点发展领域所需学科毕业生 3分'
      }, {
        id: 3,
        value: '3',
        label: '引进重点领域人才',
        desc: '用人单位录用上海市重点发展领域所需学科中的教育部、上海市、上海市教委重点学科毕业研究生 3分'
      }, {
        id: 4,
        value: '3',
        label: '承担重大项目',
        desc: '用人单位承担国家和上海经济社会发展重大项目且录用的毕业生专业与行业相匹配 3分'
      }, {
        id: 5,
        value: '3',
        label: '承担重大项目',
        desc: '用人单位为远郊地区教育、卫生、农业等社会公益事业单位 3分'
      }, {
        id: 6,
        value: '6',
        label: '自主创业',
        desc: '在校或休学期间创业，企业经营情况良好 5分'
      }];
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      console.log(e);
      this.setState({
        checkedList: [5, '5']
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var checkboxOption = this.checkboxOption;

      Object.assign(this.__state, {
        checkboxOption: checkboxOption
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component), _class.properties = {}, _class.$$events = ["handleChange"], _temp2);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index));
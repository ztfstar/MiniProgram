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

var PageRadio = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PageRadio, _BaseComponent);

  function PageRadio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageRadio.__proto__ || Object.getPrototypeOf(PageRadio)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["educationList", "schoolList", "scoreList", "computerList"], _this.config = {
      navigationBarTitleText: '应届生落户积分计算'
    }, _this.radioChange = function (e) {
      console.log(e);
      // const list = this.state.educationList.map(item => {
      //   item.checked = item.value == e.detail.value
      //   console.log(item,e.detail.value)
      //   return item
      // })
      _this.setState({
        //list,
        selectValue: e.detail.value
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageRadio, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PageRadio.prototype.__proto__ || Object.getPrototypeOf(PageRadio.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        educationList: [{
          value: '27',
          text: '博士、研究生（27分）',
          checked: false
        }, {
          value: '24',
          text: '硕士、研究生（24分）',
          checked: false
        }, {
          value: '21',
          text: '本科生（21分）',
          checked: false
        }],
        schoolList: [{
          value: '15',
          text: '第一类高校及研究生培养单位（15分）',
          checked: false
        }, {
          value: '12',
          text: '第二类高校及研究生培养单位（12分）',
          checked: false
        }, {
          value: '8',
          text: '第三类高校及研究生培养单位（8分）',
          checked: false
        }],
        scoreList: [{
          value: '8',
          text: '一级（成绩排名前25%）（8分）',
          checked: false
        }, {
          value: '6',
          text: '二级（成绩排名前26%-50%）（6分）',
          checked: false
        }, {
          value: '4',
          text: '三级（成绩排名前51%-75%）（4分）',
          checked: false
        }, {
          value: '2',
          text: '四级（成绩排名前76%-100%）（2分）',
          checked: false
        }],
        computerList: [{
          value: '7',
          text: '毕业研究生（7分）',
          checked: false
        }, {
          value: '7',
          text: '计算机高级水平或免予此项要求的专业（7分）',
          checked: false
        }, {
          value: '7',
          text: '文科类专业：计算机中级或省级二级水平（7分）',
          checked: false
        }, {
          value: '6',
          text: '理科类专业：计算机中级或省级二级水平（6分）',
          checked: false
        }, {
          value: '6',
          text: '文科类专业：计算机初级或省级一级水平（6分）',
          checked: false
        }, {
          value: '6',
          text: '四级（成绩排名前76%-100%）（2分）',
          checked: false
        }]
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

  return PageRadio;
}(_index.Component), _class.properties = {}, _class.$$events = ["radioChange"], _temp2);
// import Taro from '@tarojs/taro'
// import { AtRadio }  from 'taro-ui'
// import { View } from '../../../../node_modules/@tarojs/components';
// export default class Index extends Taro.Component {
//   constructor () {
//     super(...arguments)
//     this.state = {
//       value: ''
//     }
//   }
//   handleChange (value) {
//     this.setState({
//       value
//     })
//   }
//   render () {
//     return (
//       <View>
//         <AtRadio
//           options={[
//             { label: '博士、研究生（27分）', value: '27',},
//             { label: '硕士、研究生（24分）', value: '24' },
//             { label: '本科生（21分）', value: '21'}
//           ]}
//           value={this.state.value}
//           onClick={this.handleChange.bind(this)}
//         />
//         <AtRadio
//           options={[
//             { label: '第一类高校及研究生培养单位（15分）', value: '15',},
//             { label: '第一类高校及研究生培养单位（12分）', value: '12' },
//             { label: '第一类高校及研究生培养单位（8分）', value: '8'}
//           ]}
//           value={this.state.value}
//           onClick={this.handleChange.bind(this)}
//         />
//       </View>
//     )
//   }
// }


exports.default = PageRadio;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PageRadio));
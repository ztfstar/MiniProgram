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

var xueli = 0,
    xuexiao = 0,
    chengji = 0,
    yingyu = 0,
    jisuanji = 0,
    itemPicker = 0,
    itemPick1 = 0,
    itemPick2 = 0,
    checkBox1 = 0,
    checkBox2 = 0,
    checkBox = 0;

var PageRadio = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PageRadio, _BaseComponent);

  function PageRadio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageRadio.__proto__ || Object.getPrototypeOf(PageRadio)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "totalScore", "itemPicker", "itemPick1", "itemPick2", "checkBox1", "checkBox2", "selectValues", "educationList", "schoolList", "scoreList", "computerList", "englishList", "researchList", "employerList", "getScore"], _this.config = {
      navigationBarTitleText: '应届生落户积分计算'
    }, _this.radioChange = function (e) {
      switch (e.currentTarget.id) {
        case 'xueli':
          xueli = e.detail.value;
          break;
        case 'xuexiao':
          xuexiao = e.detail.value;
          break;
        case 'chengji':
          chengji = e.detail.value;
          break;
        case 'yingyu':
          yingyu = e.detail.value;
          break;
        case 'jisuanji':
          jisuanji = e.detail.value;
          break;
      }
      _this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      });
      setTimeout(function () {
        _this.props.getScore(_this.state.totalScore);
      }, 500);
    }, _this.getItemPick = function (itemPick1, itemPick2) {
      itemPicker = itemPick1 + itemPick2;
      _this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      });
      setTimeout(function () {
        _this.props.getScore(_this.state.totalScore);
      }, 500);
    }, _this.checkboxChange = function (e) {
      if (e.detail.value.length > 0) {
        console.log(e);
        if (e.currentTarget.id == 'sigcheckbox') {
          // this.setState({
          checkBox1 = e.detail.value.reduce(function (total, num) {
            return Number(total) + Number(num);
          });
          // })
        } else if (e.currentTarget.id == 'mulcheckbox') {
          //this.setState({
          checkBox2 = e.detail.value.reduce(function (total, num) {
            return Number(total) + Number(num);
          });
          //})
        } else {
          //this.setState({
          checkBox2 = 0;
          checkBox1 = 0;
          // })
        }
      } else {
        //都不选中的情况下
        if (e.currentTarget.id == 'sigcheckbox') {
          checkBox1 = 0;
        } else if (e.currentTarget.id == 'mulcheckbox') {
          checkBox2 = 0;
        } else {
          checkBox2 = 0;
          checkBox1 = 0;
        }
      }
      _this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      });
      setTimeout(function () {
        _this.props.getScore(Number(_this.state.totalScore));
      }, 500);
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageRadio, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PageRadio.prototype.__proto__ || Object.getPrototypeOf(PageRadio.prototype), "_constructor", this).apply(this, arguments);
      this.page = (0, _index.getCurrentPages)();

      this.state = {
        //xueli : 0,xuexiao : 0,chengji : 0,yingyu : 0,jisuanji : 0,
        totalScore: 0,
        itemPicker: 0,
        itemPick1: 0,
        itemPick2: 0,
        checkBox1: 0,
        checkBox2: 0,
        selectValues: 0,
        educationList: [{
          value: 27,
          text: '博士、研究生（27分）',
          checked: false
        }, {
          value: 24,
          text: '硕士、研究生（24分）',
          checked: false
        }, {
          value: 21,
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
          text: '其他高校及研究生培养单位（8分）',
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
          text: '艺术类、体育类专业：相关课程合格（6分）',
          checked: false
        }],
        englishList: [{
          value: '8',
          text: '英语六级425分(含)以上、专业英语八级 8分',
          checked: false
        }, {
          value: '7',
          text: '英语六级425分(含)以上、专业英语八级 7分',
          checked: false
        }, {
          value: '7',
          text: '外语类、艺术类、体育类专业外语课程合格 7分',
          checked: false
        }],
        researchList: [{
          value: '5',
          text: '最高学历就读期间获得相应的发明专利（5分）',
          checked: false
        }, {
          value: '5',
          text: '上海高校毕业生参加西部计划服务期满（5分）',
          checked: false
        }, {
          value: '72',
          text: '清华、北大本科毕业生 直接落户',
          checked: false
        }, {
          value: '2',
          text: '最高学历在上海高校就读（2分）',
          checked: false
        }],
        employerList: [{
          value: '5',
          text: '基本要素（5分）',
          checked: false,
          desc: '用人单位招聘高校毕业生行为符合诚信规范，并与毕业生签订劳动或聘用合同期薇一年及以上的就业协议，劳动派遣方式除外'
        }, {
          value: '3',
          text: '引进重点领域人才（上海市重点发展领域所需学科 3分）',
          checked: false,
          desc: '用人单位录用上海市重点发展领域所需学科毕业生'
        }, {
          value: '3',
          text: '引进重点领域人才（3分）',
          checked: false,
          desc: '用人单位录用上海市重点发展领域所需学科中的教育部、上海市、上海市教委重点学科毕业研究生'
        }, {
          value: '3',
          text: '承担重大项目（3分）',
          checked: false,
          desc: '用人单位承担国家和上海经济社会发展重大项目且录用的毕业生专业与行业相匹配'
        }, {
          value: '3',
          text: '承担重大项目（3分）',
          checked: false,
          desc: '用人单位为远郊地区教育、卫生、农业等社会公益事业单位'
        }, {
          value: '5',
          text: '自主创业（5分）',
          checked: false,
          desc: '在校或休学期间创业，企业经营情况良好'
        }]
      };
    }
    /**
      * 生命周期函数--监听页面加载
      */
    // onLoad=(options)=> {
    //   console.log('options',options)
    // }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      xueli = 0, xuexiao = 0, chengji = 0, yingyu = 0, jisuanji = 0, itemPicker = 0, itemPick1 = 0, itemPick2 = 0, checkBox1 = 0, checkBox2 = 0, checkBox = 0;
      //  prevPage = pages[ pages.length - 2 ];  
      // console.log(prevPage)
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this2 = this;

      var pages = (0, _index.getCurrentPages)(); //获取当前页面js里面的pages里的所有信息。
      var currentPage = pages[pages.length - 1];
      if (currentPage.data.schoolObj != null) {
        //学校列表页面返回值
        var schoolList = this.state.schoolList.map(function (item) {
          console.log(currentPage.data.schoolObj.value === undefined);
          if (currentPage.data.schoolObj.value === undefined && item.value === '12') {
            item.checked = true;
            xuexiao = 12;
            return item;
          } else if (currentPage.data.schoolObj.value == item.value) {
            item.checked = true;
            xuexiao = 15;
            return item;
          } else {
            item.checked = false;
            return item;
          }
          // item.checked = currentPage.data.schoolObj.value == item.value
          // return item
        });
        setTimeout(function () {
          _this2.setState({
            schoolList: schoolList
          });
        }, 100);
      }
      this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      });
      setTimeout(function () {
        _this2.props.getScore(_this2.state.totalScore);
      }, 500);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      this.anonymousFunc0 = function () {
        _index2.default.navigateTo({ url: '/pages/component/atIndex/atIndex' });
      };

      var anonymousState__temp = function anonymousState__temp(itemPick1, itemPick2) {
        return _this3.getItemPick(itemPick1, itemPick2);
      };
      //console.log('this.page',this.page)
      //console.log(this.onLoad())


      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return PageRadio;
}(_index.Component), _class.properties = {
  "getScore": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["radioChange", "anonymousFunc0", "checkboxChange"], _temp2);
exports.default = PageRadio;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PageRadio));
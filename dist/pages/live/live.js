"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Text, Image } from '@tarojs/components';
var PageForm = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PageForm, _BaseComponent);

  function PageForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageForm.__proto__ || Object.getPrototypeOf(PageForm)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["isChecked", "educationList", "technologyList", "addScore1List", "safeList", "freshList", "honorList", "wifeList", "fakeList", "fakeChecked", "holdList", "holdChecked", "commitList", "commitChecked", "editableMarry", "score", "isOpened", "isToastOpened", "toastText", "age", "value"], _this.changeAge = function (e) {
      _this.setState({
        age: e.detail.value
      });
      console.log(e);
    }, _this.educationChange = function (e) {
      _this.setState({
        education: e.detail.value
      });
    }, _this.technologyChange = function (e) {
      _this.setState({
        technology: e.detail.value
      });
    }, _this.safeYearChange = function (e) {
      _this.setState({
        safeYear: e.detail.value
      });
    }, _this.addScore1Change = function (e) {
      _this.setState({
        addScore1: e.detail.value
      });
    }, _this.payChange = function (e) {
      console.log(e);
      _this.setState({
        pay: e.detail.value
      });
    }, _this.jobChange = function (e) {
      console.log(e);
      _this.setState({
        job: e.detail.value
      });
    }, _this.safeChange = function (e) {
      _this.setState({
        safe: e.detail.value
      });
    }, _this.commonChange = function (e) {
      _this.setState({
        common: e.detail.value
      });
    }, _this.outerChange = function (e) {
      _this.setState({
        outer: e.detail.value
      });
    }, _this.freshChange = function (e) {
      _this.setState({
        fresh: e.detail.value
      });
    }, _this.honorChange = function (e) {
      // console.log(e)
      _this.setState({
        honor: e.detail.value
      });
    }, _this.isMarryChange = function (e) {
      console.log('是否结婚', e.detail.value);
      if (e.detail.value == 0) {
        //0-没结婚；1-结婚
        _this.setState({
          editableMarry: true
        });
      } else {
        _this.setState({
          editableMarry: false
        });
      }
    }, _this.marryChange = function (e) {
      console.log(_this.state.editableMarry);
      _this.setState({
        marry: e.detail.value
      });
    }, _this.fakeChange = function (e) {
      _this.setState({
        fakeChecked: _this.state.fakeList[e.detail.value]
      });
    }, _this.holdChange = function (e) {
      _this.setState({
        holdChecked: _this.state.holdList[e.detail.value]
      });
    }, _this.commitChange = function (e) {
      _this.setState({
        commitChecked: _this.state.commitList[e.detail.value]
      });
    }, _this.formSubmit = function (e) {
      _this.setState({
        isOpened: true
      });
      var _e$detail$value = e.detail.value,
          addScore1 = _e$detail$value.addScore1,
          age = _e$detail$value.age,
          commit = _e$detail$value.commit,
          common = _e$detail$value.common,
          education = _e$detail$value.education,
          fake = _e$detail$value.fake,
          fresh = _e$detail$value.fresh,
          hold = _e$detail$value.hold,
          honor = _e$detail$value.honor,
          marry = _e$detail$value.marry,
          outer = _e$detail$value.outer,
          pay = _e$detail$value.pay,
          job = _e$detail$value.job,
          safe = _e$detail$value.safe,
          safeYear = _e$detail$value.safeYear,
          technology = _e$detail$value.technology;
      //教育和专业技能二选一
      //console.log('education pre',typeof education,'technology pre',typeof technology)

      education = Number(education);
      technology = Number(technology);
      if (education > technology || education === technology) {
        //console.log('education ing',education,'technology ing',technology,education>technology)
        education = education;
        technology = 0;
      } else {
        education = 0;
        technology = technology;
      }
      console.log('age', age, 'age type', typeof age === "undefined" ? "undefined" : _typeof(age));
      //50-60岁积5分，每减少1岁 增加2分
      age = Number(age);
      if (age >= 56 && age <= 60) {
        age = 5;
      } else if (age == '') {
        _this.setState({
          isToastOpened: true,
          toastText: '请输入年龄'
        });
      } else {
        age = 5 + (56 - age) * 2;
        if (age > 30) {
          age = 30;
        } else {
          age = age;
        }
      }
      // console.log('age',age)
      //缴费年限，每缴费1年加3分
      safeYear = safeYear * 3;
      //每纳税10万元加10分
      pay = Number(pay);
      job = Number(job);
      pay = Math.floor(pay / 10) * 10;
      if (pay > 120) {
        pay = 120;
      }
      //每纳税10万元加10分
      job = Math.floor(job / 10) * 10;
      if (job > 120) {
        job = 120;
      }
      if (pay >= job) {
        pay = pay;
        job = 0;
      } else {
        pay = 0;
        job = job;
      }
      // console.log('pay,job',pay,job)
      //在公共服务领域
      common = Number(common);
      if (common < 5) {
        common = 0;
      } else {
        common = common * 4;
      }
      //远郊地区 面1年加2分
      outer = Number(outer);
      if (outer < 5) {
        outer = 0;
      } else {
        outer = outer * 2;
        if (outer > 20) {
          outer = 20;
        }
      }
      //  配偶为本市户籍
      marry = Number(marry);
      marry = marry * 4;
      if (marry > 40) {
        marry = 40;
      }
      //虚假材料
      fake = Number(fake * -150);
      //拘留
      hold = Number(hold * -50);
      //犯罪
      commit = Number(commit * -150);
      _this.setState({
        score: Number(addScore1) + Number(age) + Number(commit) + Number(common) + Number(education) + Number(fake) + Number(fresh) + Number(hold) + Number(honor) + Number(marry) + Number(outer) + Number(pay) + Number(job) + Number(safe) + Number(safeYear) + Number(technology)
      });
      console.log(e);
    }, _this.handleClose = function () {
      _this.setState({
        isOpened: false
      });
    }, _this.toastClose = function () {
      _this.setState({
        isToastOpened: false
      });
    }, _this.formReset = function (e) {
      console.log(e);
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageForm, [{
    key: "_constructor",


    // config = {
    //   navigationBarTitleText: '上海市居转户积分计算'
    // }
    value: function _constructor() {
      _get(PageForm.prototype.__proto__ || Object.getPrototypeOf(PageForm.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isChecked: false,
        educationList: [{
          value: 0,
          text: '大专（高职）学历以下',
          checked: false
        }, {
          value: 50,
          text: '大专（高职）学历 (50分)',
          checked: false
        }, {
          value: 60,
          text: '大学本科学历 (60分)',
          checked: false
        }, {
          value: 90,
          text: '大学本科学历和学士学位 (90分)',
          checked: false
        }, {
          value: 100,
          text: '硕士研究生学历学位 (100分)',
          checked: false
        }, {
          value: 110,
          text: '博士研究生学历学位 (110分)',
          checked: false
        }],
        technologyList: [{
          value: 15,
          text: '技能类国家职业资格五级 (15分)',
          checked: false
        }, {
          value: 30,
          text: '技能类国家职业资格四级 (30分)',
          checked: false
        }, {
          value: 60,
          text: '技能类国家职业资格三级 (60分)',
          checked: false
        }, {
          value: 100,
          text: '技能类国家职业资格二级或中级职称 (100分)',
          checked: false
        }, {
          value: 140,
          text: '技能类国家职业资格一级或高级职称  (140分)',
          checked: false
        }],
        addScore1List: [{
          value: 120,
          text: '创业人才',
          desc: '须符合由市教委会同相关部门制定的积分具体条件 (120分)'
        }, {
          value: 120,
          text: '创新创业中介服务人才',
          desc: '须符合由市教委会同相关部门制定的积分具体条件 (120分)'
        }, {
          value: 30,
          text: '紧缺急需专业',
          desc: '所学专业属于上海市紧缺急需专业目录，且工作岗位与所学专业一致 (30分)'
        }],
        safeList: [{
          value: 0,
          text: '缴纳社保基数低于平均工资80%',
          desc: '最近4年内累计36个月在上海市缴纳职工社会保险费基数低于上海市上年度职工平均工资80',
          checked: false
        }, {
          value: 25,
          text: '缴纳社保基数高于等于平均工资80%低于1倍',
          desc: '最近4年内累计36个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资80%低于1倍 (25分)',
          checked: false
        }, {
          value: 50,
          text: '最缴纳职工社保基数高于等于平均工资1倍低于2倍',
          desc: '最近4年内累计36个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资1倍低于2倍 (50分)',
          checked: false
        }, {
          value: 100,
          text: '最缴纳职工社保基数高于等于平均工资2倍低于3倍',
          desc: '最近4年内累计36个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资2倍低于3倍 (100分)',
          checked: false
        }, {
          value: 120,
          text: '最缴纳职工社保基数高于等于平均工资3倍',
          desc: '最近3年内累计24个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资3倍 (120分)',
          checked: false
        }],
        freshList: [{
          value: 0,
          text: "否",
          checked: true
        }, {
          value: 10,
          text: "是(10分)",
          checked: false
        }],
        honorList: [{
          value: 0,
          text: "否",
          checked: true
        }, {
          value: 30,
          text: "获得过上海市委办局等市级机关专项性表彰奖励 (30分)",
          checked: false
        }, {
          value: 60,
          text: "获得过上海市委办局等市级机关综合性表彰奖励 (60分)",
          checked: false
        }, {
          value: 110,
          text: "获得过省部级及以上政府表彰奖励 (110分)",
          checked: false
        }],
        wifeList: [{
          value: 0,
          text: "否",
          checked: true
        }, {
          value: 1,
          text: "配偶是上海户口，且结婚已满",
          checked: false
        }],
        fakeList: ['无', '一次', '两次'],
        fakeChecked: '无',
        holdList: ['无', '一次', '两次'],
        holdChecked: '无',
        commitList: ['无', '一次', '两次'],
        commitChecked: '无',
        editableMarry: true,
        score: '',
        isOpened: false,
        isToastOpened: false,
        toastText: ''
      };
      // 您的年龄
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        score: 0
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return PageForm;
}(_index.Component), _class.properties = {}, _class.$$events = ["formSubmit", "formReset", "changeAge", "educationChange", "technologyChange", "safeYearChange", "addScore1Change", "payChange", "jobChange", "safeChange", "commonChange", "outerChange", "freshChange", "honorChange", "isMarryChange", "marryChange", "fakeChange", "holdChange", "commitChange", "toastClose", "handleClose"], _temp2);
exports.default = PageForm;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PageForm, true));
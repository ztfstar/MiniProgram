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

var zhuanye = {
  "itemList": [{
    "id": "030500",
    "name": "\u9A6C\u514B\u601D\u4E3B\u4E49\u7406\u8BBA"
  }, {
    "id": "030501",
    "name": "\u9A6C\u514B\u601D\u4E3B\u4E49\u57FA\u672C\u539F\u7406"
  }, {
    "id": "030502",
    "name": "\u9A6C\u514B\u601D\u4E3B\u4E49\u53D1\u5C55\u53F2"
  }, {
    "id": "030503",
    "name": "\u9A6C\u514B\u601D\u4E3B\u4E49\u4E2D\u56FD\u5316\u7814\u7A76"
  }, {
    "id": "030504",
    "name": " \u56FD\u5916\u9A6C\u514B\u601D\u4E3B\u4E49\u7814\u7A76"
  }, {
    "id": "030505",
    "name": "\u601D\u60F3\u653F\u6CBB\u6559\u8093"
  }, {
    "id": "035100",
    "name": "\u6CD5\u5F8B"
  }, {
    "id": "035101",
    "name": "\u6CD5\u5F8B(\u975E\u6CD5\u5B66\uFF09"
  }, {
    "id": "035102",
    "name": "\u6CD5\u5F8B(\u6CD5\u5B66}"
  }, {
    "id": "035200",
    "name": "\u793E\u4F1A\u5DE5\u4F5C"
  }, {
    "id": "040101",
    "name": "\u6559\u8093\u5B66\u539F\u7406"
  }, {
    "id": "040102",
    "name": "\u8BFE\u7A0B\u4E0E\u6559\u5B66\u8BBA"
  }, {
    "id": "040103",
    "name": "\u6559\u8093\u53F2"
  }, {
    "id": "040104",
    "name": "\u6BD4\u8F83\u6559\u8093\u5B66"
  }, {
    "id": "040105",
    "name": "\u5B66\u524D\u6559\u8093\u5B66"
  }, {
    "id": "040106",
    "name": "\u9AD8\u7B49\u6559\u8093\u5B66"
  }, {
    "id": "040109",
    "name": "\u7279\u6B8A\u6559\u8093\u5B66"
  }, {
    "id": "040110",
    "name": "\u6559\u8093\u6280\u672F\u5B66"
  }, {
    "id": "040200",
    "name": "\u5FC3\u7406\u5B66"
  }, {
    "id": "040201",
    "name": "\u57FA\u7840\u5FC3\u7406\u5B66"
  }, {
    "id": "040202",
    "name": "\u53D1\u5C55\u4E0E\u6559\u8093\u5FC3\u7406\u5B66"
  }, {
    "id": "040203",
    "name": "\u5E94\u7528\u5FC3\u7406\u5B66"
  }, {
    "id": "040300",
    "name": "\u4F53\u8093\u5B66"
  }, {
    "id": "040301",
    "name": "\u4F53\u8093\u4EBA\u6587\u793E\u4F1A\u5B66"
  }, {
    "id": "040302",
    "name": "\u8FD0\u52A8\u4EBA\u4F53\u79D1\u5B66"
  }, {
    "id": "040303",
    "name": "\u4F53\u8093\u6559\u8093\u8BAD\u7EC3\u5B66"
  }, {
    "id": "040304",
    "name": "\u6C11\u65CF\u4F20\u7EDF\u4F53\u8093\u5B66"
  }, {
    "id": "045102",
    "name": "\u5B66\u79D1\u6559\u5B66(\u601D\u653F\uFF09"
  }, {
    "id": "045103",
    "name": "\u5B66\u79D1\u6559\u5B66(\u8BED\u6587\uFF09"
  }, {
    "id": "045104",
    "name": "\u5B66\u79D1\u6559\u5B66(\u6570\u5B66\uFF09"
  }, {
    "id": "045105",
    "name": "\u5B66\u79D1\u6559\u5B66(\u7269\u7406\uFF09"
  }, {
    "id": "045106",
    "name": "\u5B66\u79D1\u6559\u5B66(\u5316\u5B66\uFF09"
  }, {
    "id": "045107",
    "name": "\u5B66\u79D1\u6559\u5B66(\u751F\u7269\uFF09"
  }, {
    "id": "045108",
    "name": "\u5B66\u79D1\u6559\u5B66(\u82F1\u8BED\uFF09"
  }, {
    "id": "045109",
    "name": "\u5B66\u79D1\u6559\u5B66(\u5386\u53F2\uFF09"
  }, {
    "id": "045110",
    "name": "\u5B66\u79D1\u6559\u5B66(\u5730\u7406\uFF09"
  }, {
    "id": "045111",
    "name": "\u5B66\u79D1\u6559\u5B66(\u97F3\u4E50)"
  }, {
    "id": "045112",
    "name": "\u5B66\u79D1\u6559\u5B66(\u4F53\u8093\uFF09"
  }, {
    "id": "050405",
    "name": "\u620F\u5267\u620F\u66F2\u5B66"
  }, {
    "id": "050406",
    "name": "\u7535\u5F71\u5B66"
  }, {
    "id": "050407",
    "name": "\u5E7F\u64AD\u7535\u89C6\u827A\u672F\u5B66"
  }, {
    "id": "050408",
    "name": "\u821E\u8E48\u5B66"
  }, {
    "id": "055100",
    "name": "\u7FFB\u8BD1"
  }, {
    "id": "055101",
    "name": "\u82F1\u8BED\u7B14\u8BD1"
  }, {
    "id": "055102",
    "name": "\u82F1\u8BED\u53E3\u8BD1"
  }, {
    "id": "055103",
    "name": "\u4FC4\u8BED\u7B14\u8BD1"
  }, {
    "id": "045201",
    "name": "\u4F53\u80B2\u6559\u5B66"
  }, {
    "id": "045202",
    "name": "\u8FD0\u52A8\u8BAD\u7EC3"
  }, {
    "id": "045203",
    "name": "\u7ADE\u8D5B\u7EC4\u7EC7"
  }, {
    "id": "045204",
    "name": "\u793E\u4F1A\u4F53\u8093\u6307\u5BFC"
  }, {
    "id": "045300",
    "name": "\u6C49\u8BED\u56FDpi\u6559*"
  }, {
    "id": "045400",
    "name": "\u5E94\u7528\u5FC3\u7406"
  }, {
    "id": "048101",
    "name": "\u5B66\u6821\u8BFE\u7A0B\u4E0E\u6559\u5B66"
  }, {
    "id": "048102",
    "name": "\u5B66\u751F\u53D1\u5C55\u4E0E\u6559\u8093"
  }, {
    "id": "050100",
    "name": "\u4E2D\u56FD\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050101",
    "name": "\u6587\u827A\u5B66"
  }, {
    "id": "050102",
    "name": "\u8BED\u8A00\u5B66\u53CA\u5E94\u7528\u8BED\u8A00\u5B66"
  }, {
    "id": "050103",
    "name": "\u6C49\u8BED\u8A00\u6587\u5B57\u5B66"
  }, {
    "id": "050104",
    "name": "\u4E2D\u56FD\u53E4\u5178\u6587\u732E\u5B66"
  }, {
    "id": "050105",
    "name": "\u4E2D\u56FD\u53E4\u4EE3\u6587\u5B66"
  }, {
    "id": "050106",
    "name": "\u4E2D\u56FD\u73B0\u5F53\u4EE3\u6587\u5B66"
  }, {
    "id": "050107",
    "name": "\u4E2D\u56FD\u5C11\u6570\u6C11\u65CF\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050108",
    "name": "\u6BD4\u8F83\u6587\u5B66\u4E0E\u4E16\u754C\u6587\u5B66"
  }, {
    "id": "050200",
    "name": "\u5916\u56FD\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050201",
    "name": "\u82F1\u8BED\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050202",
    "name": "\u4FC4\u8BED\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050203",
    "name": "\u6CD5\u8BED\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050204",
    "name": "\u5FB7\u8BED\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050205",
    "name": "\u65E5\u8BED\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050206",
    "name": "\u5370\u8654\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050207",
    "name": "\u897F\u73ED\u7259\u8BED\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050208",
    "name": "\u963F\u62C9\u4F2F\u8BED\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050209",
    "name": "\u6B27\u6D32\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050210",
    "name": "\u4E9A\u975E\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "050211",
    "name": "\u5916\u56FD\u8BED\u8A00\u5B66\u53CA\u5E94\u7528\u8BED\u8A00\u5B66"
  }, {
    "id": "050300",
    "name": "\u65B0\u95FB\u4F20\u64AD\u5B66"
  }, {
    "id": "050301",
    "name": "\u65B0\u95FB\u5B66"
  }, {
    "id": "050302",
    "name": "\u4F20\u64AD\u5B66"
  }, {
    "id": "050400",
    "name": "\u827A\u672F\u5B66"
  }, {
    "id": "050401",
    "name": "\u827A\u672F\u5B66"
  }, {
    "id": "050402",
    "name": "\u97F3\u4E50\u5B66"
  }, {
    "id": "050403",
    "name": "\u7F8E\u672F\u5B66"
  }, {
    "id": "050404",
    "name": "\u8BBE\u8BA1\u827A\u672F\u5B66"
  }, {
    "id": "077103",
    "name": "\u5E94\u7528\u5FC3\u7406\u5B66"
  }, {
    "id": "077300",
    "name": "\u6750\u6599\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "077301",
    "name": "\u6750\u6599\u7269\u7406\u4E0E\u5316\u5B66"
  }, {
    "id": "077302",
    "name": "\u6750\u6599\u5B66"
  }, {
    "id": "077303",
    "name": "\u6750\u6599\u52A0\u5DE5\u5DE5\u7A0B"
  }, {
    "id": "077400",
    "name": "\u7535\u5B50\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "077401",
    "name": "\u7269\u7406\u7535\u5B50\u5B66"
  }, {
    "id": "077402",
    "name": "\u7535\u8DEF\u4E0E\u7CFB\u7EDF"
  }, {
    "id": "077403",
    "name": "\u5FAE\u7535\u5B50\u5B66\u4E0E\u56FA\u4F53\u7535\u5B50\u5B66"
  }, {
    "id": "077404",
    "name": "\u7535\u78C1\u573A\u4E0E\u5FAE\u6CE2\u6280\u672F"
  }, {
    "id": "077500",
    "name": "\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "077501",
    "name": "\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7ED3\u6784"
  }, {
    "id": "077502",
    "name": "\u8BA1\u7B97\u673A\u8F6F\u4EF6\u4E0E\u7406\u8BBA"
  }, {
    "id": "077503",
    "name": "\u8BA1\u7B97\u673A\u5E94\u7528\u6280\u672F"
  }, {
    "id": "077700",
    "name": "\u751F\u7269\u533B\u5B66\u5DE5\u7A0B"
  }, {
    "id": "055104",
    "name": "\u4FC4\u8BED\u53E3\u8BD1"
  }, {
    "id": "055105",
    "name": "\u65E5\u8BED\u7B14\u8BD1"
  }, {
    "id": "055106",
    "name": "\u66F0\u8BED\u53E3\u8BD1"
  }, {
    "id": "055107",
    "name": "\u6CD5\u8BED\u7B14\u8BD1"
  }, {
    "id": "055108",
    "name": "\u6CD5\u8BED\u53E3\u8BD1"
  }, {
    "id": "055109",
    "name": "\u5FB7\u8BED\u7B14\u8BD1"
  }, {
    "id": "055110",
    "name": "\u5FB7\u8BED\u53E3\u8BD1"
  }, {
    "id": "055111",
    "name": "\u671D\u9C9C\u8BED\u7B14\u8BD1"
  }, {
    "id": "055112",
    "name": "\u671D\u9C9C\u8BED\u53E3\u8BD1"
  }, {
    "id": "055200",
    "name": "\u65B0\u95FB\u4E0E\u4F20\u64AD"
  }, {
    "id": "055300",
    "name": "\u51FA\u7248"
  }, {
    "id": "055400",
    "name": "\u51FA\u7248\u7855\u58EB"
  }, {
    "id": "060100",
    "name": "\u8003\u53E4\u5B66"
  }, {
    "id": "060102",
    "name": "\u8003\u53E4\u5B66\u53CA\u535A\u7269\u9986\u5B66"
  }, {
    "id": "065100",
    "name": "\u6587\u7269\u4E0E\u535A\u7269\u6DAB"
  }, {
    "id": "070101",
    "name": "\u57FA\u7840\u6570\u5B66"
  }, {
    "id": "070102",
    "name": "\u8BA1\u7B97\u6570\u5B66"
  }, {
    "id": "070103",
    "name": "\u6982\u7387\u8BBA\u4E0E\u6570\u7406\u7EDF\u8BA1"
  }, {
    "id": "070104",
    "name": "\u5E94\u7528\u6570\u5B66"
  }, {
    "id": "071000",
    "name": "\u751F\u7269\u5B66"
  }, {
    "id": "071001",
    "name": "\u690D\u7269\u5B66"
  }, {
    "id": "071002",
    "name": "\u52A8\u7269\u5B66"
  }, {
    "id": "071003",
    "name": "\u751F\u7406\u5B66"
  }, {
    "id": "071004",
    "name": "\u6C34\u751F\u751F\u7269\u5B66"
  }, {
    "id": "071005",
    "name": "\u5FAE\u751F\u7269\u5B66"
  }, {
    "id": "071006",
    "name": "\u795E\u7ECF\u751F\u7269\u5B66"
  }, {
    "id": "071007",
    "name": "\u9057\u4F20\u5B66"
  }, {
    "id": "071008",
    "name": "\u53D1\u8093\u751F\u7269\u5B66"
  }, {
    "id": "071009",
    "name": "\u7EC6\u80DE\u751F\u7269\u5B66"
  }, {
    "id": "071010",
    "name": "\u751F\u7269\u5316\u5B66\u4E0E\u5206\u5B50\u751F\u7269\u5B66"
  }, {
    "id": "071011",
    "name": "\u751F\u7269\u7269\u7406\u5B66"
  }, {
    "id": "071012",
    "name": "\u751F\u6001\u5B66"
  }, {
    "id": "071300",
    "name": "\u751F\u6001\u5B66"
  }, {
    "id": "071400",
    "name": "\u7EDF\u8BA1\u5B66"
  }, {
    "id": "077100",
    "name": "\u5FC3\u7406\u5B66"
  }, {
    "id": "077101",
    "name": "\u57FA\u7840\u5FC3\u7406\u5B66"
  }, {
    "id": "077102",
    "name": "\u53D1\u5C55\u4E0E\u6559\u8093\u5FC3\u7406\u5B66"
  }, {
    "id": "080702",
    "name": "\u70ED\u80FD\u5DE5\u7A0B"
  }, {
    "id": "080703",
    "name": "\u52A8\u529B\u673A\u68B0\u53CA\u5DE5\u7A0B"
  }, {
    "id": "080704",
    "name": "\u7409\u4F53\u673A\u68B0\u53CA\u5DE5\u7A0B"
  }, {
    "id": "080705",
    "name": "\u5236\u51B7\u53CA\u4F4E\u6E29\u5DE5\u7A0B"
  }, {
    "id": "080706",
    "name": "\u5316\u5DE5\u8FC7\u7A0B\u673A\u68B0"
  }, {
    "id": "080800",
    "name": "\u7535\u6C14\u5DE5\u7A0B"
  }, {
    "id": "080801",
    "name": "\u7535\u673A\u4E0E\u7535\u5668"
  }, {
    "id": "080802",
    "name": "\u7535\u529B\u7CFB\u7EDF\u53CA\u5176\u81EA\u52A8\u5316"
  }, {
    "id": "080803",
    "name": "\u9AD8\u2018\u91D1\u4E0E\u6DB5\u8607"
  }, {
    "id": "080804",
    "name": "\u7535\u529B\u7535\u5B50\u4E0E\u7535\u529B\u4F20\u52A8"
  }, {
    "id": "080805",
    "name": "\u7535\u5DE5\u7406\u8BBA\u4E0E\u65B0\u6280\u672F"
  }, {
    "id": "080900",
    "name": "\u7535\u5B50\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "080901",
    "name": "\u7269\u7406\u7535\u5B50\u5B66"
  }, {
    "id": "080902",
    "name": "\u7535\u8DEF\u4E0E\u7CFB\u7EDF"
  }, {
    "id": "080903",
    "name": "\u5FAE\u7535\u5B50\u5B66\u4E0E\u56FA\u4F53\u7535\u5B50\u5B66"
  }, {
    "id": "078000",
    "name": "\u836F\u5B66"
  }, {
    "id": "078001",
    "name": "\u836F\u7269\u5316\u5B66"
  }, {
    "id": "078002",
    "name": "\u836F\u5242\u5B66"
  }, {
    "id": "078003",
    "name": "\u751F\u836F\u5B66"
  }, {
    "id": "078004",
    "name": "\u836F\u7269\u5206\u6790\u5B66"
  }, {
    "id": "078005",
    "name": "\u5FAE\u751F\u7269\u4E0E\u751F\u5316\u836F\u5B66"
  }, {
    "id": "078006",
    "name": "\u836F\u7406\u5B66"
  }, {
    "id": "078100",
    "name": "\u4E2D\u836F\u5B66"
  }, {
    "id": "078400",
    "name": "\u6559\u8093\u6280\u672F\u5B66"
  }, {
    "id": "078401",
    "name": "\u6559\u8093\u6280\u672F\u5B66"
  }, {
    "id": "078500",
    "name": "\u8FD0\u52A8\u4EBA\u4F53\u79D1\u5B66"
  }, {
    "id": "078501",
    "name": "\u8FD0\u52A8\u4EBA\u4F53\u79D1\u5B66"
  }, {
    "id": "080200",
    "name": "\u673A\u68B0\u5DE5\u7A0B"
  }, {
    "id": "080201",
    "name": "\u673A\u68B0\u5236\u9020\u53CA\u5176\u81EA\u52A8\u5316"
  }, {
    "id": "080202",
    "name": "\u673A\u68B0\u7535\u5B50\u5DE5\u7A0B"
  }, {
    "id": "080203",
    "name": "\u673A\u68B0\u8BBE\u8BA1\u53CA\u7406\u8BBA"
  }, {
    "id": "080204",
    "name": "\u8F66\u8F86\u5DE5\u7A0B"
  }, {
    "id": "080400",
    "name": "\u4EEA\u5668\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "080401",
    "name": "\u7CBE\u5BC6\u4EEA\u5668\u53CA\u673A\u68B0"
  }, {
    "id": "080402",
    "name": "\u6D4B\u8BD5\u8BA1\u91CF\u6280\u672F\u53CA\u4EEA\u5668"
  }, {
    "id": "080500",
    "name": "\u6750\u6599\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "080501",
    "name": "\u6750\u6599\u7269\u7406\u4E0E\u5316\u5B66"
  }, {
    "id": "080502",
    "name": "\u6750\u6599\u5B66"
  }, {
    "id": "080503",
    "name": "\u6750\u6599\u52A0\u5DE5\u5DE5\u7A0B"
  }, {
    "id": "080600",
    "name": "\u51B6\u91D1\u5DE5\u7A0B"
  }, {
    "id": "080601",
    "name": "\u51B6\u91D1\u7269\u7406\u5316\u5B66"
  }, {
    "id": "080602",
    "name": "\u94A2\u94C1/\u53F0\u91D1"
  }, {
    "id": "080603",
    "name": "\u6709\u8272\u91D1\u5C5E\u51B6\u91D1"
  }, {
    "id": "080700",
    "name": "\u52A8\u529B\u5DE5\u7A0B\u53CA\u5DE5\u7A0B\u70ED\u7269\u7406"
  }, {
    "id": "080701",
    "name": "\u5DE5\u7A0B\u70ED\u7269\u7406"
  }, {
    "id": "081701",
    "name": "\u5316\u5B66\u5DE5\u7A0B"
  }, {
    "id": "081702",
    "name": "\u5316\u5B66\u5DE5\u827A"
  }, {
    "id": "081703",
    "name": "\u751F\u7269\u5316\u5DE5"
  }, {
    "id": "081704",
    "name": "\u5E94\u7528\u5316\u5B66"
  }, {
    "id": "081705",
    "name": "\u5DE5\u4E1A\u50AC\u5316"
  }, {
    "id": "082100",
    "name": "\u7EBA\u7EC7\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "082101",
    "name": "\u7EBA\u7EC7\u5DE5\u7A0B"
  }, {
    "id": "082102",
    "name": "\u7EBA\u7EC7\u6750\u6599\u4E0E\u7EBA\u7EC7\u54C1\u8BBE\u8BA1"
  }, {
    "id": "082103",
    "name": "\u7EBA\u7EC7\u5316\u5B66\u4E0E\u67D3\u6574\u5DE5\u7A0B"
  }, {
    "id": "082104",
    "name": "\u670D\u88C5\u8BBE\u8BA1\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "082300",
    "name": "\u4EA4\u901A\u8FD0\u8F93\u5DE5\u7A0B"
  }, {
    "id": "082301",
    "name": "\u9053\u8DEF\u4E0E\u94C1\u9053\u5DE5\u7A0B"
  }, {
    "id": "082302",
    "name": "\u4EA4\u901A\u4FE1\u606F\u5DE5\u7A0B\u53CA\u63A7\u5236"
  }, {
    "id": "082303",
    "name": "\u4EA4\u901A\u8FD0\u8F93\u89C4\u5212\u4E0E\u7BA1\u7406"
  }, {
    "id": "082304",
    "name": "\u8F7D\u8FD0\u5DE5\u5177\u8FD0\u7528\u5DE5\u7A0B"
  }, {
    "id": "082400",
    "name": "\u8239\u8236\u4E0E\u6D77\u6D0B\u5DE5\u7A0B"
  }, {
    "id": "082401",
    "name": "\u8239\u8236\u4E0E\u6D77\u6D0B\u7ED3\u6784\u7269\u8BBE\u8BA1\u5236\u9020"
  }, {
    "id": "082402",
    "name": "\u8F6E\u673A\u5DE5\u7A0B"
  }, {
    "id": "082403",
    "name": "\u6C34\u58F0\u5DE5\u7A0B"
  }, {
    "id": "082404",
    "name": "\u8FD0\u8F7D\u5DE5\u5177\u8FD0\u7528\u5DE5\u7A0B"
  }, {
    "id": "082500",
    "name": "\u822A\u7A7A\u5B87\u822A\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "082501",
    "name": "\u98DE\u884C\u5668\u8BBE\u8BA1"
  }, {
    "id": "080904",
    "name": "\u7535\u78C1\u573A\u4E0E\u5FAE\u6CE2\u6280\u672F"
  }, {
    "id": "081000",
    "name": "\u4FE1\u606F\u4E0E\u901A\u4FE1\u5DE5\u7A0B"
  }, {
    "id": "081001",
    "name": "\u901A\u4FE1\u4E0E\u4FE1\u606F\u7CFB\u7EDF"
  }, {
    "id": "081002",
    "name": "\u4FE1\u53F7\u4E0E\u4FE1\u606F\u5904\u7406"
  }, {
    "id": "081100",
    "name": "\u63A7\u5236\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "081101",
    "name": "\u63A7\u5236\u7406\u8BBA\u4E0E\u63A7\u5236\u5DE5\u7A0B"
  }, {
    "id": "081102",
    "name": "\u68C0\u6D4B\u6280\u672F\u4E0E\u81EA\u52A8\u5316\u88C5M"
  }, {
    "id": "081103",
    "name": "\u7CFB\u7EDF\u5DE5\u7A0B"
  }, {
    "id": "081104",
    "name": "\u6A21\u5F0F\u8BC6\u522B\u4E0E\u667A\u80FD\u7CFB\u7EDF"
  }, {
    "id": "081105",
    "name": "\u5BFC\u822A\u3001\u5236\u5BFC\u4E0E\u63A7\u5236"
  }, {
    "id": "081200",
    "name": "\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "081201",
    "name": "\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7ED3\u6784"
  }, {
    "id": "081202",
    "name": "\u8BA1\u7B97\u673A\u8F6F\u4EF6\u4E0E\u7406\u8BBA"
  }, {
    "id": "081203",
    "name": "\u8BA1\u7B97\u673A\u5E94\u7528\u6280\u672F"
  }, {
    "id": "081300",
    "name": "\u5EFA\u7B51\u5B66"
  }, {
    "id": "081301",
    "name": "\u5EFA\u7B51\u5386\u53F2\u4E0E\u7406\u8BBA"
  }, {
    "id": "081302",
    "name": "\u5EFA\u7B51\u8BBE\u8BA1\u53CA\u5176\u7406\u8BBA"
  }, {
    "id": "081303",
    "name": "\u57CE\u5E02\u89C4\u5212\u4E0E\u8BBE\u8BA1"
  }, {
    "id": "081304",
    "name": "\u5EFA\u7B51\u6280\u672F\u79D1\u5B66"
  }, {
    "id": "081400",
    "name": "\u571F\u6728\u5DE5\u7A0B"
  }, {
    "id": "081401",
    "name": "\u5CA9\u571F\u5DE5\u7A0B"
  }, {
    "id": "081402",
    "name": "\u7ED3\u6784\u5DE5\u7A0B"
  }, {
    "id": "081403",
    "name": "\u5E02\u653F\u5DE5\u7A0B"
  }, {
    "id": "081404",
    "name": "\u4F9B\u70ED\u3001\u4F9B\u71C3\u6C14\u3001\u901A\u98CE\u53CA\u7A7A\u8C03\u5DE5\u7A0B"
  }, {
    "id": "081405",
    "name": "\u9632\u707E\u51CF\u707E\u5DE5\u7A0B\u53CA\u9632\u62A4\u5DE5\u7A0B"
  }, {
    "id": "081406",
    "name": "\u6865\u6881\u4E0E\u96A7\u9053\u5DE5\u7A0B"
  }, {
    "id": "081500",
    "name": "\u6C34\u5229\u5DE5\u7A0B"
  }, {
    "id": "081503",
    "name": "\u6C34\u5DE5\u7ED3\u6784\u5DE5\u7A0B"
  }, {
    "id": "081505",
    "name": "\u6E2F\u53E3\u3001\u6D77\u5CB8\u53CA\u8FD1\u6D77\u5DE5\u7A0B"
  }, {
    "id": "081700",
    "name": "\u5316\u5B66\u5DE5\u7A0B\u4E0E\u6280\u672F"
  }, {
    "id": "085222",
    "name": "\u4EA4\u901A\u8FD0\u8F93\u5DE5\u7A0B"
  }, {
    "id": "085223",
    "name": "\u8239\u8236\u4E0E\u6D77\u6D0B\u5DE5\u7A0B"
  }, {
    "id": "085230",
    "name": "\u751F\u7269\u533B\u5B66\u5DE5\u7A0B"
  }, {
    "id": "085232",
    "name": "\u822A\u7A7A\u5DE5\u7A0B"
  }, {
    "id": "085233",
    "name": "\u822A\u5929\u5DE5\u7A0B"
  }, {
    "id": "085234",
    "name": "\u8F66\u8F86\u5DE5\u7A0B"
  }, {
    "id": "085235",
    "name": "\u5236\u836F\u5DE5\u7A0B"
  }, {
    "id": "085236",
    "name": "\u5DE5\u4E1A\u5DE5\u7A0B"
  }, {
    "id": "085237",
    "name": "\u5DE5\u4E1A\u8BBE\u8BA1\u5DE5\u7A0B"
  }, {
    "id": "085238",
    "name": "\u751F\u7269\u5DE5\u7A0B"
  }, {
    "id": "085239",
    "name": "\u9879\u76EE\u7BA1\u7406"
  }, {
    "id": "085240",
    "name": "\u7269\u7D05\u7A0B"
  }, {
    "id": "085300",
    "name": "\u57CE\u5E02\u89C4\u5212"
  }, {
    "id": "087100",
    "name": "\u7BA1\u7406\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "087200",
    "name": "\u8BBE\u8BA1\u5B66"
  }, {
    "id": "100207",
    "name": "\u5F71\u50CF\u533B\u5B66\u4E0E\u6838\u533B\u5B66"
  }, {
    "id": "100209",
    "name": "\u62A4\u7406\u5B66"
  }, {
    "id": "100217",
    "name": "\u9EBB\u9189\u5B66"
  }, {
    "id": "100700",
    "name": "\u836F\u5B66"
  }, {
    "id": "100701",
    "name": "\u836F\u7269\u5316\u5B66"
  }, {
    "id": "100702",
    "name": "\u836F\u5242\u5B66"
  }, {
    "id": "100703",
    "name": "\u751F\u836F\u5B66"
  }, {
    "id": "082502",
    "name": "\u822A\u7A7A\u5B87\u822A\u63A8\u8FDB\u7406\u8BBA\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "082503",
    "name": "\u822A\u7A7A\u5B87\u822A\u5236\u9020\u5DE5\u7A0B "
  }, {
    "id": "082504",
    "name": "\u4EBA\u673A\u4E0E\u73AF\u5883\u5DE5\u7A0B "
  }, {
    "id": "083100",
    "name": "\u751F\u7269\u533B\u5B66\u5DE5\u7A0B "
  }, {
    "id": "083300",
    "name": "\u57CE\u4E61\u89C4\u5212\u5B66 "
  }, {
    "id": "083400",
    "name": "\u98CE\u666F\u56ED\u6797\u5B66 "
  }, {
    "id": "083500",
    "name": "\u8F6F\u4EF6\u5DE5\u7A0B "
  }, {
    "id": "085100",
    "name": "\u5EFA\u7B51\u5B66 "
  }, {
    "id": "085201",
    "name": "\u673A\u68B0\u5DE5\u7A0B "
  }, {
    "id": "085203",
    "name": "\u4EEA\u5668\u4EEA\u8868\u5DE5\u7A0B "
  }, {
    "id": "085204",
    "name": "\u6750\u6599\u5DE5\u7A0B "
  }, {
    "id": "085205",
    "name": "\u51B6\u91D1\u5DE5\u7A0B "
  }, {
    "id": "085206",
    "name": "\u52A8\u529B\u5DE5\u7A0B "
  }, {
    "id": "085207",
    "name": "\u7535\u6C14\u5DE5\u7A0B "
  }, {
    "id": "085208",
    "name": "\u7535\u5B50\u4E0E\u901A\u4FE1\u5DE5\u7A0B "
  }, {
    "id": "085209",
    "name": "\u96C6\u6210\u7535\u8DEF\u5DE5\u7A0B "
  }, {
    "id": "085210",
    "name": "\u63A7\u5236\u5DE5\u7A0B "
  }, {
    "id": "085211",
    "name": "\u8BA1\u7B97\u673A\u6280\u672F "
  }, {
    "id": "085212",
    "name": "\u8F6F\u4EF6\u5DE5\u7A0B "
  }, {
    "id": "085213",
    "name": "\u5EFA\u7B51\u4E0E\u571F\u6728\u5DE5\u7A0B "
  }, {
    "id": "085214",
    "name": "\u6C34\u5229\u5DE5\u7A0B "
  }, {
    "id": "085216",
    "name": "\u5316\u5B66\u5DE5\u7A0B "
  }, {
    "id": "085220",
    "name": "\u7EBA\u7EC7\u5DE5\u7A0B"
  }, {
    "id": "120402",
    "name": "iS\u533B\u5B66\u4E0E\u536B\u751F\u4E8B\u4E1A\u7BA1\u7406 "
  }, {
    "id": "120404",
    "name": "\u793E\u4F1A\u4FDD\u969C "
  }, {
    "id": "125100",
    "name": "\u5DE5\u5546\u7BA1\u7406 "
  }, {
    "id": "125300",
    "name": "\u4F1A\u8BA1"
  }, {
    "id": "125400",
    "name": "\u6F0F\u7BA1\u7406 "
  }, {
    "id": "125600",
    "name": "\u5DE5\u7A0B\u7BA1\u7406 "
  }, {
    "id": "130100",
    "name": "\u827A\u672F\u5B66\u7406\u8BBA "
  }, {
    "id": "130101",
    "name": "\u827A\u672F\u5B66 "
  }, {
    "id": "130200",
    "name": "\u97F3\u4E50\u4E0E\u821E\u8E48\u5B66 "
  }, {
    "id": "130201",
    "name": "\u97F3\u4E50\u5B66 "
  }, {
    "id": "130202",
    "name": "\u821E\u8E48\u5B66 "
  }, {
    "id": "130300",
    "name": "\u620F\u5267\u4E0E\u5F71\u89C6\u5B66 "
  }, {
    "id": "130301",
    "name": "\u620F\u5267\u620F\u66F2\u5B66 "
  }, {
    "id": "130302",
    "name": "\u7535\u5F71\u5B66"
  }, {
    "id": "130303",
    "name": "\u5E7F\u64AD\u7535\u89C6\u827A\u672F\u5B66"
  }, {
    "id": "130400",
    "name": "\u7F8E\u672F\u5B66"
  }, {
    "id": "130500",
    "name": "\u8BBE\u8BA1\u5B66"
  }, {
    "id": "135100",
    "name": "\u827A\u672F"
  }, {
    "id": "135101",
    "name": "\u97F3\u4E50"
  }, {
    "id": "135102",
    "name": "\u620F\u5267"
  }, {
    "id": "135103",
    "name": "\u620F\u66F2"
  }, {
    "id": "135104",
    "name": "\u7535\u5F70"
  }, {
    "id": "135105",
    "name": "\u5E7F\u64AD\u7535\u89C6"
  }, {
    "id": "135106",
    "name": "\u821E\u8E48"
  }, {
    "id": "135107",
    "name": "\u7F8E\u672F"
  }, {
    "id": "135108",
    "name": "\u827A\u672F\u8BBE\u8BA1"
  }, {
    "id": "107401",
    "name": "\u793E\u4F1A\u533B\u5B66\u4E0E\u536B\u751F\u4E8B\u4E1A\u7BA1\u7406 "
  }, {
    "id": "108107",
    "name": "\u5F71\u50CF\u533B\u5B66\u4E0E\u6838\u533B\u5B66 "
  }, {
    "id": "108116",
    "name": "\u9EBB\u9189\u5B66"
  }, {
    "id": "100704",
    "name": "\u836F\u7269\u5206\u6790\u5B66"
  }, {
    "id": "100705",
    "name": "\u5FAE\u751F\u7269\u4E0E\u751F\u5316\u836F\u5B66"
  }, {
    "id": "100706",
    "name": "\u836F\u7406\u5B66"
  }, {
    "id": "100800",
    "name": "\u4E2D\u836F\u5B66"
  }, {
    "id": "101100",
    "name": "\u62A4\u7406\u5B66"
  }, {
    "id": "105107",
    "name": "\u5F71\u50CF\u533B\u5B66\u4E0E\u6838\u533B\u5B66"
  }, {
    "id": "105116",
    "name": "\u9EBB\u9189\u5B66"
  }, {
    "id": "105400",
    "name": "\u62A4\u7406"
  }, {
    "id": "105500",
    "name": "\u836F\u5B66"
  }, {
    "id": "105600",
    "name": "\u4E2D\u836F\u5B66"
  }, {
    "id": "107002",
    "name": "\u8FD0\u52A8\u4EBA\u4F53\u79D1\u5B66"
  }, {
    "id": "107200",
    "name": "\u751F\u7269\u533B\u5B66\u5DE5\u7A0B"
  }, {
    "id": "107302",
    "name": "\u793E\u4F1A\u533B\u5B66\u4E0E\u536B\u751F\u4E8B\u4E1A\u7BA1\u7406"
  }, {
    "id": "120202",
    "name": "\u4F01\u4E1A\u7BA1\u7406"
  }, {
    "id": "120203",
    "name": "\u8111\u7BA1\u7406"
  }, {
    "id": "120204",
    "name": "\u6280\u672F\u7ECF\u6D4E\u53CA\u7BA1\u7406"
  }, {
    "id": "120302",
    "name": "\u6797\u4E1A\u7ECF\u6D4E\u7BA1\u7406"
  }, {
    "id": "120100",
    "name": "\u7BA1\u7406\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "120200",
    "name": "\u5DE5\u5546\u7BA1\u7406"
  }, {
    "id": "120201",
    "name": "\u4F1A\u8BA1\u5B66"
  }, {
    "id": "02010100",
    "name": "\u7ECF\u6D4E\u5B66"
  }, {
    "id": "02030100",
    "name": "\u91D1\u878D\u5B66"
  }, {
    "id": "02030300",
    "name": "\u4FDD\u9669\u5B66"
  }, {
    "id": "02040100",
    "name": "\u56FD\u9645\u7ECF\u6D4E\u4E0E\u8D38\u6613"
  }, {
    "id": "03030100",
    "name": "\u793E\u4F1A\u5B66"
  }, {
    "id": "04010100",
    "name": "\u6559\u8093\u5B66"
  }, {
    "id": "04010400",
    "name": "\u6559\u8093\u6280\u672F\u5B66"
  }, {
    "id": "04010500",
    "name": "\u827A\u672F\u6559\u8093"
  }, {
    "id": "04010600",
    "name": "\u5B66\u524D\u6559\u8093"
  }, {
    "id": "04010700",
    "name": "\u5C0F\u5B66\u6559\u8093"
  }, {
    "id": "04010800",
    "name": "\u7279\u6B8A\u6559\u8093"
  }, {
    "id": "04020X00",
    "name": "\u4F53\u80B2\u6559\u8093"
  }, {
    "id": "04020200",
    "name": "\u8FD0\u52A8\u8BAD\u7EC3"
  }, {
    "id": "05010100",
    "name": "\u6C49\u8BED\u8A00\u6587\u5B66"
  }, {
    "id": "05010300",
    "name": "\u6C49\u8BED\u56FD\u9645\u6559\u8093"
  }, {
    "id": "05020100",
    "name": "\u82F1\u8BED"
  }, {
    "id": "05020200",
    "name": "\u4FC4\u8BED"
  }, {
    "id": "05020300",
    "name": "\u5FB7\u8BED"
  }, {
    "id": "05020400",
    "name": "\u6CD5\u8BED"
  }, {
    "id": "05020500",
    "name": "\u897F\u73ED\u7259\u8BED"
  }, {
    "id": "05020600",
    "name": "\u963F\u62C9\u4F2F\u8BED"
  }, {
    "id": "05020700",
    "name": "\u66F0\u8BED"
  }, {
    "id": "05020800",
    "name": "\u6CE2\u65AF\u8BED"
  }, {
    "id": "05020900",
    "name": "\u671D\u9C9C\u8BED"
  }, {
    "id": "05021000",
    "name": "\u83F2\u5F8B\u5BBE\u8BED"
  }, {
    "id": "05021100",
    "name": "\u68B5\u8BED\u5DF4\u5229\u8BED"
  }, {
    "id": "05021200",
    "name": "\u5370\u8654\u5C3C\u897F\u4E9A\u8BED"
  }, {
    "id": "05021300",
    "name": "\u5370\u5730\u8BED"
  }, {
    "id": "05021400",
    "name": "\u67EC\u57D4\u5BE8\u8BED"
  }, {
    "id": "05021500",
    "name": "\u8001\u631D\u8BED"
  }, {
    "id": "05021600",
    "name": "\u7F05\u7538\u8BED"
  }, {
    "id": "05021700",
    "name": "\u9A6C\u6765\u8BED"
  }, {
    "id": "05021800",
    "name": "\u8499\u53E4\u8BED"
  }, {
    "id": "05021900",
    "name": "\u50E7\u4F3D\u7F57\u8BED"
  }, {
    "id": "05022000",
    "name": "\u6CF0\u8BED"
  }, {
    "id": "05022100",
    "name": "\u4E4C\u5C14\u90FD\u8BED"
  }, {
    "id": "05022200",
    "name": "\u5E0C\u4F2F\u6765\u8BED"
  }, {
    "id": "05022300",
    "name": "\u8D8A\u5357\u8BED"
  }, {
    "id": "05022400",
    "name": "\u8C6A\u8428\u8BED"
  }, {
    "id": "05022500",
    "name": "\u65AF\u74E6\u5E0C\u91CC\u8BED"
  }, {
    "id": "08070300",
    "name": "\u901A\u4FE1\u5DE5\u7A0B"
  }, {
    "id": "08070400",
    "name": "\u5FAE\u7535\u5B50\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "08070500",
    "name": "\u5149\u7535\u4FE1\u606F\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "08070600",
    "name": "\u4FE1\u606F\u5DE5\u7A0B"
  }, {
    "id": "08071400",
    "name": "\u7535\u5B50\u4FE1\u606F\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "05022600",
    "name": "\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED"
  }, {
    "id": "05022700",
    "name": "\u4FDD\u52A0\u5229\u4E9A\u8BED"
  }, {
    "id": "05022800",
    "name": "\u6CE2\u5170\u8BED"
  }, {
    "id": "05022900",
    "name": "\u6377\u514B\u8BED"
  }, {
    "id": "05023000",
    "name": "\u65AF\u6D1B\u4F10\u514B\u8BED"
  }, {
    "id": "05023100",
    "name": "\u7F57\u9A6C\u5C3C\u4E9A\u8BED"
  }, {
    "id": "05023200",
    "name": "\u8461\u8404\u7259\u8BED"
  }, {
    "id": "05023300",
    "name": "\u745E\u5178\u8BED"
  }, {
    "id": "05023400",
    "name": "\u585E\u5C14\u7EF4\u4E9A\u8BED"
  }, {
    "id": "05023500",
    "name": "\u571F\u8033\u5176\u8BED"
  }, {
    "id": "05023600",
    "name": "\u5E0C\u814A\u8BED"
  }, {
    "id": "05023700",
    "name": "\u5308\u7259\u5229\u8BED"
  }, {
    "id": "05023800",
    "name": "\u610F\u5927\u5229\u8BED"
  }, {
    "id": "05023900",
    "name": "\u6CF0\u7C73\u5C14\u8BED"
  }, {
    "id": "05024000",
    "name": "\u666E\u4EC0\u56FE\u8BED"
  }, {
    "id": "05024100",
    "name": "\u4E16\u754C\u8BED"
  }, {
    "id": "05024200",
    "name": "\u5B5F\u52A0\u62C9\u8BED"
  }, {
    "id": "05024300",
    "name": "\u5C3C\u6CCA\u5C14\u8BED"
  }, {
    "id": "05024400",
    "name": "\u514B\u7F57\u5730\u4E9A\u8BED"
  }, {
    "id": "05024500",
    "name": "\u8377\u5170\u8BED"
  }, {
    "id": "05024600",
    "name": "\u82AC\u5170\u8BED"
  }, {
    "id": "05024700",
    "name": "\u4E4C\u514B\u5170\u8BED"
  }, {
    "id": "05024800",
    "name": "\u632A\u5A01\u8BED"
  }, {
    "id": "05024900",
    "name": "\u4E39\u9EA6\u8BED"
  }, {
    "id": "05025000",
    "name": "\u51B0\u5C9B\u8BED"
  }, {
    "id": "05026100",
    "name": "\u7FFB\u8BD1"
  }, {
    "id": "05030100",
    "name": "\u65B0\u95FB\u5B66"
  }, {
    "id": "06010300",
    "name": "\u8003\u53E4\u5B66"
  }, {
    "id": "07030200",
    "name": "\u5E94\u7528\u5316\u5B66"
  }, {
    "id": "07100100",
    "name": "\u751F\u7269\u79D1\u5B66"
  }, {
    "id": "07100200",
    "name": "\u751F\u7269\u6280\u672F"
  }, {
    "id": "08020300",
    "name": "\u6750\u6599\u6210\u578B\u53CA\u63A7\u5236\u5DE5\u7A0B"
  }, {
    "id": "08020500",
    "name": "\u5DE5\u4E1A\u8BBE\u8BA1"
  }, {
    "id": "08040100",
    "name": "\u6750\u6599\u79D1\u5B66\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "08040600",
    "name": "\u65E0\u673A\u975E\u91D1\u5C5E\u6750\u6599\u5DE5\u7A0B"
  }, {
    "id": "08040700",
    "name": "\u9AD8\u5206\u5B50\u6750\u6599\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "08040800",
    "name": "\u590D\u5408\u6750\u6599\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "08060100",
    "name": "\u7535\u6C14\u5DE5\u7A0B\u53CA\u5176\u81EA\u52A8\u5316"
  }, {
    "id": "08070100",
    "name": "\u7535\u5B50\u4FE1\u606F\u5DE5\u7A0B"
  }, {
    "id": "08070200",
    "name": "\u7535\u5B50\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "13030000",
    "name": "\u620F\u5267\u4E0E\u5F71\u89C6\u5B66\u7C7B"
  }, {
    "id": "13030100",
    "name": "\u8868\u6F14"
  }, {
    "id": "13030200",
    "name": "\u620F\u5267\u5B66"
  }, {
    "id": "13030300",
    "name": "\u7535\u5F71\u5B66"
  }, {
    "id": "13030400",
    "name": "\u620F\u5267\u5F71\u89C6\u6587\u5B66"
  }, {
    "id": "08080100",
    "name": "\u81EA\u52A8\u5316"
  }, {
    "id": "08090100",
    "name": "\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F"
  }, {
    "id": "08090200",
    "name": "\u8F6F\u4EF6\u5DE5\u7A0B"
  }, {
    "id": "08090400",
    "name": "\u4FE1\u606F\u5B89\u5168"
  }, {
    "id": "08100500",
    "name": "\u57CE\u5E02\u5730\u4E0B\u7A7A\u95F4\u5DE5\u7A0B"
  }, {
    "id": "08100600",
    "name": "\u9053\u8DEF\u6865\u6881\u4E0E\u6E21\u6CB3\u5DE5\u7A0B"
  }, {
    "id": "08110300",
    "name": "\u6E2F\u53E3\u822A\u9053\u4E0E\u6D77\u5CB8\u5DE5\u7A0B"
  }, {
    "id": "08130200",
    "name": "\u5236\u836F\u5DE5\u7A0B"
  }, {
    "id": "08160100",
    "name": "\u7EBA\u7EC7\u5DE5\u7A0B"
  }, {
    "id": "08160200",
    "name": "\u670D\u88C5\u8BBE\u8BA1\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "08180500",
    "name": "\u98DE\u884C\u6280\u672F"
  }, {
    "id": "08190100",
    "name": "\u8239\u8236\u4E0E\u6D77\u6D0B\u5DE5\u7A0B"
  }, {
    "id": "08200100",
    "name": "\u822A\u7A7A\u822A\u5929\u5DE5\u7A0B"
  }, {
    "id": "08200200",
    "name": "\u98DE\u884C\u5668\u8BBE\u8BA1\u4E0E\u5DE5\u7A0B"
  }, {
    "id": "08200300",
    "name": "\u98DE\u884C\u5668\u5236\u9020\u5DE5\u7A0B"
  }, {
    "id": "08200400",
    "name": "\u98DE\u884C\u5668\u52A8\u529B\u5DE5\u7A0B"
  }, {
    "id": "08200500",
    "name": "\u98DE\u884C\u5668\u73AF\u5883\u4E0E\u751F\u547D\u4FDD\u969C\u5DE5\u7A0B"
  }, {
    "id": "08200600",
    "name": "\u98DE\u884C\u5668\u8D28\u91CF\u4E0E\u53EF\u8C62\u6027"
  }, {
    "id": "08260100",
    "name": "\u751F\u7269\u533B\u5B66\u5DE5\u7A0B"
  }, {
    "id": "10010100",
    "name": "\u57FA\u7840\u533B\u5B66"
  }, {
    "id": "10020200",
    "name": "\u9EBB\u9189\u5B66"
  }, {
    "id": "10020300",
    "name": "\u533B\u5B66\u5F71\u50CF\u5B66"
  }, {
    "id": "10050100",
    "name": "\u4E2D\u533B\u5B66"
  }, {
    "id": "10070200",
    "name": "\u836F\u7269\u5236\u5242"
  }, {
    "id": "10080100",
    "name": "\u4E2D\u836F\u5B66"
  }, {
    "id": "10110000",
    "name": "\u62A4\u7406\u5B66\u7C7B"
  }, {
    "id": "101X0100",
    "name": "\u62A4\u7406\u5B66"
  }, {
    "id": "12020300",
    "name": "\u4F1A\u8BA1\u5B66"
  }, {
    "id": "13010000",
    "name": "5\u672F\u5B66\u7406\u8BBA\u7C7B"
  }, {
    "id": "130X0100",
    "name": "\u827A\u672F\u53F2\u8BBA"
  }, {
    "id": "13020000",
    "name": "\u97F3\u4E50\u4E0E\u821E\u8E48\u5B66\u7C7B"
  }, {
    "id": "13020100",
    "name": "\u97F3\u4E50\u8868\u6F14"
  }, {
    "id": "13020200",
    "name": "\u97F3\u4E50\u5B66"
  }, {
    "id": "13020300",
    "name": "\u4F5C\u66F2\u4E0E\u4F5C\u66F2\u6280\u672F\u7406\u8BBA"
  }, {
    "id": "13020400",
    "name": "\u821E\u8E48\u8868\u6F14"
  }, {
    "id": "13020500",
    "name": "\u821E\u8E48\u5B66"
  }, {
    "id": "13020600",
    "name": "\u821E\u8E48\u7F16\u5BFC"
  }, {
    "id": "13030500",
    "name": "\u5E7F\u64AD\u7535\u89C6\u7F16\u5BFC"
  }, {
    "id": "13030600",
    "name": "\u620F\u5267\u5F71\u89C6\u5BFC\u6F14"
  }, {
    "id": "13030700",
    "name": "\u620F\u5267\u5F71\u89C6\u7F8E\u672F\u8BBE\u8BA1"
  }, {
    "id": "13030800",
    "name": "\u5F55\u97F3\u827A\u672F"
  }, {
    "id": "13030900",
    "name": "\u64AD\u97F3\u4E0E\u4E3B\u6301\u827A\u672F"
  }, {
    "id": "13031000",
    "name": "\u52A8\u753B"
  }, {
    "id": "13031100",
    "name": "\u5F71\u89C6\u6444\u5F71\u4E0E\u5236\u4F5C"
  }, {
    "id": "13040100",
    "name": "\u7F8E\u672F\u5B66"
  }, {
    "id": "13040200",
    "name": "\u7ED8\u753B"
  }, {
    "id": "13040300",
    "name": "\u96E2\u5851"
  }, {
    "id": "13040400",
    "name": "\u6444\u5F71"
  }, {
    "id": "13040500",
    "name": "\u4E66\u6CD5\u5B66"
  }, {
    "id": "13050100",
    "name": "\u827A\u672F\u8BBE\u8BA1\u5B66"
  }, {
    "id": "13050200",
    "name": "\u89C6\u89C9\u4F20\u8FBE\u8BBE\u8BA1"
  }, {
    "id": "13050300",
    "name": "\u73AF\u5883\u8BBE\u8BA1"
  }, {
    "id": "13050400",
    "name": "\u4EA7\u54C1\u8BBE\u8BA1"
  }, {
    "id": "13050500",
    "name": "\u670D\u88C5\u4E0E\u670D\u9970\u8BBE\u8BA1"
  }]
};

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageRadio.__proto__ || Object.getPrototypeOf(PageRadio)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "keyWord", "searchValue", "isOpened", "searchList", "totalScore", "itemPicker", "itemPick1", "itemPick2", "checkBox1", "checkBox2", "selectValues", "educationList", "schoolList", "scoreList", "computerList", "englishList", "researchList", "employerList", "getScore"], _this.config = {
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
      }, function () {
        return _this.props.getScore(_this.state.totalScore);
      });
      // setTimeout(() => {
      //   this.props.getScore(this.state.totalScore)
      // }, 500);
    }, _this.getItemPick = function (itemPick1, itemPick2) {
      itemPicker = itemPick1 + itemPick2;
      _this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      });
      setTimeout(function () {
        _this.props.getScore(_this.state.totalScore);
      }, 500);
    }, _this.checkboxChange = function (e) {
      console.log(e);
      if (e.detail.value.length > 0) {
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
    }, _this.employerClick = function () {
      _this.setState({
        isOpened: true
      });
    }, _this.handleClose = function () {
      _this.setState({
        isOpened: false
      });
    }, _this.onChangeSearchBar = function (keyWord) {
      _this.setState({
        keyWord: keyWord
      });
    }, _this.searchData = function () {
      var reg = new RegExp(_this.state.keyWord);
      var arr = [];
      zhuanye.itemList.forEach(function (element) {
        if (reg.test(element.id) || reg.test(element.name)) {
          arr.push(element);
        }
      });
      _this.setState({
        searchList: arr
      });
      //return arr;
    }, _this.handleClick = function (e) {
      var employerList = _this.state.employerList.map(function (item, index) {
        //console.log(item)
        if (e != null && index == 1) {
          item.checked = true;
          checkBox2 = 3;
          return item;
        } else {
          item.checked = false;
          return item;
        }
        // item.checked = currentPage.data.schoolObj.value == item.value
        // return item
      });
      setTimeout(function () {
        _this.setState({
          employerList: employerList
        });
      }, 100);
      _this.handleClose();
      _this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      }, function () {
        return _this.props.getScore(Number(_this.state.totalScore));
      });
      // setTimeout(() => {
      //   console.log('hello')
      // },500);
    }, _this.anonymousFunc1Array = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageRadio, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PageRadio.prototype.__proto__ || Object.getPrototypeOf(PageRadio.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        //xueli : 0,xuexiao : 0,chengji : 0,yingyu : 0,jisuanji : 0,
        keyWord: '',
        searchValue: '',
        isOpened: false,
        searchList: [],
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
          text: '英语四级425分(含)以上、专业英语八级 7分',
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
      var _this2 = this;

      // console.log('componentDidMount')
      xueli = 0, xuexiao = 0, chengji = 0, yingyu = 0, jisuanji = 0, itemPicker = 0, itemPick1 = 0, itemPick2 = 0, checkBox1 = 0, checkBox2 = 0, checkBox = 0;
      this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      });
      setTimeout(function () {
        _this2.props.getScore(Number(_this2.state.totalScore));
      }, 500);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this3 = this;

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
          _this3.setState({
            schoolList: schoolList
          });
        }, 100);
      }
      // console.log('ssss')
      this.setState({
        totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
      });
      setTimeout(function () {
        _this3.props.getScore(_this3.state.totalScore);
      }, 500);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      this.anonymousFunc0 = function () {
        _index2.default.navigateTo({ url: '/pages/component/atIndex/atIndex' });
      };

      var anonymousState__temp = function anonymousState__temp(itemPick1, itemPick2) {
        return _this4.getItemPick(itemPick1, itemPick2);
      };
      //console.log('this.page',this.page)
      //console.log(this.onLoad())


      var loopArray0 = this.__state.searchList.map(function (item, __index1) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        _this4.anonymousFunc1Array[__index1] = function () {
          return _this4.handleClick(item.$original);
        };

        return {
          $original: item.$original
        };
      });

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(__index1, e) {
      ;
      this.anonymousFunc1Array[__index1] && this.anonymousFunc1Array[__index1](e);
    }
  }]);

  return PageRadio;
}(_index.Component), _class.properties = {
  "getScore": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["radioChange", "anonymousFunc0", "checkboxChange", "employerClick", "handleClose", "onChangeSearchBar", "searchData", "anonymousFunc1"], _temp2);
exports.default = PageRadio;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PageRadio));
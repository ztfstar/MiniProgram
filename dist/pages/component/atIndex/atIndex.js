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

var schoolData = {
  "school": [{
    "title": "A",
    "key": "A",
    "items": [{
      "name": "\u5B89\u5FBD\u5927\u5B66"
    }]
  }, {
    "title": "B",
    "key": "B",
    "items": [{
      "name": "\u5317\u4EAC\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5317\u4EAC\u822A\u7A7A\u822A\u5929\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5317\u4EAC\u7406\u5DE5\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5317\u4EAC\u5E08\u8303\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5317\u4EAC\u4EA4\u901A\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u5DE5\u4E1A\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u79D1\u6280\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u5316\u5DE5\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u90AE\u7535\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u6797\u4E1A\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u534F\u548C\u533B\u5B66\u9662"
    }, {
      "name": "\u5317\u4EAC\u4E2D\u533B\u836F\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u5916\u56FD\u8BED\u5927\u5B66"
    }, {
      "name": "\u5317\u4EAC\u4F53\u80B2\u5927\u5B66"
    }]
  }, {
    "title": "C",
    "key": "C",
    "items": [{
      "name": "\u957F\u5B89\u5927\u5B66"
    }, {
      "name": "\u91CD\u5E86\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u6210\u90FD\u7406\u5DE5\u5927\u5B66"
    }, {
      "name": "\u6210\u90FD\u4E2D\u533B\u836F\u5927\u5B66"
    }]
  }, {
    "title": "D",
    "key": "D",
    "items": [{
      "name": "\u7535\u5B50\u79D1\u6280\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u7535\u4FE1\u79D1\u5B66\u6280\u672F\u7B2C\u4E00\u7814\u7A76\u6240"
    }, {
      "name": "\u5BF9\u5916\u7ECF\u6D4E\u8D38\u6613\u5927\u5B66"
    }, {
      "name": "\u5927\u8FDE\u7406\u5DE5\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5927\u8FDE\u6D77\u4E8B\u5927\u5B66"
    }, {
      "name": "\u4E1C\u5317\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E1C\u534E\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E1C\u5357\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E1C\u5317\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u4E1C\u5317\u519C\u4E1A\u5927\u5B66"
    }, {
      "name": "\u4E1C\u5317\u6797\u4E1A\u5927\u5B66"
    }]
  }, {
    "title": "F",
    "key": "F",
    "items": [{
      "name": "\u798F\u5DDE\u5927\u5B66"
    }, {
      "name": "\u590D\u65E6\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "G",
    "key": "G",
    "items": [{
      "name": "\u8D35\u5DDE\u5927\u5B66"
    }, {
      "name": "\u5E7F\u5DDE\u4E2D\u533B\u836F\u5927\u5B66"
    }, {
      "name": "\u5E7F\u897F\u5927\u5B66"
    }, {
      "name": "\u56FD\u9632\u79D1\u6280\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "H",
    "key": "H",
    "items": [{
      "name": "\u6E56\u5357\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u6E56\u5357\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u6D77\u519B\u519B\u533B\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u6D77\u5357\u5927\u5B66"
    }, {
      "name": "\u6CB3\u6D77\u5927\u5B66"
    }, {
      "name": "\u6CB3\u5317\u5DE5\u4E1A\u5927\u5B66"
    }, {
      "name": "\u6CB3\u5357\u5927\u5B66"
    }, {
      "name": "\u54C8\u5C14\u6EE8\u5DE5\u4E1A\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u54C8\u5C14\u6EE8\u5DE5\u7A0B\u5927\u5B66"
    }, {
      "name": "\u5408\u80A5\u5DE5\u4E1A\u5927\u5B66"
    }, {
      "name": "\u534E\u5357\u7406\u5DE5\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u534E\u4E1C\u7406\u5DE5\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u534E\u4E1C\u5E08\u8303\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u534E\u4E2D\u79D1\u6280\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u534E\u4E1C\u653F\u6CD5\u5927\u5B66"
    }, {
      "name": "\u534E\u5317\u7535\u529B\u5927\u5B66"
    }, {
      "name": "\u534E\u4E2D\u519C\u4E1A\u5927\u5B66"
    }, {
      "name": "\u534E\u4E2D\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u534E\u5357\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u534E\u4E1C\u8BA1\u7B97\u6280\u672F\u7814\u7A76\u6240"
    }]
  }, {
    "title": "J",
    "key": "J",
    "items": [{
      "name": "\u6C5F\u5357\u5927\u5B66"
    }, {
      "name": "\u66A8\u5357\u5927\u5B66"
    }, {
      "name": "\u6280\u672F\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u5409\u6797\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "K",
    "key": "K",
    "items": [{
      "name": "\u7A7A\u519B\u519B\u533B\u5927\u5B66"
    }, {
      "name": "\u7A7A\u95F4\u79D1\u5B66\u4E0E\u5E94\u7528\u7814\u7A76\u4E2D\u5FC3"
    }, {
      "name": "\u79D1\u6280\u653F\u7B56\u4E0E\u7BA1\u7406\u79D1\u5B66\u7814\u7A76\u751F"
    }]
  }, {
    "title": "L",
    "key": "L",
    "items": [{
      "name": "\u8FBD\u5B81\u5927\u5B66"
    }, {
      "name": "\u5170\u5DDE\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "N",
    "key": "N",
    "items": [{
      "name": "\u5B81\u590F\u5927\u5B66"
    }, {
      "name": "\u5B81\u6CE2\u5927\u5B66"
    }, {
      "name": "\u5357\u5F00\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5357\u4EAC\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5357\u4EAC\u822A\u7A7A\u822A\u5929\u5927\u5B66"
    }, {
      "name": "\u5357\u4EAC\u7406\u5DE5\u5927\u5B66"
    }, {
      "name": "\u5357\u4EAC\u90AE\u7535\u5927\u5B66"
    }, {
      "name": "\u5357\u4EAC\u6797\u4E1A\u5927\u5B66"
    }, {
      "name": "\u5357\u4EAC\u4E2D\u533B\u836F\u5927\u5B66"
    }, {
      "name": "\u5357\u4EAC\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u5357\u660C\u5927\u5B66"
    }, {
      "name": "\u5357\u4EAC\u5929\u6587\u4EEA\u5668\u7814\u5236\u4E2D\u5FC3"
    }, {
      "name": "\u5185\u8499\u53E4\u5927\u5B66"
    }]
  }, {
    "title": "Q",
    "key": "Q",
    "items": [{
      "name": "\u9752\u6D77\u5927\u5B66"
    }, {
      "name": "\u6E05\u534E\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "S",
    "key": "S",
    "items": [{
      "name": "\u9996\u90FD\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u9655\u897F\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u82CF\u5DDE\u5927\u5B66"
    }, {
      "name": "\u77F3\u6CB3\u5B50\u5927\u5B66"
    }, {
      "name": "\u6C34\u571F\u4FDD\u6301\u4E0E\u751F\u6001\u73AF\u5883\u7814\u7A76\u4E2D\u5FC3"
    }, {
      "name": "\u5C71\u4E1C\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u56DB\u5DDD\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u56DB\u5DDD\u519C\u4E1A\u5927\u5B66"
    }, {
      "name": "\u53A6\u95E8\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u79D1\u6280\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u4EA4\u901A\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u6D77\u6D0B\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u4E2D\u533B\u836F\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u5916\u56FD\u8BED\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u8D22\u7ECF\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u4F53\u80B2\u5B66\u9662",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u97F3\u4E50\u5B66\u9662",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u793E\u4F1A\u79D1\u5B66\u9662",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E0A\u6D77\u5E94\u7528\u6280\u672F\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u5065\u5EB7\u533B\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u5E08\u8303\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u5BF9\u5916\u7ECF\u8D38\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u6D77\u5173\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u620F\u5267\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u516C\u5B89\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u7406\u5DE5\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u6D77\u4E8B\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u7535\u529B\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u5316\u5DE5\u7814\u7A76\u9662"
    }, {
      "name": "\u4E0A\u6D77\u8239\u8236\u8FD0\u8F93\u79D1\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u751F\u7269\u5236\u54C1\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u8239\u8236\u8BBE\u5907\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u8239\u7528\u67F4\u6CB9\u673A\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u8239\u8236\u7535\u5B50\u8BBE\u5907\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u5E02\u8BA1\u7B97\u6280\u672F\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u56FD\u9645\u95EE\u9898\u7814\u7A76\u9662"
    }, {
      "name": "\u4E0A\u6D77\u5DE5\u7A0B\u6280\u672F\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u7ACB\u4FE1\u4F1A\u8BA1\u91D1\u878D\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u7535\u673A\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u6749\u8FBE\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u653F\u6CD5\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u7B2C\u4E8C\u5DE5\u4E1A\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u5546\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u5EFA\u6865\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u5174\u4F1F\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u89C6\u89C9\u827A\u672F\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u5916\u56FD\u8BED\u5927\u5B66\u8D24\u8FBE\u7ECF\u6D4E\u4EBA\u6587\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u5E08\u8303\u5927\u5B66\u5929\u534E\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u7EBD\u7EA6\u5927\u5B66"
    }, {
      "name": "\u4E0A\u6D77\u56FD\u5BB6\u4F1A\u8BA1\u5B66\u9662"
    }, {
      "name": "\u4E0A\u6D77\u6750\u6599\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u53D1\u7535\u8BBE\u5907\u6210\u5957\u8BBE\u8BA1\u7814\u7A76\u9662"
    }, {
      "name": "\u4E0A\u6D77\u5185\u71C3\u673A\u7814\u7A76\u6240"
    }, {
      "name": "\u4E0A\u6D77\u6838\u5DE5\u7A0B\u7814\u7A76\u8BBE\u8BA1\u9662"
    }, {
      "name": "\u4E0A\u6D77\u822A\u5929\u6280\u672F\u7814\u7A76\u9662"
    }]
  }, {
    "title": "T",
    "key": "T",
    "items": [{
      "name": "\u592A\u539F\u7406\u5DE5\u5927\u5B66"
    }, {
      "name": "\u5929\u6D25\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u5929\u6D25\u5DE5\u4E1A\u5927\u5B66"
    }, {
      "name": "\u5929\u6D25\u533B\u79D1\u5927\u5B66"
    }, {
      "name": "\u5929\u6D25\u4E2D\u533B\u836F\u5927\u5B66"
    }, {
      "name": "\u540C\u6D4E\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "W",
    "key": "W",
    "items": [{
      "name": "\u6B66\u6C49\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u6B66\u6C49\u7406\u5DE5\u5927\u5B66"
    }, {
      "name": "\u5916\u4EA4\u5B66\u9662"
    }]
  }, {
    "title": "X",
    "key": "X",
    "items": [{
      "name": "\u897F\u5B89\u4EA4\u901A\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u897F\u5317\u5DE5\u4E1A\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u897F\u5317\u519C\u6797\u79D1\u6280\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u897F\u5357\u4EA4\u901A\u5927\u5B66"
    }, {
      "name": "\u897F\u5357\u77F3\u6CB9\u5927\u5B66"
    }, {
      "name": "\u897F\u5357\u5927\u5B66"
    }, {
      "name": "\u897F\u5357\u8D22\u7ECF\u5927\u5B66"
    }, {
      "name": "\u897F\u85CF\u5927\u5B66"
    }, {
      "name": "\u897F\u5317\u5927\u5B66"
    }, {
      "name": "\u897F\u5B89\u7535\u5B50\u79D1\u6280\u5927\u5B66"
    }, {
      "name": "\u65B0\u7586\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "Y",
    "key": "Y",
    "items": [{
      "name": "\u9065\u611F\u5E94\u7528\u7814\u7A76\u6240"
    }, {
      "name": "\u5EF6\u8FB9\u5927\u5B66"
    }, {
      "name": "\u4E91\u5357\u5927\u5B66",
      "value": 15
    }]
  }, {
    "title": "Z",
    "key": "Z",
    "items": [{
      "name": "\u90D1\u5DDE\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u6D59\u6C5F\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u4EBA\u6C11\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u5C71\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u519C\u4E1A\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u592E\u6C11\u65CF\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u6D77\u6D0B\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u5357\u5927\u5B66",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u5E94\u7528\u7269\u7406\u7814\u7A76\u6240",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u5929\u6587\u53F0",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u58F0\u5B66\u7814\u7A76\u6240\u4E1C\u6D77\u7814\u7A76\u7AD9",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u6709\u673A\u5316\u5B66\u6240",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u7845\u9178\u76D0\u7814\u7A76\u6240",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u751F\u547D\u79D1\u5B66\u7814\u7A76\u9662",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u836F\u7269\u7814\u7A76\u6240",
      "value": 15
    }, {
      "name": "\u4E2D\u79D1\u9662\u4E0A\u6D77\u5FAE\u7CFB\u7EDF\u4E0E\u4FE1\u606F\u6280\u672F\u6240",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u5149\u5B66\u7CBE\u5BC6\u673A\u68B0\u7814\u7A76\u6240",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u6280\u672F\u7269\u7406\u7814\u7A76\u6240",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E0A\u6D77\u9AD8\u7B49\u7814\u7A76\u9662",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u533B\u836F\u5DE5\u4E1A\u7814\u7A76\u603B\u9662",
      "value": 15
    }, {
      "name": "\u4E2D\u56FD\u4F20\u5A92\u5927\u5B66"
    }, {
      "name": "\u4E2D\u592E\u8D22\u7ECF\u5927\u5B66"
    }, {
      "name": "\u4E2D\u56FD\u4EBA\u6C11\u516C\u5B89\u5927\u5B66"
    }, {
      "name": "\u4E2D\u592E\u97F3\u4E50\u5B66\u9662"
    }, {
      "name": "\u4E2D\u56FD\u97F3\u4E50\u5B66\u9662"
    }, {
      "name": "\u4E2D\u592E\u7F8E\u672F\u5B66\u9662"
    }, {
      "name": "\u4E2D\u592E\u620F\u5267\u5B66\u9662"
    }, {
      "name": "\u4E2D\u56FD\u653F\u6CD5\u5927\u5B66"
    }, {
      "name": "\u4E2D\u56FD\u7F8E\u672F\u5B66\u9662"
    }, {
      "name": "\u4E2D\u56FD\u836F\u79D1\u5927\u5B66"
    }, {
      "name": "\u4E2D\u56FD\u77FF\u4E1A\u5927\u5B66"
    }, {
      "name": "\u4E2D\u56FD\u77F3\u6CB9\u5927\u5B66(\u534E\u4E1C)"
    }, {
      "name": "\u4E2D\u56FD\u5730\u5740\u5927\u5B66(\u6B66\u6C49)"
    }, {
      "name": "\u4E2D\u5357\u8D22\u7ECF\u653F\u6CD5\u5927\u5B66"
    }, {
      "name": "\u4E2D\u56FD\u5730\u8D28\u5927\u5B66(\u5317\u4EAC)"
    }, {
      "name": "\u4E2D\u56FD\u77F3\u6CB9\u5927\u5B66( \u5317\u4EAC)"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5927\u5B66"
    }, {
      "name": "\u4E2D\u56FD\u822A\u7A7A\u7814\u7A76\u6240640\u6240"
    }, {
      "name": "\u4E2D\u56FD\u8239\u8236\u53CA\u6D77\u6D0B\u5DE5\u7A0B\u8BBE\u8BA1\u7814\u7A76\u9662"
    }, {
      "name": "\u4E2D\u5171\u4E0A\u6D77\u5E02\u59D4\u515A\u6821"
    }, {
      "name": "\u4E2D\u5171\u4E2D\u592E\u515A\u6821"
    }, {
      "name": "\u4E2D\u56FD\u793E\u4F1A\u79D1\u5B66\u9662\u7814\u7A76\u751F\u9662"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6570\u5B66\u4E0E\u7CFB\u7EDF\u79D1\u5B66\u7814\u7A76\u9662"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6B66\u6C49\u5CA9\u571F\u529B\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u529B\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u9AD8\u80FD\u7269\u7406\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u58F0\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u7406\u8BBA\u7269\u7406\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u8FD1\u4EE3\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5357\u4EAC\u5929\u6587\u5149\u5B66\u6280\u672F\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6B66\u6C49\u7269\u7406\u4E0E\u6570\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u7D2B\u91D1\u5C71\u5929\u6587\u53F0"
    }, {
      "name": "\u4E2D\u79D1\u9662\u4E91\u5357\u5929\u6587\u53F0"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u56FD\u5BB6\u6388\u65F6\u4E2D\u5FC3"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u56FD\u5BB6\u5929\u6587\u53F0"
    }, {
      "name": "\u4E2D\u79D1\u9662\u65B0\u7586\u7406\u5316\u6280\u672F\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u81EA\u7136\u79D1\u5B66\u53F2\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u7406\u5316\u6280\u672F\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5316\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5E7F\u5DDE\u5316\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6210\u90FD\u6709\u673A\u5316\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u957F\u6625\u5E94\u7528\u5316\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5927\u8FDE\u5316\u5B66\u7269\u7406\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5170\u5DDE\u5316\u7269\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u8FC7\u7A0B\u5DE5\u7A0B\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u751F\u6001\u73AF\u5883\u4E2D\u5FC3"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5C71\u897F\u7164\u70AD\u5316\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u798F\u5EFA\u7269\u8D28\u7ED3\u6784\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u76D0\u6E56\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u9752\u6D77\u76D0\u6E56\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5170\u5DDE\u5730\u8D28\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u53E4\u810A\u690E\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5357\u4EAC\u5730\u8D28\u53E4\u751F\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6D4B\u91CF\u4E0E\u5730\u7403\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5927\u6C14\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5730\u7406\u79D1\u5B66\u4E0E\u8D44\u6E90\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5357\u4EAC\u5730\u7406\u4E0E\u6E56\u6CCA\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E1C\u5317\u5730\u7406\u4E0E\u519C\u4E1A\u751F\u6001\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6210\u90FD\u5C71\u5730\u707E\u5BB3\u4E0E\u73AF\u5883\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5730\u7403\u5316\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6D77\u6D0B\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5357\u6D77\u6D77\u6D0B\u7814\u7A76\u6240"
    }, {
      "name": "\u9065\u611F\u5E94\u7528\u7814\u7A76\u6240"
    }, {
      "name": "\u7A7A\u95F4\u79D1\u5B66\u4E0E\u5E94\u7528\u7814\u7A76\u4E2D\u5FC3"
    }, {
      "name": "\u4E2D\u79D1\u9662\u4E2D\u56FD\u9065\u611F\u536B\u661F\u5730\u9762\u7AD9"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5730\u8D28\u4E0E\u5730\u7403\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5BD2\u533A\u65F1\u533A\u73AF\u5883\u4E0E\u5DE5\u7A0B\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u65B0\u7586\u751F\u6001\u4E0E\u5730\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u52A8\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6606\u660E\u52A8\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u690D\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6606\u660E\u690D\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u534E\u5357\u690D\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6B66\u6C49\u690D\u7269\u56ED"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6210\u90FD\u751F\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u751F\u7269\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5FAE\u751F\u7269\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6C34\u751F\u751F\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u9057\u4F20\u4E0E\u53D1\u8093\u751F\u7269\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u897F\u5317\u9AD8\u539F\u751F\u7269\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u6B66\u6C49\u75C5\u6BD2\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5FC3\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5357\u4EAC\u571F\u58E4\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6C88\u9633\u5E94\u7528\u751F\u6001\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u897F\u53CC\u7248\u7EB3\u70ED\u5E26\u690D\u7269\u56ED"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u8BA1\u7B97\u6280\u672F\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6C88\u9633\u8BA1\u7B97\u6280\u672F\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5DE5\u7A0B\u70ED\u7269\u7406"
    }, {
      "name": "\u4E2D\u79D1\u9662\u534A\u5BFC\u4F53\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u7535\u5B50\u5B66\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u957F\u6625\u5149\u5B66\u7CBE\u5BC6\u673A\u68B0\u4E0E\u7269\u7406\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u897F\u5B89\u5149\u5B66\u7CBE\u5BC6\u673A\u68B0\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u91D1\u5C5E\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u81EA\u52A8\u5316\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6C88\u9633\u81EA\u52A8\u5316\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u7535\u5DE5\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5E7F\u5DDE\u80FD\u6E90\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u8F6F\u4EF6\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5149\u7535\u6280\u672F\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6210\u90FD\u8BA1\u7B97\u673A\u5E94\u7528\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u6587\u732E\u5EE3\u62A5\u4E2D\u5FC3"
    }, {
      "name": "\u4E2D\u79D1\u9662\u9057\u4F20\u53D1\u8093\u6240\u519C\u4E1A\u8D44\u6E90\u4E2D\u5FC3"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5730\u7403\u73AF\u5883\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5FAE\u7535\u5B50\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u8BA1\u7B97\u673A\u7F51\u7EDC\u4FE1\u606F\u4E2D\u5FC3"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u4E9A\u70ED\u5E26\u519C\u4E1A\u751F\u6001\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5357\u4EAC\u5929\u6587\u4EEA\u5668\u7814\u5236\u4E2D\u5FC3"
    }, {
      "name": "\u4E2D\u79D1\u9662\u5E7F\u5DDE\u5730\u7403\u5316\u5B66\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u79D1\u9662\u56FD\u5BB6\u5929\u6587\u53F0\u4E4C\u9C81\u6728\u9F50\u5929\u6587\u7AD9"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5317\u4EAC\u57FA\u56E0\u7EC4\u7814\u7A76\u6240"
    }, {
      "name": "\u4E2D\u56FD\u79D1\u5B66\u9662\u5408\u80A5\u7269\u8D28\u79D1\u5B66\u7814\u7A76\u9662"
    }]
  }]
};

var atIndexes = (_temp2 = _class = function (_BaseComponent) {
  _inherits(atIndexes, _BaseComponent);

  function atIndexes() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, atIndexes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = atIndexes.__proto__ || Object.getPrototypeOf(atIndexes)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["list"], _this.onClick = function (e) {
      var pages = _index2.default.getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
      var prevPage = pages[pages.length - 2];
      //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
      prevPage.setData({
        schoolObj: e
      });
      // console.log(this)
      //上一个页面内执行setData操作，将我们想要的信息保存住。当我们返回去的时候，页面已经处理完毕。
      //  console.log('prevPage ',prevPage)
      //console.log('pages ',pages)
      _index2.default.navigateBack({ delta: 1 });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(atIndexes, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(atIndexes.prototype.__proto__ || Object.getPrototypeOf(atIndexes.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var list = schoolData.school;
      Object.assign(this.__state, {
        list: list
      });
      return this.__state;
    }
  }]);

  return atIndexes;
}(_index.Component), _class.properties = {}, _class.$$events = ["onClick"], _temp2);


atIndexes.defaultProps = {
  aaa: 'hello'
};
exports.default = atIndexes;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(atIndexes, true));
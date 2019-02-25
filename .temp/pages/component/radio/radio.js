import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text, Radio, Label, RadioGroup, CheckboxGroup, Checkbox } from '@tarojs/components';
import Picker1 from '../picker/picker';
import './radio.scss';
let xueli = 0,
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
export default class PageRadio extends Component {
  constructor() {
    super(...arguments);

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
        text: '理科类专业：计算机高级水平或免予此项要求的专业（7分）',
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
        text: 'CET-6级证书或成绩达到425分(含)以上、专业英语八级 8分',
        checked: false
      }, {
        value: '7',
        text: 'CET-4级证书或成绩达到425分(含)以上、专业英语八级 7分',
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
        text: '引进重点领域人才（3分）',
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
  componentDidMount() {
    xueli = 0, xuexiao = 0, chengji = 0, yingyu = 0, jisuanji = 0, itemPicker = 0, itemPick1 = 0, itemPick2 = 0, checkBox1 = 0, checkBox2 = 0, checkBox = 0;
  }
  render() {
    return <View className="components-page">
        <View className="components-page__body">
            
            
            <View className="example-body">
              <View className="example-header">
                <Text>毕业生基本要素之最高学位、学历</Text>
              </View>
                <View className="example-body__radios">
                  <RadioGroup onChange={this.radioChange} id="xueli">
                    {this.state.educationList.map((item, i) => {
                return <Label className="example-body__radios-item" for={i} key={i}>
                          <Radio name="radio" value={item.value} checked={item.checked}>
                            {item.text}
                          </Radio>
                        </Label>;
              })}
                  </RadioGroup>
                </View>
            </View>


            
            <View className="example-body">
            <View className="example-header">
              <Text className="sortName">毕业生基本要素之毕业学校</Text>
            </View>
              <View className="example-body__radios">
                <RadioGroup onChange={this.radioChange} id="xuexiao">
                  {this.state.schoolList.map((item, i) => {
                return <Label className="example-body__radios-item" for={i} key={i}>
                        <Radio name="radio" value={item.value} checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>;
              })}
                </RadioGroup>
              </View>
            </View>


          
            <View className="example-body">
            <View className="example-header">
              <Text className="sortName">毕业生基本要素之学习成绩</Text>
            </View>
              <View className="example-body__radios">
                <RadioGroup onChange={this.radioChange} id="chengji">
                  {this.state.scoreList.map((item, i) => {
                return <Label className="example-body__radios-item" for={i} key={i}>
                        <Radio name="radio" value={item.value} checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>;
              })}
                </RadioGroup>
              </View>
            </View>




          <View className="example-body">
            <View className="example-header">
              <Text className="sortName">毕业生基本要素之外语水平</Text>
            </View>
              <View className="example-body__radios">
                <RadioGroup onChange={this.radioChange} id="yingyu">
                  {this.state.englishList.map((item, i) => {
                return <Label className="example-body__radios-item" for={i} key={i}>
                        <Radio name="radio" value={item.value} checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>;
              })}
                </RadioGroup>
              </View>
            </View>   


           <View className="example-body">
            <View className="example-header">
              <Text className="sortName">毕业生基本要素之计算机水平</Text>
            </View>
              <View className="example-body__radios">
                <RadioGroup onChange={this.radioChange} id="jisuanji">
                  {this.state.computerList.map((item, i) => {
                return <Label className="example-body__radios-item" for={i} key={i}>
                        <Radio name="radio" value={item.value} checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>;
              })}
                </RadioGroup>
              </View>
            </View>
            
            <View><Picker1 getItemPick={(itemPick1, itemPick2) => this.getItemPick(itemPick1, itemPick2)} /></View>

            <View className="example-body">
            <View className="example-header">
              <Text className="sortName"> 科创、国家就业项目及特殊院校毕业生</Text>
            </View>
              <View className="example-body__radios">
              
                 <CheckboxGroup name="checkbox" onChange={this.checkboxChange} id="sigcheckbox">
                    {this.state.researchList.map(item => {
                return <Label className="checkbox-list__label" for={item.value} key={item.value}>
                          <Checkbox style="padding-top:5px" className="checkbox-list__checkbox" value={item.value} checked={item.checked}>
                            {item.text}                           
                          </Checkbox>
                          
                        </Label>;
              })}
                  </CheckboxGroup>
              </View>
            </View>

         
         <View className="example-body">
            <View className="example-header">
              <Text className="sortName"> 用人单位要素分</Text>
            </View>
              <View className="example-body__radios">
              <View className="checkbox-list">
              <CheckboxGroup name="checkbox" onChange={this.checkboxChange} id="mulcheckbox">
                    {this.state.employerList.map(item => {
                  return <Label className="checkbox-list__label" for={item.value} key={item.value}>
                          <Checkbox className="checkbox-list__checkbox" value={item.value} checked={item.checked}>
                            {item.text}                           
                            <View><Text className="text-checkBox">{item.desc}</Text></View>
                          </Checkbox>
                          
                        </Label>;
                })}
                  </CheckboxGroup>
                  </View>
              </View>
            </View>
          

        </View>


      </View>;
  }
  config = {
    navigationBarTitleText: '应届生落户积分计算'
  };
  radioChange = e => {
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
    this.setState({
      totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
    });
    setTimeout(() => {
      this.props.getScore(this.state.totalScore);
    }, 500);
  };
  getItemPick = (itemPick1, itemPick2) => {
    itemPicker = itemPick1 + itemPick2;
    this.setState({
      totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
    });
    setTimeout(() => {
      this.props.getScore(this.state.totalScore);
    }, 500);
  };
  checkboxChange = e => {
    if (e.detail.value.length > 0) {
      console.log(e);
      if (e.currentTarget.id == 'sigcheckbox') {
        // this.setState({
        checkBox1 = e.detail.value.reduce((total, num) => {
          return Number(total) + Number(num);
        });
        // })
      } else if (e.currentTarget.id == 'mulcheckbox') {
        //this.setState({
        checkBox2 = e.detail.value.reduce((total, num) => {
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
    this.setState({
      totalScore: Number(xueli) + Number(xuexiao) + Number(chengji) + Number(yingyu) + Number(jisuanji) + Number(itemPicker) + Number(checkBox1) + Number(checkBox2)
    });
    setTimeout(() => {
      this.props.getScore(Number(this.state.totalScore));
    }, 500);
  };
}
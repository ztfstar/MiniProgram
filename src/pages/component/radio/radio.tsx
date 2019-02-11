
import { Component } from '@tarojs/taro'
import { View, Text, Radio, Label, RadioGroup ,Picker,CheckboxGroup,Checkbox} from '@tarojs/components'
import Picker1 from '../picker/picker'
import CheckBox from '../checkBox/checkBox'
import Taro from '@tarojs/taro';
export default class PageRadio extends Component {

  config = {
    navigationBarTitleText: '应届生落户积分计算'
  }

  constructor() {
    super(...arguments)
  }

  state = {
    educationList: [
      {
        value: '27',
        text: '博士、研究生（27分）',
        checked: false
      },
      {
        value: '24',
        text: '硕士、研究生（24分）',
        checked: false
      },
      {
        value: '21',
        text: '本科生（21分）',
        checked: false
      }
    ],
    schoolList:[
      {
        value: '15',
        text: '第一类高校及研究生培养单位（15分）',
        checked: false
      },
      {
        value: '12',
        text: '第二类高校及研究生培养单位（12分）',
        checked: false
      },
      {
        value: '8',
        text: '第三类高校及研究生培养单位（8分）',
        checked: false
      }
    ],
    scoreList:[
      {
        value: '8',
        text: '一级（成绩排名前25%）（8分）',
        checked: false
      },
      {
        value: '6',
        text: '二级（成绩排名前26%-50%）（6分）',
        checked: false
      },
      {
        value: '4',
        text: '三级（成绩排名前51%-75%）（4分）',
        checked: false
      },
      {
        value: '2',
        text: '四级（成绩排名前76%-100%）（2分）',
        checked: false
      }
    ],
    computerList:[
      {
        value: '7',
        text: '毕业研究生（7分）',
        checked: false
      },
      {
        value: '7',
        text: '计算机高级水平或免予此项要求的专业（7分）',
        checked: false
      },
      {
        value: '7',
        text: '文科类专业：计算机中级或省级二级水平（7分）',
        checked: false
      },
      {
        value: '6',
        text: '理科类专业：计算机中级或省级二级水平（6分）',
        checked: false
      },
      {
        value: '6',
        text: '文科类专业：计算机初级或省级一级水平（6分）',
        checked: false
      },
      {
        value: '6',
        text: '四级（成绩排名前76%-100%）（2分）',
        checked: false
      }
    ],
    englishList:[
      {
        value: '8',
        text: 'CET-6级证书或成绩达到425分(含)以上、专业英语八级 8分',
        checked: false
      },
      {
        value: '7',
        text: 'CET-4级证书或成绩达到425分(含)以上、专业英语八级 7分',
        checked: false
      },
      {
        value: '7',
        text: '外语类、艺术类、体育类专业外语课程合格 7分',
        checked: false
      },
    ],
    englishList:[
      {
        value: '8',
        text: 'CET-6级证书或成绩达到425分(含)以上、专业英语八级 8分',
        checked: false
      },
      {
        value: '7',
        text: 'CET-4级证书或成绩达到425分(含)以上、专业英语八级 7分',
        checked: false
      },
      {
        value: '7',
        text: '外语类、艺术类、体育类专业外语课程合格 7分',
        checked: false
      },
    ],
    researchList:[
      {
        value: '5',
        text: '最高学历就读期间获得相应的发明专利（5分）',
        checked: false
      },
      {
        value: '5',
        text: '上海高校毕业生参加西部计划服务期满（5分）',
        checked: false
      },
      {
        value: '5',
        text: '清华、北大本科毕业生 直接落户',
        checked: false
      },{
        value: '5',
        text: '最高学历在上海高校就读（2分）',
        checked: false
      },
    ],
    employerList:[
      {
        value: '5',
        text: '基本要素（5分）',
        checked: false,
        desc:'用人单位招聘高校毕业生行为符合诚信规范，并与毕业生签订劳动或聘用合同期薇一年及以上的就业协议，劳动派遣方式除外'
      },
      {
        value: '3',
        text: '引进重点领域人才（3分）',
        checked: false,
        desc: '用人单位录用上海市重点发展领域所需学科毕业生',
      },
      
      {
        value: '3',
        text: '引进重点领域人才（3分）',
        checked: false,
        desc: '用人单位录用上海市重点发展领域所需学科中的教育部、上海市、上海市教委重点学科毕业研究生',

      },

      {
        value: '3',
        text: '承担重大项目（3分）',
        checked: false,
        desc: '用人单位承担国家和上海经济社会发展重大项目且录用的毕业生专业与行业相匹配',
      },

      {
        value: '3',
        text: '承担重大项目（3分）',
        checked: false,
        desc: '用人单位为远郊地区教育、卫生、农业等社会公益事业单位',
      },

      {
        value: '5',
        text: '自主创业（5分）',
        checked: false,
        desc: '在校或休学期间创业，企业经营情况良好',
      },
    ]
  }

  radioChange = e => {
    console.log(e)
    // const list = this.state.educationList.map(item => {
    //   item.checked = item.value == e.detail.value
    //   console.log(item,e.detail.value)
    //   return item
    // })
  
    // this.setState({
    //   selectValue: e.detail.value
    // })
  }
  checkboxChange = e => {
    // const list = this.state.employerList.map(item => {
    //   item.checked = e.detail.value.indexOf(item.value) >= 0
    //   return item
    // })
    this.setState({
     // list,
      selectValues: e.detail.value
    })
  }
  render() {
    return (
      <View className='components-page'>
        <View className='components-page__body'>
          <View></View>
            <View className='example-body'>
              <View className='example-header'>
                <Text>毕业生基本要素之最高学位、学历</Text>
              </View>
                <View className='example-body__radios'>
                  <RadioGroup onChange={this.radioChange}>
                    {this.state.educationList.map((item, i) => {
                      return (
                        <Label className='example-body__radios-item' for={i} key={i}>
                          <Radio
                            name='radio'
                            value={item.value}
                            checked={item.checked}>
                            {item.text}
                          </Radio>
                        </Label>
                      )
                    })}
                  </RadioGroup>
                </View>
            </View>


            
            <View className='example-body'>
            <View className='example-header'>
              <Text className='sortName'>毕业生基本要素之毕业学校</Text>
            </View>
              <View className='example-body__radios'>
                <RadioGroup onChange={this.radioChange}>
                  {this.state.schoolList.map((item, i) => {
                    return (
                      <Label className='example-body__radios-item' for={i} key={i}>
                        <Radio
                          name='radio'
                          value={item.value}
                          checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            </View>


          
            <View className='example-body'>
            <View className='example-header'>
              <Text className='sortName'>毕业生基本要素之学习成绩</Text>
            </View>
              <View className='example-body__radios'>
                <RadioGroup onChange={this.radioChange}>
                  {this.state.scoreList.map((item, i) => {
                    return (
                      <Label className='example-body__radios-item' for={i} key={i}>
                        <Radio
                          name='radio'
                          value={item.value}
                          checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            </View>





           <View className='example-body'>
            <View className='example-header'>
              <Text className='sortName'>毕业生基本要素之计算机水平</Text>
            </View>
              <View className='example-body__radios'>
                <RadioGroup onChange={this.radioChange}>
                  {this.state.computerList.map((item, i) => {
                    return (
                      <Label className='example-body__radios-item' for={i} key={i}>
                        <Radio
                          name='radio'
                          value={item.value}
                          checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            </View>
            
            <View><Picker1/></View>

            <View className='example-body'>
            <View className='example-header'>
              <Text className='sortName'> 科创、国家就业项目及特殊院校毕业生</Text>
            </View>
              <View className='example-body__radios'>
              {/* <RadioGroup onChange={this.radioChange}>
                  {this.state.researchList.map((item, i) => {
                    return (
                      <Label className='example-body__radios-item' for={i} key={i}>
                        <Radio
                          name='radio'
                          value={item.value}
                          checked={item.checked}>
                          {item.text}
                        </Radio>
                      </Label>
                    )
                  })}
                </RadioGroup> */}
                 <CheckboxGroup name='checkbox' onChange={this.checkboxChange}>
                    {this.state.researchList.map(item => {
                      return (
                        <Label
                          className='checkbox-list__label'
                          for={item.value}
                          key={item.value}>
                          <Checkbox
                            className='checkbox-list__checkbox'
                            value={item.value}
                            checked={item.checked}>
                            {item.text}                           
                          </Checkbox>
                          
                        </Label>
                      )
                    })}
                  </CheckboxGroup>
              </View>
            </View>

         
         <View className='example-body'>
            <View className='example-header'>
              <Text className='sortName'> 用人单位要素分</Text>
            </View>
              <View className='example-body__radios'>
              <View className='checkbox-list'>
              <CheckboxGroup name='checkbox' onChange={this.checkboxChange}>
                    {this.state.employerList.map(item => {
                      return (
                        <Label
                          className='checkbox-list__label'
                          for={item.value}
                          key={item.value}>
                          <Checkbox
                            className='checkbox-list__checkbox'
                            value={item.value}
                            checked={item.checked}>
                            {item.text}                           
                            <View ><Text className='text-checkBox'>{item.desc}</Text></View>
                          </Checkbox>
                          
                        </Label>
                      )
                    })}
                  </CheckboxGroup>
                  </View>
              </View>
            </View>
          

        </View>
      </View >
    )
  }
}


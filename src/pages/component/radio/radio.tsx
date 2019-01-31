
import { Component } from '@tarojs/taro'
import { View, Text, Radio, Label, RadioGroup ,Picker} from '@tarojs/components'

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
    ]

  }

  radioChange = e => {
    console.log(e)
    // const list = this.state.educationList.map(item => {
    //   item.checked = item.value == e.detail.value
    //   console.log(item,e.detail.value)
    //   return item
    // })
  
    this.setState({
      //list,
      selectValue: e.detail.value
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__body'>
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



        </View>
      </View >
    )
  }
}

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
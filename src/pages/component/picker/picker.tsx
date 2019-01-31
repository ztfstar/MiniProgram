import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
export default class PagePicker extends Component {
  state = {
    honor: ['国家级（10分）', '省(自治区、直辖市)级（5分）', '学校级(每次1分，不超过2分)（1分）'],
    honorChecked: '国家级（10分）（默认）',
    learning:['一等奖（10分）','二等奖（8分）','三等奖（6分）'],
    learningChecked:'一等奖（10分）'
  }
onChange = e => {
  console.log(e)
    this.setState({
      honorChecked: this.state.honor[e.detail.value],
      learningChecked: this.state.learning[e.detail.value]
    })
  }

render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>导向要素</Text>
            </View>

            <View>
              <Picker mode='selector' range={this.state.honor} onChange={this.onChange}>
                <View className='picker'>
                  荣誉称号：<Text className='itemText'>{this.state.honorChecked}</Text>
                </View>
              </Picker>
            </View>

            <View>
              <Picker mode='selector' range={this.state.learning} onChange={this.onChange}>
                <View className='picker'>
                  学术、文体竞赛获奖：<Text className='itemText'>{this.state.learningChecked}</Text>
                </View>
              </Picker>
            </View>

          </View>
        
        </View>
      </View>
    )
  }
}

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtRadio } from 'taro-ui'

import { AtCheckbox } from 'taro-ui'
export default class list extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      checkedList: ['list1']
    }
    
    this.checkboxOption = [{
        value: '27',
        label: '博士研究生（27分）',
        desc: ''
      },{
        value: '24',
        label: '硕士研究生（24分）'
      },{
        value: '21',
        label: '本科生（21分）',
      },{
        value: 'list4',
        label: 'vivo NEX',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    }]
  }
  handleChange (value) {
    this.setState({
      checkedList: value
    })
  }
  render () {
    return (
        
      <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}
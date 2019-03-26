import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Tab1List from '../../component/List/tab1List';
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    const tabList = [{ title: '要闻' }, { title: '酷工作' }, { title: '交易' }]
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='padding: 10px 10px;background-color: #FAFBFC;' ><Tab1List/></View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
        <View style='padding: 10px 10px;background-color: #FAFBFC;text-align: center;' ><Tab1List/></View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
        <View style='padding: 10px 10px;background-color: #FAFBFC;text-align: center;' ><Tab1List/></View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
export default class PagePicker extends Component {
  state = {
    honor: ['国家级（10分）', '省(自治区、直辖市)级（5分）', '学校级(每次1分，不超过2分)（1分）'],
    honorChecked: '国家级（10分）',
    learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（10分）','二等奖（8分）','三等奖（6分）']],
    learningChecked:''
  }
onChange1 = e => {
    this.setState({
      honorChecked: this.state.honor[e.detail.value],
    })
  }
  onChange2 = e => {
    console.log(e)
    this.setState({
      //learningChecked: this.state.learning[0][e.detail.value[0]]+'&'+this.state.learning[1][e.detail.value[1]],
      learningChecked: (e.detail.value[0] == 0?'全国性':'地方赛区')+' & '+this.state.learning[1][e.detail.value[1]],
    })
    
    
  }
  bindMultiPickerColumnChange = e => {
     //console.log(e.detail)//column 表示的是第几列，value是某一列的第几个值，表示下标
    // switch(e.detail.column){
    //   case 0:
    //   switch(e.detail.value){
    //     case 0:
    //     //console.log(e.detail.value)//column 表示的是第几列，value是某一列的第几个值，表示下标

    //     this.setState({
    //       learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（10分）','二等奖（8分）','三等奖（6分）']],
    //     })
    //     case 1:
    //     //console.log(e.detail.value)//column 表示的是第几列，value是某一列的第几个值，表示下标

    //     this.setState({
    //       learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（5分）','二等奖（3分）','三等奖（1分）']],
    //     })
    //   }
    //   break
    if(e.detail.column === 0){
      if(e.detail.value === 0){
        this.setState({
        learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（10分）','二等奖（8分）','三等奖（6分）']],
        })
      }else{
        this.setState({
          learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（5分）','二等奖（3分）','三等奖（1分）']],
          })
      }
    }
  }
render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>毕业生导向要素</Text>
            </View>

            <View>
              <Picker mode='selector' range={this.state.honor} onChange={this.onChange1}>
                <View className='picker'>
                  荣誉称号：<Text className='itemText'>{this.state.honorChecked}</Text>
                </View>
              </Picker>
            </View>

            <View>
              <Picker mode='multiSelector' range={this.state.learning} onChange={this.onChange2} onColumnChange={this.bindMultiPickerColumnChange}>
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

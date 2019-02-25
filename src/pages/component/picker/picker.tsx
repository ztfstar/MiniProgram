import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import './picker.scss'

export default class PagePicker extends Component {
  state = {
    honor: ['国家级（10分）', '省(自治区、直辖市)级（5分）', '学校级(每次1分，不超过2分)（1分）'],
    honorChecked: '',
    learning:[['上述全国性比赛奖项','上述全国性比赛地方赛区'],['一等奖（10分）','二等奖（8分）','三等奖（6分）']],
    learningChecked:'',
    itemPick1:0,
    itemPick2:0
  }
onChange = e => {
  if(e.currentTarget.id=='selector'){
    if(e.detail.value == 0){
      this.setState({
        itemPick1:10
      })
    }else if(e.detail.value == 1){
      this.setState({
        itemPick1:5
      })
    }else{
      this.setState({
        itemPick1:1
      })
    }
    this.setState({
      honorChecked: this.state.honor[e.detail.value],
    })
  }else{
    if(e.detail.value.toString() == [0,0].toString()){
      this.setState({
        itemPick2:10
      })
    }else if(e.detail.value.toString() == [0,1].toString()){
      this.setState({
        itemPick2:8
      })
    }else if(e.detail.value.toString() == [0,2].toString()){
      this.setState({
        itemPick2:6
      })
    }else if(e.detail.value.toString() == [1,0].toString()){
      this.setState({
        itemPick2:5
      })
    }else if(e.detail.value.toString() == [1,1].toString()){
      this.setState({
        itemPick2:3
      })
    }else{
      this.setState({
        itemPick2:1
      })
    }
    this.setState({
      learningChecked: (e.detail.value[0] == 0?'全国性':'地方赛区')+' & '+this.state.learning[1][e.detail.value[1]],
    })
  }
  setTimeout(()=>{
    
    this.props.getItemPick(this.state.itemPick1,this.state.itemPick2)
  },500)
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
              <Picker mode='selector' range={this.state.honor} onChange={this.onChange} id='selector'>
                <View className='picker'>
                  荣誉称号：<Text className='itemText'>{this.state.honorChecked}</Text>
                </View>
              </Picker>
            </View>

            <View>
              <Picker mode='multiSelector' range={this.state.learning} onChange={this.onChange} onColumnChange={this.bindMultiPickerColumnChange} id='multiSelector'>
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

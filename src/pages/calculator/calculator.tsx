import Taro, { Component } from '@tarojs/taro'
import { View ,Button ,Image,Text} from '@tarojs/components';
import Radio1 from '../component/radio/radio'
import { AtFloatLayout } from "taro-ui"
import './calculator.scss'
export default class Calculator extends Component {
 state={
   score:'',
   isOpened:false
 }
  getScore = (score)=>{
    this.setState({score});
  }
  btn = ()=>{
    console.log('diandaowol')
    this.setState({
      isOpened:true
    })
  }

  handleClose=()=>{
    this.setState({
      isOpened:false
    })
  }
  componentDidMount(){
    this.setState({
      score:0
    })
  }

  

render () {
    return (
      
      <View className='container'>

        <View className='page-body' >
         <Radio1 getScore={score=>this.getScore(score)}/>
        </View>

        <View className='footer'>
          <Button type= 'primary' className='details' onClick={this.btn}><Text>您目前的总积分为：{this.state.score}</Text><Text className='seemore'>查看详情</Text></Button>
        </View>

        <AtFloatLayout isOpened={this.state.isOpened} title="分数计算详情" onClose={ this.handleClose }>
        你目前的总积分是:{this.state.score}
        {this.state.score<72?<View>建议您准备相关竞赛或其他荣誉奖项</View>:<View>恭喜您已经达到落户分数要求！请尽快准备相关材料。</View>}
        </AtFloatLayout>
       
      </View>

      
    )
  }
}

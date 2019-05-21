import Taro, { Component } from '@tarojs/taro'
import { View ,Button ,Image,Text} from '@tarojs/components';
import Radio1 from '../component/radio/radio'
import { AtFloatLayout } from "taro-ui"
import './calculator.scss'
export default class Calculator extends Component {
  // config = {
  //   navigationBarTitleText: '应届生落户积分计算'
  // }
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
    Taro.showShareMenu({
      withShareTicket: true
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
        <View style='display:flex;flex-direction: column;'>
        {/* 你目前的总积分是:{this.state.score} */}
        <Text style='font-size:18px'>你目前的总积分是:{this.state.score}。</Text>
        {this.state.score<72?<View>尚未达到上海应届生落户积分要求，建议您准备相关竞赛或其他荣誉奖项</View>:<View>恭喜您已经达到落户分数要求！请尽快准备相关材料。您也可以关注微信公众号“上海落户小助手”，第一时间获得落户相关资讯，微信公众号回复“落户”，加入上海落户交流群</View>}
        </View>
        </AtFloatLayout>
       
      </View>

      
    )
  }
}

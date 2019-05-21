import Taro, { Component, Config } from '@tarojs/taro'
import { View,ScrollView,Button,WebView} from '@tarojs/components';
import Banner from '../component/swiper'
import { AtGrid } from "taro-ui"
import Tabs from '../component/tabs/tabs'
import graduate from './img/graduate.svg'
import money from './img/money.svg'
import other from './img/other.svg'
import liuxue from './img/liuxue.svg'
import chuangyi from './img/chuangyi.svg'
//import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import '@tarojs/async-await'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    
    
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render(){
    return(
         <View>
            
            <View ><Banner /></View>
            <View>
                <AtGrid 
                    onClick={(item,index)=>{
                        let url = ''
                        console.log('index',index)
                        switch(index){
                            case 0:
                            url = '/pages/calculator/calculator';
                            break
                            case 1:
                            url= `/pages/component/article/article?id=${'liuxuesheng'}`
                            break
                            case 2:
                            url = '/pages/live/live'
                            break
                            case 3:
                            url=`/pages/component/article/article?id=${'other'}`
                            break
                            case 4:
                            url='/pages/salary/salary'
                            break
                        }
                        
                    Taro.navigateTo({url:url})}}
                    data={[
                        {
                        image: graduate,
                        value: '应届生落户'
                        },
                        {
                        image: liuxue,
                        value: '留学生落户'
                        },
                        {
                        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                        value: '居转户'
                        },
                        {
                        image: other,
                        value: '其他落户'
                        },
                        {
                        image: money,
                        value: '税后工资计算'
                        },
                        {
                        image: chuangyi,
                        value: '创意'
                        }
                    ]
                } />
            </View>
            <View><Tabs/></View>
        </View> 
    )
}
onScroll=()=>{
    console.log()
}
onScrolltoupper=()=>{
    console.log('')
}
}


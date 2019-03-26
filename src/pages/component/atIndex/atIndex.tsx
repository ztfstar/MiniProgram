import Taro,{ Component,  } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtIndexes } from 'taro-ui';
import schoolData from './school.json'
export default class atIndexes extends Component {
     constructor(props){
         super(props)
         //this.aaa:'hello'
     }
     static defaultProps = {
        aaa:'hello',
    };

    render(){
       const list = schoolData.school;
       
        return (
            <View style='height:100vh'>
                <AtIndexes
                animation={false}
                list={list}
                onClick={this.onClick.bind(this)}                >
                <View>
                    <Text style='font-size:2'>请选择您所在的学校(如果下列没有您的学校，请返回选择“其他高校及研究生培养单位”)</Text>
                </View>
                </AtIndexes>
            </View>
        )
    }
    onClick=(e)=>{
        let pages = Taro.getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
        let prevPage = pages[ pages.length - 2 ];  
        //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
        prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
         schoolObj:e,
      
     })
     // console.log(this)
     //上一个页面内执行setData操作，将我们想要的信息保存住。当我们返回去的时候，页面已经处理完毕。
    //  console.log('prevPage ',prevPage)
     //console.log('pages ',pages)
        Taro.navigateBack({delta: 1})
    }
   
}
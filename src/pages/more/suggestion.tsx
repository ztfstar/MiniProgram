import Taro, { Component } from '@tarojs/taro'
import wechat from './wechat.jpg'
import { View, 
         Text,
         Image,
        } from '@tarojs/components'
export  default class suggestion extends Component{

      
    render(){
        return(
            <View style='display:flex;flex-direction: column;align-items: center'>
            <Text>如果您有任何意见或者问题请联系我！</Text>
            <Image style='width:150px;height:250px;margin-top:30px' src = {wechat}/>
            </View>
        )
        
    }
} 





    
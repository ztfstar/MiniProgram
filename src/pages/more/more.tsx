import Taro, { Component, Config } from '@tarojs/taro'
import { View, 
         Text,
         Image
        } from '@tarojs/components'

export  default class More extends Component{
    render(){
        return(
            <View>
                <Text>more!</Text>
                {/* <Image style={{width:300,height:300}} src='../source/img/header.png'/> */}
            </View>
        )
    }
} 
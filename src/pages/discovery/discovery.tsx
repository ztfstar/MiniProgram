import Taro, { Component, Config } from '@tarojs/taro'
import Tab1List from '../component/List/tab1List';
import { View, 
         Text,
         Image
        } from '@tarojs/components'

export  default class discovery extends Component{
    render(){
        return(
            <View>
                <Tab1List/>
            </View>
        )
    }
} 
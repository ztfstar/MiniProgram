import Taro, { Component, Config } from '@tarojs/taro'
import G1 from './gzh-1.jpg'
import G2 from './gzh-2.png'
import G3 from './gzh-3.jpg'
import G4 from './gzh-4.png'

import { View, 
         Text,
         Image
        } from '@tarojs/components'

export  default class discovery extends Component{
    render(){
        return(
            <View style='flex:1;padding: 20px 20px;flex-direction: column'>
                <View style='bottom:50p;display:flex;flex-direction:column'>
                    <Text style='font-size:14px;font-family:-apple-system-font,Helvetica Neue,sans-serif;'>
                    落户有问题请关注微信公众号：   
                    </Text>
                    <Text style='font-size:19px;font-family:-apple-system-font,Helvetica Neue,sans-serif;color:red'>
                    上海落户小助手   
                    </Text>
                    <Image style='height:245px;width:245px' src={G4}/>
                    <Text style='font-size:14px;font-family:-apple-system-font,Helvetica Neue,sans-serif'>
                    或直接搜“shlhxzs”，<Text style='color:red'>
                    回复“落户”，
                    </Text>，会有人拉您进群交流。
                    </Text>
                </View>
                <View   style='display:flex;margin-top:13px;align-items:center;justify-content:center;font-size:18px;flex-direction:column'>
                    <View><Text>step 1</Text></View>
                    <View><Image style='height:400px;width:245px' src={G3}/> </View>
                    <View><Text>step 2</Text></View>
                    <View><Image style='height:400px;width:245px' src={G1}/></View>
                    <View><Text>step 3</Text></View>
                    <View><Image style='height:400px;width:245px' src={G2}/> </View>

                </View>
                  
            </View>
        )
    }
} 
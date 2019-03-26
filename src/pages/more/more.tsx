import Taro, { Component, Config } from '@tarojs/taro'
import { View, 
         Text,
         Image,
         Button
        } from '@tarojs/components'

export  default class discovery extends Component{

    tobegin = (userInfo) => {
       // console.log(userInfo)
        Taro.setStorage({key:userInfo.detail.userInfo.nickName, data:userInfo.detail.rawData})
        Taro.getStorage({ key: userInfo.detail.userInfo.nickName })
        .then(res => console.log(res.data))

      };
    render(){
        return(
            <View>
                <Button className="btn" plain openType="getUserInfo" onGetUserInfo={this.tobegin} type="primary">
                登录
                </Button>
            </View>
        )
    }
} 
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components';
import { View, 
         Text,
         Image,
         Button
        } from '@tarojs/components'

export  default class discovery extends Component{

    tobegin = (userInfo) => {
       console.log(userInfo)
       //Taro.authorize(params).then(...)

        Taro.setStorage({key:userInfo.detail.userInfo.nickName, data:userInfo.detail.rawData})
        Taro.getStorage({ key: userInfo.detail.userInfo.nickName })
        .then(res => console.log(res))
       
      };

      
    render(){
        // let s= '011K8KAT15IWd51pTXAT1OmGAT1K8KAL';
        // let s= '021sqVf41znkWS16ZEe41jlOf41sqVfS'
        return(
            <View>
                <Button className="btn" plain openType="getUserInfo" onGetUserInfo={this.tobegin} type="primary">
                    登录
                </Button>
                <Button className="btn" onClick={()=>{
                    Taro.login({
                        success:function(res){
                            console.log(res)
                            if(res.code){
                                //发起网络请求
                                Taro.request({
                                    url:'http://127.0.0.1:3000/login',
                                    data:{
                                        js_code:res.code,
                                        appid:'wxe70f7da720941f21',
                                        secret:'f4c9b6d7b1599ab564ef3af44ac0e345',
                                        grant_type:'authorization_code'   
                                    }
                                })
                            }else{
                                console.log('登录失败')
                            }
                        },
                        fail: function(){
                            console.log("启用login函数，失败！");                        
                          },                       
                          complete:function(){                       
                            console.log("已启用login函数");                       
                          }
                    })
                }}>
                    登录2
                </Button>
            </View>
        )
    }
} 
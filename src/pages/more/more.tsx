import Taro, { Component, Config } from '@tarojs/taro'
import { AtList, AtListItem } from "taro-ui"

import { View, 
         Text,
         Image,
         Button,
         Ad
        } from '@tarojs/components'
import './mine.scss'

export  default class discovery extends Component{
    state={
        signStatus:false,
    }

    componentDidMount(){
        let value = Taro.getStorageSync('user')
        if(value){
            this.setState({
                signStatus:true
            })
        }else{
            this.setState({
                signStatus:false
            })
        }
        
    } 

    render(){
        console.log('more page')
        var  userinfo={avatarUrl:'',nickName:''}
        if(Taro.getStorageSync('user')!==null){
            userinfo =  Taro.getStorageSync('user')
            if(userinfo){
                console.log('userinfo',Taro.getStorageSync('user'))
            }else{
                console.log('userinfo get error',)
            }
            //console.log('userinfo',Taro.getStorageSync('user'))
        }
        console.log('userinfo.nickName',userinfo.nickName)
        // let screenHeight = 0;
        // screenHeight = Taro.getSystemInfoSync().windowHeight;
        return (   
            <View className='setting' style='height:667px'>
                <View className='header' >
                    {/* {this.state.signStatus? */}
                    {this.state.signStatus?
                    <View className='denglu'>
                        <Image className='touxiang'  src ={userinfo.avatarUrl}/>
                        <Text className='username'>{userinfo.nickName}</Text>                       
                    </View>:
                    <Button  type='primary' size='default'  openType="getUserInfo" onGetUserInfo={this.tobegin}  >
                        登录
                    </Button>
                    }
                </View>
            
                <View className='user'>
                    <AtList style='width:355px'>
                        <AtListItem title='我的帖子'
                            onClick={()=>Taro.navigateTo({url:'/pages/more/myPost'})}
                        />
                        <AtListItem title='@我的'
                            onClick={()=>Taro.navigateTo({url:'/pages/more/myMessage'})}
                        />
                        <AtListItem
                            title='意见反馈'
                            onClick={()=>Taro.navigateTo({url:'/pages/more/suggestion'})}
                        />
                    </AtList>
                </View>
            </View> 
        )
    }

     tobegin = (userInfo) => {
        //提交用户信息入库
        let userInformation = userInfo.detail.rawData;//用户头像 昵称等信息
        Taro.login({
            fail: function(){
                console.log("启用login函数，失败！");                        
              },                       
            complete:function(){ 
                console.log("已启用login函数");             
            }
        }).then((res)=>{
            if(res.code){
                //发起网络请求
                Taro.request({
                    url:'http://118.25.173.153:3000/login',
                    //url:'http://localhost:3000/login',
                    header: {'content-type': 'application/json'},
                    data:{
                        js_code:res.code,
                        appid:'wxe70f7da720941f21',
                        secret:'c3817ccfe76415f3ebeb02b5d6d414ba',
                        grant_type:'authorization_code'   
                    },
                    success: function(result){
                        console.log('request success')
                    },
                    fail:function(err){
                        console.log('err请求失败',err)
                    }
                }).then((result)=>{
                    //保存userInformation（头像昵称等信息）和3rd_session（openid、secret）
                    Taro.setStorage({key:'user',data:{...JSON.parse(userInformation),...result.data}});
                    console.log('this',this)
                    this.setState({
                        signStatus:true
                    })
                })                      
            }else{
                console.log('登录失败')
            }  
        })

        
        //获取openId和secret等信息 openId是唯一性标示
        setTimeout(()=>{
            let userInfo = Taro.getStorageSync('user')
            Taro.request({
                //url:'http://127.0.0.1:3000/login/addUser',//118.25.173.153
                url:'http://118.25.173.153:3000/login/addUser',
                data:{
                    userInfo:userInfo
                    //usersession:Taro.getStorageSync('3rd_session')
                }
            })
            .then((res)=>{
                console.log('成功保存用户信息' ,res)
            })
            .catch((err)=>{
                console.log('保存用户信息失败',err)
            })
        },1000)
        // setTimeout(() => {
        //     Taro.getStorage({key:'3rd_session'}).then(res=>{
        //         console.log('3rd_session',res.data)
        //     })
        // }, 1000);
        // setTimeout(()=>{
        // },2000)
        
    };

} 





    
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import '@tarojs/async-await'

export default class MyMessage extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
          replyList:[]
        }
      }
      
      static defaultProps = {
        post: {},
      }

       componentDidMount(){
        let openid = Taro.getStorageSync('user').openid;
        console.log('getStorageSync',Taro.getStorageSync('user').openid)
        //根据当前用户查询数据库中与他相关的回复或者消息 按照时间排序
        Taro.request({
          url: 'http://118.25.173.153:3000/post/getMessageReply',
          //url: 'http://localhost:3000/post/getMessageReply',
          header: {'content-type': 'application/json'},
          data:{
            openid:openid
          }
        })
        .then(res=>{
          this.setState({
            replyList:res.data
          })
          //Taro.setStorageSync('messageLength', res.data.length)
        })
        .catch(err=>{
          console.log("err",err)
        })
      }

      render () {
        let {replyList} = this.state;
        console.log('myMessage page',this.state)
        return(
            <View className='container'>
              <View className='replyList'>
                {replyList&&replyList.map((item)=>{
                  return(
                    <View className='item' 
                      onClick={()=>{
                        Taro.navigateTo({url:`/pages/more/myPostReply?commitId=${item.commitId}&postId=${item.postId}`})
                      }}
                    >
                        <Image className='touxiang' src={JSON.parse(item.user).avatarUrl}/>
                        <Text className='username'>{JSON.parse(item.user).nickName}:</Text>
                        <Text className='content'>{item.content}</Text>
                    </View>
                  )
                })}
              </View>   
            </View>
        )
      }

      
}
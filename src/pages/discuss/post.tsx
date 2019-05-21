import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text ,ScrollView} from '@tarojs/components';
import { connect } from '@tarojs/redux'
import share from './share.svg'
// import {
//     fetchPosts
// }from '../../redux/api'

import {fetchPosts} from '../../redux/actions'
import { AtCard ,AtButton} from "taro-ui"
import Add from './add.png'
import './post.scss'
import replyBtn from './replyBtn.svg'

@connect(({ post }) => ({
    post
  }), (dispatch) => ({
    fetchPosts() {
      dispatch(fetchPosts())
    }
  }))
  

class Index extends Component {
  // config = {
  //   navigationBarTitleText: ''
  // }
  

  componentDidMount(){
    //this.props.fetchPosts()
  }

  componentDidShow(){
    this.props.fetchPosts();
    Taro.showShareMenu({
      withShareTicket: true
    })

    //根据当前用户查询数据库中与他相关的回复 按照时间排序
    // Taro.request({
    //   //url: 'http://118.25.173.153:3000/post/getPost',
    //   url: 'http://localhost:3000/post/getMessageReply',
    //   header: {'content-type': 'application/json'},
    //   data:{
    //     openid:openid
    //   }
    // })
    // .then(res=>{
    //   this.setState({
    //     replyList:res.data
    //   })
    //   Taro.setStorageSync('messageReplyLength', res.data.length)
    // })
    // .catch(err=>{
    //   console.log("err",err)
    // })

     //根据当前用户查询数据库中与他相关的评论 按照时间排序
    //  Taro.request({
    //   //url: 'http://118.25.173.153:3000/post/getPost',
    //   url: 'http://localhost:3000/post/getMessageCommit',
    //   header: {'content-type': 'application/json'},
    //   data:{
    //     openid:openid
    //   }
    // })
    // .then(res=>{
    //   this.setState({
    //     replyList:res.data
    //   })
    //   Taro.setStorageSync('messageCommitLength', res.data.length)
    // })
    // .catch(err=>{
    //   console.log("err",err)
    // })
  }
  
  render () {

    const scrollStyle = {
      height: '850px'
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      'background-color': '#444829'
    }
    const vStyleB = {
       height: '150px',
      'background-color': '#234555'
    }
    const vStyleC = {
      height: '150px',
      'background-color': '#ffffff',
      color: '#333'
    }


   let userinfo =  Taro.getStorageSync('user')
   
   //console.log('this.props.post.postList',this.props.post.postList)
    const listItems = this.props.post.postList.map((item,index) =>
    <li key={index.toString()+'post'}>
      <View style='margin-top:5px;'>
        <AtCard
            title={item.title}
            thumb={JSON.parse(item.user).avatarUrl}
        >
            <View className='card'>

              <View onClick={()=>{
                Taro.navigateTo({
                    url:`/pages/discuss/postDetail?id=${item._id}`
                })
                }}>
                <Text>{item.content.slice(0,73)}......</Text>
              </View>

              <View className='footer'>
                <View className='replyBtnIcon' onClick={()=>{
                  Taro.navigateTo({
                      url:`/pages/discuss/postDetail?id=${item._id}`
                  })
                }}>
                  <Image className='replyBtnIcon' src={replyBtn}/>
                </View  >
               
                <AtButton openType='share' customStyle='display:flex;align-items:center;flex-direction:row;border: none'>
                  <Image  className='shareImg' src={share}/>
                </AtButton> 
                <Text style='font-size:10px;margin-left:10px'>{item.createTime}</Text>
              </View>

            </View>

        </AtCard>
    </View>
    </li>
  );    
    return (
      <View className='container' style='background-color:#F8F8F8'>
        <View className='postList'>
            <ul>{listItems}</ul>
        </View>
        {/* <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToLower={this.onScrollToLower}
            >
            <View style={vStyleA}>A</View>
            <View style={vStyleB}>B</View>
            <View style={vStyleC}>C</View>
            <ul>{listItems}</ul>
          </ScrollView> */}

        <View className='add' onClick={()=>{
            let userinfo =  Taro.getStorageSync('user');
            if(userinfo){
                console.log('userinfo',Taro.getStorageSync('user'))
                Taro.navigateTo({
                  url:'/pages/discuss/addPost'
                })
            }else{
                Taro.reLaunch({
                  url:'../../pages/more/more'
                })
            }
            
        }} >
        <Image className='addicon' src={Add}/>
      </View>

      </View> 
    )
  }

  onScrollToLower=()=>{
    console.log('scrollView bottom')
  }
}


export default Index
  
import Taro, { Component ,PureComponent} from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import isEmpty from 'lodash/isEmpty';//为空判断
import {fetchPosts} from '../../redux/actions'
import { AtCard ,AtButton} from "taro-ui"
import replyBtn from './replyBtn.svg'
import share from './share.svg'
import './myPost.scss'
import item from 'dist/npm/taro-ui/dist/weapp/components/list/item';

@connect(({ post }) => ({
  post
}), (dispatch) => ({
  fetchPosts() {
    dispatch(fetchPosts())
  }
}))


export default class MyPost extends PureComponent {
    
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    static defaultProps = {
      post: {},
    }
   
    componentDidShow(){
      this.props.fetchPosts();
      console.log('this.props.post',this.props.post)
    }

    render () {    
      let userinfo =  Taro.getStorageSync('user')
      
   //console.log('this.props.post.postList',this.props.post.postList)
      const listItems = this.props.post.postList.map((item,index) =>{
      // console.log('mypost userinfo',userinfo)
      // console.log('mypost item',item)
      if(userinfo.openid === JSON.parse(item.user).openid){
        return(
          <li key={index.toString()+'mypost'}>
            <View style='margin-top:5px;'>
              <AtCard
                  title={item.title}
                  thumb={JSON.parse(item.user).avatarUrl}
              >
                  <View className='card'>
                    <View onClick={()=>{
                      Taro.navigateTo({
                          url:`/pages/more/myPostDetail?id=${item._id}`
                      })
                  }}>
                      <Text>{item.content.slice(0,73)}......</Text>
                    </View>
  
                    <View className='footer'>
                      <View className='replyBtnIcon' onClick={()=>{
                        Taro.navigateTo({
                            url:`/pages/more/myPostDetail?id=${item._id}`
                        })
                      }}>
                        <Image className='replyBtnIcon' src={replyBtn}/>
                      </View>
                    
                      <AtButton openType='share' customStyle='display:flex;align-items:center;flex-direction:row;border: none'>
                        <Image  className='shareImg' src={share}/>
                      </AtButton> 
  
                      <Text style='font-size:10px;margin-left:10px'>{item.createTime}</Text>
                    </View>
                  </View>
              </AtCard>
            </View>
          </li>
        )
      }
      
    }
    
  );    
    return (
      <View className='container' style='background-color:#F8F8F8'>
        <View className='postList'>
            <ul>{listItems}</ul>
        </View>
      </View>
    )
    }
}



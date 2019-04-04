import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
// import {
//     fetchPosts
// }from '../../redux/api'
import {fetchPosts} from '../../redux/actions'
import { AtCard } from "taro-ui"
import Add from './add.png'
import './post.scss'


@connect(({ post }) => ({
    post
  }), (dispatch) => ({
    fetchPosts() {
      dispatch(fetchPosts())
    }
  }))
  

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  

  componentDidMount(){
    this.props.fetchPosts()
  }

  render () {
    const listItems = this.props.post.postList.map((item,index) =>
    <li key={index.toString()}>
      <View style='margin-top:5px;'>
        <AtCard
            onClick={()=>{
                console.log(item)
                Taro.navigateTo({
                    url:`/pages/discuss/postDetail?id=${item._id}`
                })
            }}
            title={item.title}
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
            <View><Text>{item.content.slice(0,73)}......</Text></View>
            <Text>1111</Text>
        </AtCard>
    </View>
    </li>
  );    
    return (
      <View className='container' style='background-color:#F8F8F8'>
        <View className='postList'>
            <ul>{listItems}</ul>
        </View>

        <View className='add' onClick={()=>{
            Taro.navigateTo({
                url:'/pages/discuss/addPost'
                
            })
        }} >
        <Image className='addicon' src={Add}/>
      </View>

      </View>
    )
  }
}


export default Index
  
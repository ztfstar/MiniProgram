import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import { AtTextarea ,AtButton,AtInput} from 'taro-ui'
import './postDetail.scss'
import { fetchPosts,addCommit} from '../../redux/actions'
let commitObj={};
// @connect(mapStateToProps,mapDispatchToProps)
@connect(({ post }) => ({
  post
}), (dispatch) => ({
    fetchPosts() {
    dispatch(fetchPosts(Taro.getCurrentPages()[1].options.id))
  },
  addCommit(){
    dispatch(addCommit(commit))
  }
}))

export default class PostIndex extends Component {

    constructor () {
        super(...arguments)
        this.state = {
          input:''
        }
      }

      inputChange (value) {
        commitObj.content = value;
        
        this.setState({
          commitInput: value
        })
      }
      componentDidMount(){
        this.props.fetchPosts(Taro.getCurrentPages()[1].options.id)
        commitObj.postId = this.props.post.postList[0]._id;
        commitObj.user = user
      }
      
      render () {
          console.log('this.props', this.props)
          let item = this.props.post.postList[0];//帖子内容和标题
        //   let itemList = this.props.post.postList[0].map((item,index) =>{
        //     return(
        //         <li key={index.toString()}>
        //             <View style='margin-top:5px;'>
        //                 {item.content}
        //             </View>
        //         </li>
        //     )
        //   }
          
        return (
            <View className='postdetail'>
                <View className='header'>
                    <Text className='title'>{item.title}</Text>
                    <Text className='content'>{item.content}</Text>
                </View>

                {/* <View className='commit'>
                    {this.props.post.commits.map((item,index)=>{
                        return (
                            <View>

                            </View>
                        )
                    })}
                </View> */}
               
                <View style='display: flex;position:fixed;bottom:10px; flex-direction: row;justify-content: center;align-items:center'>
                    <View style='width:280px'>
                        <AtInput
                            name='value'
                            type='text'
                            placeholder='请输入回复内容'
                            value={this.state.commitInput}
                            onChange={this.inputChange.bind(this)}
                            border={true}
                            adjustPosition={true}
                        />
                    </View>
                    <AtButton type='primary' size='small'onClick={()=>{this.props.addCommit(this.state.commitInput)}}>发送</AtButton>
                </View>
            </View>
          
        )
      }
}




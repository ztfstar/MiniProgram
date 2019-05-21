import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import { AtTextarea ,AtButton,AtInput,AtToast} from 'taro-ui'

import { addPost} from '../../redux/actions'
import addImage from './addImage.png'

@connect(({ post }) => ({
  post
}), (dispatch) => ({
  addPost() {
    dispatch(addPost(this.state))
  }
}))

export default class PostIndex extends Component {

    constructor () {
        super(...arguments)
        
        this.state = {
          title: '',
          content:'',
          toastStatus:false
        }
        
      }
      title='';
      content=''
      inputChange (value) {
        this.title = value       
      }

      textareaChange (event) {
        this.setState({
          content: event.target.value
        })
        //this.title = event.target.value
      }

      addPost1(){
        let context = this;
        return function(){
          console.log('context',context)
          if(context.time){
            clearTimeout(context.time)
          }
          context.time = setTimeout(() => {
            let user = Taro.getStorageSync('user')
            console.log('addPost1',user);
            Taro.request({
              //url: 'http://localhost:3000/post/addPost',
              url: 'http://118.25.173.153:3000/post/addPost',
              data: {
                  title: context.title,
                  content: context.state.content,
                  user:user,
                  openid:user.openid
              },
              header: {
                'content-type': 'application/json'
              },
              fail:function(res){
                console.log('添加post失败')
                context.setState({
                  toastStatus:true
                })
              }
            })
              .then(res => {
                //跳转到上一页
                console.log('添加post成功')
                Taro.navigateBack({delta: 1})
              })
              .catch(()=>{
                console.log('添加post失败')
                context.setState({
                  toastStatus:true
                })
              })
            //
          }, 500)
        }
      



        
      }
      
      render () {
       // console.log('this.props-------------',this.props.addPost)
        return (
            <View className='addPostBox'>
              <View>
              <AtToast isOpened={this.state.toastStatus} text="发送失败！" icon="{icon}"></AtToast>
                <Text style='font-size:15px'>标题</Text>
                  <AtInput
                    name='value'
                    //title='标题:'
                    type='text'
                    placeholder='请输入标题'
                    value={this.title}
                    onChange={this.inputChange.bind(this)}
                    border={true}
                  />
              </View>
             
              <View style='margin-top:10px'>
                <Text style='font-size:15px'>正文</Text>
                <AtTextarea
                  value={this.content}
                  onChange={this.textareaChange.bind(this)}
                  maxlength={'500'}
                  placeholder='你的问题是...'
                  height={'200'}
                  />
              </View>
              
              <View style='display:flex;justify-content: space-around;align-items: center;'>
                  <View ><Image style='width:40px;height:35px' src={addImage}/></View>
                  <AtButton type='primary' size='small' 
                    onClick={()=>this.addPost1()()}>
                    发送</AtButton>
              </View>
            </View>
          
        )
      }
}




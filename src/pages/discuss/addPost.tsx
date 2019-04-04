import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import { AtTextarea ,AtButton,AtInput} from 'taro-ui'

import { addPost} from '../../redux/actions'
import addImage from './addImage.png'
// const mapStateToProps = (state) => {
//   return (state)
// } 

// const mapDispatchToProps = (dispatch) => ({
//   addPost() {
//   dispatch(addPost())
// },
// })

// @connect(mapStateToProps,mapDispatchToProps)
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
        }
      }

      inputChange (value) {
        console.log(value<1000)
        if(value<1000){
          console.log('i come in')
          setTimeout(()=>{
            this.setState({
              title: value
            })
          },1000)
          
        }
        
      }

      textareaChange (event) {
        this.setState({
          content: event.target.value
        })
      }

      addPost1(){
        Taro.request({
          url: 'http://127.0.0.1:3000/post/addPost',
          data: {
              title: this.state.title,
              content: this.state.content
          },
          header: {
            'content-type': 'application/json'
          },
          fail:function(res){
            console.log('success',res.data)
          }
        })
          .then(res => console.log(res.data))
      }
      
      render () {
       // console.log('this.props-------------',this.props.addPost)
        return (
            <View className='addPostBox'>
            <View>
            <Text style='font-size:15px'>标题</Text>
              <AtInput
                name='value'
                //title='标题:'
                type='text'
                placeholder='请输入标题'
                value={this.state.title}
                onChange={this.inputChange.bind(this)}
                border={true}
                
              />
            </View>
             
            <View style='margin-top:10px'>
              <Text style='font-size:15px'>正文</Text>
              <AtTextarea
                value={this.state.content}
                onChange={this.textareaChange.bind(this)}
                maxlength={'500'}
                placeholder='你的问题是...'
                height={200}
                />
            </View>
              
              <View style='display:flex;justify-content: space-around;align-items: center;'>
                  <View ><Image style='width:40px;height:35px' src={addImage}/></View>
                  <AtButton type='primary' size='small' 
                    onClick={()=>this.addPost1()}>
                    发送</AtButton>
              </View>
            </View>
          
        )
      }
}




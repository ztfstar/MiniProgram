import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import { addReply,getCommit,getReply} from '../../redux/actions'
import './myPostReply.scss'
import './myPostDetail.scss'
import { AtTextarea ,AtButton,AtInput} from 'taro-ui';
import replyBtn from './replyBtn.svg'
import '@tarojs/async-await'

let replyObj={
    postId:'',
    content:'',
    commitId:'',
    user:{},//回复的作者
    toUser:{},//回复给某某对象
    toOpenid:''
};
@connect(({ post }) => ({
  post
})
, (dispatch) => ({
  getCommit(param){
      dispatch(getCommit(param,'commitObj'))
  },
  getReply(param){
    dispatch(getReply(param,''))
  },
  addReply(param){
    dispatch(addReply(replyObj))
    getReply(){
        dispatch(getReply(Taro.getCurrentPages()[Taro.getCurrentPages().length-1].options.commitId,''))
    }
  }
})
)

export default class MyPostReply extends Component {
  time = 0;
  replyContent=''
  constructor (props) {
      super(props)
      props.post={}
      this.state = {
        input:'',
        time:0,
        placeholderText:'',
        showKeyBoard:true
      }
    }
    
    static defaultProps = {
      post: {},
  }
    inputChange (value) {
      replyObj.content = value; 
      this.replyContent = value 
      this.setState({
        input:value
      }) 
      return value
    }
    
    async componentDidMount(){
      //console.log('获取评论参数',Taro.getCurrentPages())
      let currentPageCommitId = Taro.getCurrentPages()[Taro.getCurrentPages().length-1].options.commitId
      let currentPagePostId = Taro.getCurrentPages()[Taro.getCurrentPages().length-1].options.postId
      await this.props.getCommit(currentPageCommitId,'commitObj');//获取评论对象
      replyObj.postId = currentPagePostId
      replyObj.user = Taro.getStorageSync('user')
      await this.props.getReply(currentPageCommitId,'');
      setTimeout(()=>{
      this.setState({
          placeholderText:`@${JSON.parse(this.props.post.commitList[0].user).nickName}`
        })
      },500) 

       //获取access_token
      
       var that = this;
       var appId = 'wxe70f7da720941f21';
       var secret = 'c3817ccfe76415f3ebeb02b5d6d414ba';
       Taro.request({
           url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=' + secret,
           data: {},
           header: {
           'content-type': 'json'
           },
           success: function (res) {
           console.log("access_token",res)
           that.setState({
               access_token: res.data.access_token
           })
           },
           fail:function(res){
           console.log("失败"+res)
           }
       })
    }

    render () {
      //let placeholderText='';
      let commit = this.props.post.commitList[0];
      if(commit){
        console.log('commit.content',commit)
        replyObj.commitId = commit._id; 
        //placeholderText = `@${JSON.parse(commit.user).nickName}`
        replyObj.toUser = commit.user;
        replyObj.toOpenid = commit.user.openid;
      }
      let replyList = this.props.post.replyList;
      console.log('replyList',replyList)
      return(
          <View className='container'>
            <View className='header'>
              <Text className='title'>{commit.content}</Text>
            </View>

            <View className='replyList'>
              {replyList&&replyList.map((item,index)=>{
                return(
                  <View className='replyBody'>
                    <View className='replyHeader'>
                      <Image className='touxiang' src={JSON.parse(item.user).avatarUrl}/>
                      <Text className='username'>{JSON.parse(item.user).nickName}</Text>
                    </View>
                    <Text className='replyContent'>{item.content}</Text>
                    
                    <View className='replyBtn' 
                      onClick={()=>{
                        console.log('reply item',JSON.parse(item.user))
                        this.setState({
                          placeholderText:`@${JSON.parse(this.props.post.commitList[0].user).nickName}`
                        })
                        this.setState({
                          showKeyBoard:!this.state.showKeyBoard
                        })
                        replyObj.toUser=JSON.parse(item.user)
                        replyObj.toOpenid = JSON.parse(item.user).openid;
                        }}>
                        {item.createTime&&<View><Text className='time'>{item.createTime}</Text></View>}
                        <Image className='replyBtnIcon'  src={replyBtn}/>
                    </View>
                  </View>
                  
                )
              })}
            </View>

            {this.state.showKeyBoard&&
            <View style='position:fixed;bottom:0px;width:375px'>
              <AtForm customStyle='display: flex;flex-direction: row;justify-content: flex-start;align-items: center;'
                    onSubmit={this.formSubmit} reportSubmit={true} onReset={this.formReset} >
                      <AtInput
                          customStyle='width:250px'
                          name='value'
                          type='text'
                          placeholder={this.state.placeholderText}
                          onChange={this.inputChange.bind(this)}
                          border={true}
                          adjustPosition={true}
                          value={this.state.input}
                          clear={true}
                          focus={true}
                      />                    
                  <AtButton type='primary' 
                    customStyle='position:absolute;bottom:10px;left:260px' size='small' formType='submit' 
                    onClick={()=>{
                      if(Taro.getStorageSync('user')){
                        this._addReply()();
                      }else{
                        Taro.switchTab({'url':'/pages/more/more'})
                      }
                      this.setState({
                        input:''
                      })
                    }}>发送</AtButton>
              </AtForm>
            </View>}
            
            {/* <View style='display: flex;position:fixed;bottom:0px; flex-direction: row;justify-content: center;align-items:center'>
                  <View style='width:280px'>
                      <AtInput
                          name='value'
                          type='text'
                          placeholder={this.state.placeholderText}
                          onChange={this.inputChange.bind(this)}
                          border={true}
                          adjustPosition={true}
                          value={this.state.input}
                          clear={true}
                          focus={true}
                      />
                  </View>
                  <AtButton type='primary' size='small'onClick={()=>{
                    this._addReply()()
                    }}>发送</AtButton>
              </View>
            } */}
              
          </View>
      )
    }

    _addReply=()=>{
      console.log('time1',this.time)
      // console.log('time1',this.time)
      let context = this;
      return function(){
        console.log('context',context)
        if(context.time){
          clearTimeout(context.time)
        }
        context.time = setTimeout(() => {
          console.log('fangdou',context)
          context.props.addReply(replyObj)
        }, 500)
      }
    }


    //提交模板消息
    formSubmit(e){
      let that = this;
      let  myDate = new Date();
      let  currentTime=myDate.toLocaleTimeString();     //获取当前时间
      let fId = e.detail.formId;
      let fObj = this.replyContent;
      let title = that.props.post.postList[0].content//评论的内容
      let user = Taro.getStorageSync('user').nickName
      let toUser = JSON.parse(that.props.post.postList[0].user).openid
      let commitId = this.props.post.commitList[0]._id;
      let postId = Taro.getCurrentPages()[Taro.getCurrentPages().length-1].options.postId
      let data = {
        touser: toUser,
        template_id: 'jI7aXGMmdMfv5B6CgA_ZIHn8IlTliMxoMK_V-Yrj2Mk',//这个是1、申请的模板消息id，  
        page: `/pages/discuss/reply?commitId=${commitId}&postId=${postId}`,
        form_id: fId,
        data: {
          "keyword1": {
            "value": user,
            "color": "#9b9b9b"
          },
          "keyword2": {
            "value": title,
            "color": "#9b9b9b"
          },
          "keyword3": {
              "value": fObj,
              "color": "#9b9b9b"
          },
          "keyword4": {
          "value": user,
          "color": "#9b9b9b"
          },
          "keyword5": {
              "value": currentTime,
              "color": "#9b9b9b"
          }
        },
        color: '#ccc',
        emphasis_keyword: 'keyword1.DATA'
      } 
      Taro.request({
        url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + that.state.access_token,
        data: data,
        method: 'POST', 
        success: function (res) {
          console.log('message module',res);
        }
      })
    }
    formReset = e => {
      console.log(e)
    }
}
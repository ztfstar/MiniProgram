import Taro, { Component ,PureComponent} from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import { AtButton,AtInput} from 'taro-ui';
import isEmpty from 'lodash/isEmpty';//为空判断
import './myPostDetail.scss'
import { fetchPosts,addCommit,getCommit,getReply} from '../../redux/actions'
import replyBtn from './replyBtn.svg'
let commitObj={
    content:'',
    postId:'',
    user:{},
    toUser:{},
    toOpenid:''
};
@connect(({ post }) => ({
    post
  }), (dispatch) => ({
    fetchPosts(params) {
        dispatch(fetchPosts(params))
    },
    getCommit(paramPostId){
        dispatch(getCommit(paramPostId,'commitList'))
    },
    getReply(postId,type){
        dispatch(getReply(postId,type))
    },
    addCommit(param){
      dispatch(addCommit(param))
      getCommit(){
          dispatch(getCommit(Taro.getCurrentPages()[Taro.getCurrentPages().length-1].options.id,'commitList'))
      }
    }
  }))

export default class MyPostDetail extends PureComponent {
    
   
    commitContent=''
    constructor (props) {
        super(props)
        //this.title = ''
        props.post={}
        this.state = {
            commitInput:'',
            access_token:''
        }
      }
      static defaultProps = {
        post: {},
    }
   
    inputChange (value) {
        commitObj.content = value;
        this.commitContent = value
        this.setState({
            commitInput:value
        })
        return value;
    }

    
    async componentDidShow(){
        //console.log('componentDidMount this.props.post',Taro.getCurrentPages()[Taro.getCurrentPages().length-1])
        let currentParam = Taro.getCurrentPages()[Taro.getCurrentPages().length-1].options.id//postId
        await this.props.fetchPosts(currentParam) //获取帖子     
        await this.props.getCommit(currentParam,'commitList')//获取评论
        await this.props.getReply(currentParam,'getReplyByPostId')//根据postid获取回复列表
        commitObj.user = Taro.getStorageSync('user')

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
        let postId;
        let toUser,toOpenid;
        if(this.props.post.postList&&this.props.post.postList.length === 1 ){
             postId = this.props.post.postList[0]._id;
             toUser = this.props.post.postList[0].user;
             console.log('commitObj param',this.props.post.postList[0].user)
             toOpenid = JSON.parse(this.props.post.postList[0].user).openid
            commitObj.postId = postId;
            commitObj.toUser = toUser;
            commitObj.toOpenid = toOpenid;
        }
        console.log('帖子详情页面1 ', this.props.post)
        let itemPost = this.props.post.postList[0];//帖子内容和标题
        let commits = this.props.post.commitList;
        let replyList = this.props.post.replyList;//该帖子所有的回复列表
       
        return (
            <View className='postdetail'>
                <View className='header'>
                    <Text className='title'>{itemPost.title}</Text>
                    <Text className='content'>{itemPost.content}</Text>
                </View>
                <Text className='fenge'>全部评论:</Text>

                <View className='commitList'>
                    {commits.map((item)=>{
                        //console.log('commits item',item)
                        let user = JSON.parse(item.user)
                        let replyTwo=[];//每个评论的前两个回复
                        replyList&&replyList.map((itemReply)=>{
                            if(replyTwo.length<2&&itemReply.commitId === item._id){  
                                console.log('commit itemReply',itemReply)
                                replyTwo.push(itemReply)
                            }
                        })
                        if(!isEmpty(replyTwo)){
                            console.log('commit replyTwo',replyTwo)
                        }
                        return (
                            <View className='commitbody'>
                                <View className='commitheader'>
                                    <View className='commitheadertop'>
                                        <Image className='touxiang' src={user.avatarUrl}/>
                                        <Text className='username'>{user.nickName}</Text>
                                        {item.createTime&&<Text className='time'>{item.createTime}</Text>}
                                    </View>
                                    <Text onClick={
                                    ()=>{Taro.navigateTo({url:`/pages/more/myPostReply?commitId=${item._id}&postId=${postId}`})}}  className='commit'>{item.content}</Text>
                                </View>
                            
                                {!isEmpty(replyTwo)?
                                <View className='replyBody' onClick={
                                    ()=>{Taro.navigateTo({url:`/pages/more/myPostReply?commitId=${item._id}&postId=${postId}`})}}>
                                    <View>
                                        <View className='replyList'>
                                            <Text className='replyUser'>{JSON.parse(replyTwo[0].user).nickName}:</Text>
                                            <Text className='reply'>{replyTwo[0].content}</Text>
                                        </View>
                                        {replyTwo[1]&&<View className='replyList'>
                                            <Text className='replyUser'>{JSON.parse(replyTwo[1].user).nickName}:</Text>
                                            <Text className='reply'>{replyTwo[1].content}</Text>
                                        </View>}
                                    </View>
                                    <View className='seeMoreBox'><Text className='seeMore'>查看更多</Text> <Image className='replyBtnIcon'  src={replyBtn}/></View>
                                </View>:
                                <View className='replyBtn' onClick={
                                    ()=>{Taro.navigateTo({url:`/pages/more/myPostReply?commitId=${item._id}&postId=${postId}`})}}>
                                    <Image className='replyBtnIcon'  src={replyBtn}/>
                                </View>}
                            </View>
                        )
                    })}
                </View>
               

                <View style='position:fixed;bottom:0px;width:375px'>
                    <AtForm customStyle='display: flex;flex-direction: row;justify-content: flex-start;align-items: center;'
                          onSubmit={this.formSubmit} reportSubmit={true} onReset={this.formReset} >
                            <AtInput
                                customStyle='width:250px'
                                name='value'
                                type='text'
                                placeholder='请输入评论内容'
                                value={this.state.commitInput}
                                onChange={this.inputChange.bind(this)}
                                border={true}
                                adjustPosition={true}
                            />                    
                        <AtButton type='primary' customStyle='position:absolute;bottom:10px;left:260px' size='small' formType='submit'
                                  onClick={()=>{
                                    if(Taro.getStorageSync('user')){
                                        this.props.addCommit(commitObj);
                                    }else{
                                        Taro.switchTab({'url':'/pages/more/more'})
                                    }
                                    this.setState({
                                        commitInput:''
                                    })
                                }}>发送</AtButton>
                    </AtForm>
                </View>
            </View>
          
        )
      }
    //提交
  formSubmit(e){
    let that = this;
    let  myDate = new Date();
    let  currentTime=myDate.toLocaleTimeString();     //获取当前时间
    let fId = e.detail.formId;
    let fObj = this.commitContent;
    let title = that.props.post.postList[0].title
    let user = Taro.getStorageSync('user').nickName
    let toUser = JSON.parse(that.props.post.postList[0].user).openid
    let postId = that.props.post.postList[0]._id;
    console.log('formSubmit postId',postId)
    let data = {
      touser: toUser,
      template_id: 'jI7aXGMmdMfv5B6CgA_ZIHn8IlTliMxoMK_V-Yrj2Mk',//这个是1、申请的模板消息id，  
      page: `/pages/discuss/postDetail?id=${postId}`,
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



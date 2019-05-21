import Taro from '@tarojs/taro'
import {
    // 添加post
    ADDPOST,
    ADDPOSTSUCCESS,
    ADDPOSTERROR,

    // 获取post
    GETPOST,
    GETPOSTSUCCESS,
    GETPOSTERROR,

    //添加评论
    ADDCOMMIT,
    ADDCOMMITSUCCESS,
    ADDCOMMITERROR,

    //获取commit
    GETCOMMIT,
    GETCOMMITSUCESS,
    GETCOMMITERROR,

    //添加回复 reply
    ADDREPLY,
    ADDREPLYSUCCESS,
    ADDREPLYERROR,
    
    //获取回复 reply
    GETREPLY,
    GETREPLYSUCCESS,
    GETREPLYERROR,

    //提交用户入库
    ADDUSER,
    ADDUSERSUCCESS,
    ADDUSERERROR
  } from './constants'

 //提交用户信息入库
export const addUser = (params)=>{
  console.log('用户信息入库',params)
  return dispatch=>{
    dispatch({
      type:ADDUSER
    })

    return new Promise((resolve,reject)=>{
      Taro.request({
        url:'http://118.25.173.153:3000/user/addUser',
        //url: 'http://localhost:3000/post/addUser',
        header:{
          'content-type':'application/json'
        },
        data:{
          user:params
        }
      })
      .then((res)=>{
        dispatch({
          type:ADDUSERSUCCESS,
        })
        resolve(res)
      })
      .catch((err)=>{
        dispatch({
          type:ADDUSERERROR
        })
        reject(err)
      })
    })
  }
}
  //请求帖子列表数据
  export const fetchPosts=(params)=> {
    console.log('params',params)
    return dispatch => {
      //console.log('hello')
      dispatch({type:GETPOST})
      return new Promise((resolve,reject)=>{
        Taro.request({
          url: 'http://118.25.173.153:3000/post/getPost',
          //url: 'http://localhost:3000/post/getPost',
          header: {
            'content-type': 'application/json'
          },
          data:{
            id:params
          }
          // success:function(res){
          //   console.log('res',res)
          // }
        })
        .then(res=>{
          dispatch({
            type:GETPOSTSUCCESS,
            postList:res.data
          })
          resolve(res)
        })
        .catch(err=>{
          console.log("err",err)
          dispatch({
            type:GETPOSTERROR,
          })
          reject()
        })
    })
    }

    
  }

  //添加列表数据
  export function addPost(params) {
    return dispatch => {
      dispatch({type:ADDPOST})
      console.log('hello',params)

      return new Promise((resolve,reject)=>{
        Taro.request({
         //url: 'http://118.25.173.153:3000/post/addPost',
          
         data: {
              title: params.title,
              content: params.content
          },
          header: {
            'content-type': 'application/json'
          },
          // fail:function(res){
          //   console.log('success',res.data)
          // }
        })
        .then(res=>{
          console.log(res.data)
          dispatch({
            type:ADDPOSTSUCCESS,
          })
          resolve(res)
        })
        .catch(err=>{
          console.log(err)
          dispatch({
            type:ADDPOSTERROR,
          })
          reject()
        })
    })
    }
    
  }


  //添加评论
  export function addCommit(params) {
    return dispatch => {
      dispatch({type:ADDCOMMIT})
      console.log('hello addCommit',params)
      return new Promise((resolve,reject)=>{
        Taro.request({
         url: 'http://118.25.173.153:3000/post/addCommit',
         //url: 'http://localhost:3000/post/addCommit',
          data: {
              postId:params.postId,
              content: params.content,
              user: params.user,
              toUser:params.toUser
          },
          header: {
            'content-type': 'application/json'
          },
        })
        .then(res=>{
          console.log(res.data)
          dispatch({
            type:ADDCOMMITSUCCESS,
            newCommitPostId:params.postId
          })
          resolve(res)
        })
        .catch(err=>{
          console.log(err)
          dispatch({
            type:ADDCOMMITERROR,
          })
          reject()
        })
    })
    }
  }


  //获取评论 分为两种情况：1、一个帖子的评论列表，此时传的参数是帖子的ID postId；
  //2、点击评论的查看更多，获取单个评论对象，此时传的参数是一个评论对象的ID。
  export function getCommit(postIdOrCommitId,type){
    return dispatch=>{
      dispatch({type:GETCOMMIT})
      console.log('getCommit',postIdOrCommitId)

      return new Promise((resolve,reject)=>{
        Taro.request({
          url:'http://118.25.173.153:3000/post/getCommit',
          //url: 'http://localhost:3000/post/getCommit',
          data:{
            postIdOrCommitId:postIdOrCommitId,
            type:type
          },
          header:{
            'content-type':'application/json'
          }
        })
        .then(res=>{
          dispatch({
            type:GETCOMMITSUCESS,
            commitList:res.data
          })
          resolve(res)
        })
        .catch(err=>{
          console.log('getCommit failed',err)
          dispatch({
            type:GETCOMMITERROR
          })
          reject(err)
        })
      })
    }
  }
  

  //添加回复
  export function addReply(params){
    console.log('addReply params',params);
    return dispatch=>{
      dispatch({
        type:ADDREPLY
      })

      return new Promise((resolve,reject)=>{
        Taro.request({
          url:'http://118.25.173.153:3000/post/addReply',
          //url: 'http://localhost:3000/post/addReply',
          data:{
            user:params.user,
            content:params.content,
            postId:params.postId,
            toUser:params.toUser,
            commitId:params.commitId
          },
          header:{
            'content-type':'application/json'
          }
        })
        .then((res)=>{
          dispatch({
            type:ADDREPLYSUCCESS,
            replyList:res
          })
          resolve(res)
        })
        .catch((err)=>{
          dispatch({
            type:ADDREPLYERROR,
            replyList:[]
          })
          reject(err)
        })
      })
    }
  }


  //获取回复列表根据
  export function getReply(param1,type){
    console.log('获取回复列表',param1,type);
    return dispatch=>{
      dispatch({
        type:GETREPLY
      })
      let dataParam;
      if(type === 'getReplyByPostId'){
        //根据postid获取回复列表
        dataParam = {postId:param1}
        //console.log('dataParam 根据postid获取回复列表')
      }else{
        //根据评论id获取回复列表
        dataParam = {commitId:param1}
        //console.log('dataParam 根据commitId获取回复列表')
      }
      return new Promise((resolve,reject)=>{
        Taro.request({
          url:'http://118.25.173.153:3000/post/getReply',
          //url: 'http://localhost:3000/post/getReply',
          data:dataParam,
          header:{
            'content-type':'application/json'
          }
        })
        .then((res)=>{
          dispatch({
            type:GETREPLYSUCCESS,
            replyList:res.data
          })
          resolve(res)
        })
        .catch((err)=>{
          dispatch({
            type:GETREPLYERROR,
            replyList:[]
          })
          reject(err)
        })
      })
    }
  }
import Taro from '@tarojs/taro'
import {
    ADDPOST,
    ADDPOSTSUCCESS,
    ADDPOSTERROR,

    GETPOST,
    GETPOSTSUCCESS,
    GETPOSTERROR,

    ADDCOMMIT,
    ADDCOMMITSUCCESS,
    ADDCOMMITERROR
  } from './constants'

  export const add = () => {
    return {
      type: ADDPOST
    }
  }
  
  const getPost = () =>{
    return{
      type:GETPOST,
      //subreddit
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
          url: 'http://127.0.0.1:3000/post/getPost',
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
         //url: 'http://127.0.0.1:3000/post/addPost',
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
         url: 'http://127.0.0.1:3000/post/addsCommit',
          // data: {
          //     title: params.title,
          //     content: params.content
          // },
          header: {
            'content-type': 'application/json'
          },
        })
        .then(res=>{
          console.log(res.data)
          dispatch({
            type:ADDCOMMITSUCCESS,
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
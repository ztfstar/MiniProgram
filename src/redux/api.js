import Taro from '@tarojs/taro'
import {
    ADDPOST,
  } from './constants'

  export const add = () => {
    return {
      type: ADDPOST
    }
  }

  export const fetchPosts=()=> {
    Taro.request({
      url: 'http://127.0.0.1:3000/post',
      data: {
        foo: 'foo',
        bar: 10
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then(res => console.log(res.data))
  }

 

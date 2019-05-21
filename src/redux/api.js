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
      url: 'http://118.25.173.153:3000/post',
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

 

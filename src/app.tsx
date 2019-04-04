import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import { View,Image,Text,Button} from '@tarojs/components'
import { Provider } from '@tarojs/redux'

import configStore from './redux/store'
const store = configStore()
//import './app.scss'
// import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',//主页
      'pages/calculator/calculator',//应届生计算
      'pages/component/atIndex/atIndex',
      'pages/discuss/post',//讨论区
      'pages/more/more',//我的
      'pages/component/article/article',
      'pages/live/live',//居转户页面
      'pages/discuss/addPost',//发帖子
      'pages/discuss/postDetail'//帖子回复

      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: '上海落户小助手',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: false//下拉刷新
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        //iconPath: "./asset/images/index.png",
        //selectedIconPath: "./asset/images/index_focus.png"
      },{
        pagePath: "pages/discuss/post",
        text: "讨论区",
        // iconPath: "./asset/images/discovery.png",
        // selectedIconPath: "./asset/images/discovery_focus.png"
      }, 
      {
        pagePath: "pages/more/more",
        text: "我的",
        // iconPath: "./asset/images/burger.png",
        // selectedIconPath: "./asset/images/burger_focus.png"
      }]
    }
  }


  componentDidMount () {
    // Taro.login().then(
    //   ()=>{Taro.getUserInfo().then((res)=>{
    //     console.log(res)
    //   })}
    // )
    // Taro.login({
    //   success(res) {
    //     if (res.code) {
    //       // 发起网络请求
    //       Taro.request({
    //         url: 'https://test.com/onLogin',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
      // <View>
      //   <Index/>
      // </View>
      
      
    )
  }

 
}

Taro.render(<App />, document.getElementById('app'))

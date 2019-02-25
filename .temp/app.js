import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";

import './app.scss';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import Taro from '@tarojs/taro-h5';
import { Router } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
class App extends Component {
  state = {
    __tabs: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页"
      }, {
        pagePath: "pages/discovery/discovery",
        text: "讨论区"
      }, {
        pagePath: "pages/more/more",
        text: "我的"
      }]
    }
  };

  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    Taro._set$app(this);
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TabbarContainer>

                  <TabbarPanel>
                    <Router mode={"hash"} publicPath={"/"} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/discovery/discovery',
          componentLoader: () => import( /* webpackChunkName: "discovery_discovery" */'./pages/discovery/discovery'),
          isIndex: false
        }, {
          path: '/pages/more/more',
          componentLoader: () => import( /* webpackChunkName: "more_more" */'./pages/more/more'),
          isIndex: false
        }, {
          path: '/pages/calculator/calculator',
          componentLoader: () => import( /* webpackChunkName: "calculator_calculator" */'./pages/calculator/calculator'),
          isIndex: false
        }]} customRoutes={{}} basename={"/"} />
                  </TabbarPanel>

                  <Tabbar mode={"hash"} conf={this.state.__tabs} homePage="pages/index/index" router={Taro} basename={"/"} />

                </TabbarContainer>;
  }
  config = {
    pages: ['pages/index/index', 'pages/discovery/discovery', 'pages/more/more', 'pages/calculator/calculator'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: '上海落户小助手',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: false //下拉刷新
    },
    tabBar: { color: "#626567", selectedColor: "#2A8CE5", backgroundColor: "#FBFBFB", borderStyle: "white", list: [{ pagePath: "pages/index/index", text: "首页" }, { pagePath: "pages/discovery/discovery", text: "讨论区" }, { pagePath: "pages/more/more", text: "我的" }] }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));
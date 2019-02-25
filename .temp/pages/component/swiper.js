import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import banner1 from '../../source/img/banner1.gif';
export default class App extends Component {
  render() {
    return <Swiper className="test-h" circular autoplay>
        <SwiperItem>
        <Image style="height:150px;width:375px" src={banner1} />
        </SwiperItem>
       
      </Swiper>;
  }
}
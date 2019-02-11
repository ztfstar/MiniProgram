import Taro, { Component } from '@tarojs/taro'
import { View  } from '@tarojs/components';
import Radio1 from '../component/radio/radio'
// import Picker1 from '../component/picker/picker'
export default class Calculator extends Component {
  
render () {
    return (
      <View className='container'>
        <View className='page-body' >
         <Radio1 />
         {/* <Picker1/> */}
        </View>
      </View>
    )
  }
}

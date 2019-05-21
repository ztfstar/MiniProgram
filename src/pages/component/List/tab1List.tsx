import Taro,{ Component,  } from '@tarojs/taro'
import { AtList, AtListItem } from "taro-ui"

import tab1Data from './tab1.json' 
import { View } from '@tarojs/components';
//
export default class Tab1List extends Component {
     constructor(props){
         super(props)
     }


    render(){
     
        return (
            <View >
                <AtList>
                {
                    tab1Data.itemList.map((item)=>{
                        return(
                            // <View>
                                 <AtListItem
                                    key={item.id}
                                    title={item.title}
                                    note={item.note}
                                    extraText='详细信息'
                                    arrow='right'
                                    onClick={()=>this._onClick({item})}//箭头函数里的参数为什么取不到item的值
                                    thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                                />

                            //      <AtListItem
                            //         key={item.id}
                            //         title={item.title}
                            //         note={item.note}
                            //         extraText='详细信息'
                            //         arrow='right'
                            //         onClick={()=>this._onClick({item})}//箭头函数里的参数为什么取不到item的值
                            //         thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                            //     />
                            // </View>
                        )
                    })
                }
            </AtList>
            </View>
        )
    }
   

    _onClick=({item})=>{
        console.log('article',item)
        let id = item.id;
        Taro.navigateTo({url:`/pages/component/article/article?id=${id}`})
    }
}
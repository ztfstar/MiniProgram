import Taro,{ Component,  } from '@tarojs/taro'
import { View,Image,WebView} from '@tarojs/components'
// import { WebView } from '@tarojs/components'
import { RichText } from '@tarojs/components'


export default class Tab1List extends Component {
     constructor(props){
         super(props)
     }
     state={
         articleId:0,
       
          
      
     }

    componentDidMount() {
        this.setState({
            articleId:this.$router.params.id
        })


    }   

    render(){
        let src=''
        console.log(this.$router.params.id)
        if(this.$router.params.id == 0 ){
            src = 'https://mp.weixin.qq.com/s/rnBHYa0cDRqiBF67f9hYlw'
        }else{
            src='https://mp.weixin.qq.com/s/QzV8MNtRpiOdhfMcXRG2ZA'
        }
        
            return (
                <WebView src={src}/>
                )

     
        
    }
   
}

import Taro from '@tarojs/taro'
import { View, Text, Picker ,Form,Button} from '@tarojs/components'
import { AtForm, AtInput, AtButton,AtInputNumber } from 'taro-ui'
import './salary.scss'
export default class Salary extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      salaryValue: '',
      socialValue:'',
      publicValue:'',
      socialBaseType:['按照工资','自定义'],
      socialBaseChecked:'按照工资',

      publicBaseType:['按照工资','自定义'],
      publicChecked:'按照工资',

      publicPercent:['12','11','10','9','8','7','6','5'],
      pubPercentChecked:'7',

      showSocialBase:false,
      showPublicPercent:false,

      finalNum:'',
      costTax:'',
      costSocial:'',
      costPublic:''
    }
  }
  //工资输入框
  handleSalary (salaryValue) {
    this.setState({
      salaryValue
    })
  }
  //社保输入框
  handleSocial(socialValue){
    this.setState({
      socialValue
    })
  }
  //公积金输入框
  handlePublic(publicValue){
    this.setState({
      publicValue
    })
  }
  onSubmit (event) {
    //console.log('onSubmit',event)
    let{
      salaryValue,
      socialBaseChecked,
      socialValue,//社保的自定义输入基数
      publicChecked,
      pubPercentChecked,//公积金比例
      publicValue//公积金的自定义输入基数
    } = this.state
    let salary = salaryValue;//税前工资
    let socialType = socialBaseChecked;//社保缴纳类型
    let socialValues;//社保最终的值
    let publicType = publicChecked//公积金类型
    let pubPercentValue; //公积金百分比
    let publicValues;//公积金最终基数值
    console.log('pubPercentChecked',pubPercentChecked)
    if(socialType === '按照工资'){
      socialValues = salaryValue//社保基数就是税前工资
    }else{
      socialValues = socialValue
    }

    if(publicType === '按照工资'){
      publicValues = salaryValue//按照工资的话 基数就是税前工资
    }else{
      publicValues = publicValue//按照自定义输入值publicValue
    }
    //社保公积金个人部分 社保最低基数4699 最高23496
    if(socialValues>23496){
      socialValues = 23496
    }else if(socialValues<4699){
      socialValues = 4699
    }else{
      socialValues = socialValues
    }
    //社保缴纳
    let costSocial = socialValues*0.105
    this.setState({
      costSocial:costSocial
    })
    //公积金缴纳 公积金最低基数2415 最高23500
    if(publicValues>23500){
      publicValues = 23500
    }else if(publicValues<2415){
      publicValues = 2415
    }else{
      publicValues = publicValues
    }
    let costPublic = publicValues*(pubPercentChecked/100)
    this.setState({
      costPublic:costPublic
    })
    
    let costTax //个人所得税
    let ExcessPart = salary-costSocial-costPublic//扣掉社保公积金的剩余部分
    //ExcessPart=ExcessPart-5000;
    if(ExcessPart<5000){
      costTax = 0
    }else if(ExcessPart>=5000&&ExcessPart<=8000){
      costTax = (ExcessPart-5000)*0.03
    }else if(ExcessPart>8000&&ExcessPart<=17000){
      costTax = (ExcessPart-5000)*0.1-210
    }else if(ExcessPart>17000&&ExcessPart<=30000){
      costTax = (ExcessPart-5000)*0.2-1410
    }else if(ExcessPart>30000&&ExcessPart<=40000){
      costTax = (ExcessPart-5000)*0.25-2660
    }else if(ExcessPart>40000&&ExcessPart<=60000){
      costTax = (ExcessPart-5000)*0.3-4410
    }else if(ExcessPart>60000&&ExcessPart<=85000){
      costTax = (ExcessPart-5000)*0.35-7160
    }else{
      costTax = (ExcessPart-5000)*0.45-15160
    }
    this.setState({
      costTax:costTax
    })
    //税后工资=税前工资-社保公积金扣除部分-个人所得税
    let finalNum = salary-(costSocial+costPublic)-costTax
    this.setState({
      finalNum:finalNum
    })
    // console.log('pubPercentChecked',pubPercentChecked)
    // console.log('onSubmit salary',salary)
    // console.log('onSubmit socialType',socialType)
    // console.log('onSubmit socialValues',socialValues)
    // console.log('onSubmit publicType',publicType)
    // console.log('onSubmit pubPercentValue',pubPercentValue)
  }
  onReset (event) {
    console.log(event)
  }
  //改变社保基数类型
  changSocail= e =>{
    this.setState({
      socialBaseChecked: this.state.socialBaseType[e.detail.value],
    },()=>{
      console.log('socialBaseChecked',this.state.socialBaseChecked)
    })
    //自定义时，可以填写缴纳社保基数值 0表示选的第一个根据工资,1表示选的第二个
    if(e.detail.value === '1'){
      this.setState({
        showSocialBase:true,
      })
    }else{
      this.setState({
        showSocialBase:false
      })
    }
  }
  //改变公积金基数类型
  changPublic = e=>{
    this.setState({
      publicChecked: this.state.publicBaseType[e.detail.value],
    })
    //自定义时，可以填写缴纳社保基数值
    if(e.detail.value === '1'){
      console.log('显示input')
      this.setState({
        showPublicPercent:true
      })
    }else{
      this.setState({
        showPublicPercent:false
      })
    }
  }
  //改变公积金缴纳基数
  changPubPercent = e=>{
    this.setState({
      pubPercentChecked: this.state.publicPercent[e.detail.value],
    })
  }

  componentDidMount () {
    Taro.showShareMenu({
      withShareTicket: true
    })
   }
  render () {
    return (
      <View className='container'>
      <View className='header'>
      
      <View className='title'>
        <Text className='salary'>税后工资:</Text>
        <Text className='finalNum'>{Math.round(this.state.finalNum)}</Text>
      </View>
        
        <View className='taxbox'>
          <View><Text className='item'>个税:{Math.round(this.state.costTax)}</Text></View>
          <View><Text className='item'>社保:{Math.round(this.state.costSocial)}</Text></View>
          <View><Text className='item'>公积金:{Math.round(this.state.costPublic)}</Text></View>
        </View>
      </View>
        <Form
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
          className='formBody'
        >
        {/* 税前工资输入框 */}
        <View className='salaryBox' style='background-color: white'>
          <AtInput
            name='value'
            title='税前工资'
            type='text'
            border={false}
            placeholder='请输入税前工资'
            value={this.state.salaryValue}
            onChange={this.handleSalary.bind(this)}
          />
        </View>
        {/* 社保区域 */}
        <View className='socialBox' style='background-color: white'>
          <Picker mode='selector' className='socialBaseType'  range={this.state.socialBaseType} onChange={this.changSocail} id='selector'>
            <View style='background-color: #ffffff'>
              <Text className='itemText'>社保缴纳方式:{this.state.socialBaseChecked}</Text>
            </View>
          </Picker>
          {this.state.showSocialBase&&
          <AtInput
                name='value'
                title='缴纳基数'
                type='text'
                border={false}
                placeholder='请输入社保缴纳基数'
                value={this.state.socialValue}
                onChange={this.handleSocial.bind(this)}
              />}
        </View>
          {/* 公积金区域 */}
          <View className='publicBox' style='background-color: white'>
            <Picker mode='selector' className='socialBaseType' range={this.state.publicBaseType} onChange={this.changPublic} id='selector'>
              <View style='background-color: #ffffff'>
                <Text className='itemText'>公积金缴纳方式:{this.state.publicChecked}</Text>
              </View>
            </Picker>
            
            <View>
              
              {this.state.showPublicPercent&&<AtInput
                name='value'
                title='缴纳基数'
                type='text'
                border={false}
                placeholder='请输入公积金缴纳基数'
                value={this.state.publicValue}
                onChange={this.handlePublic.bind(this)}
              />}

              <Picker mode='selector' range={this.state.publicPercent} onChange={this.changPubPercent} id='selector'>
                <View className='picker'>
                  <Text className='itemText'>缴纳比例:{this.state.pubPercentChecked}%</Text>
                </View>
              </Picker>

            </View>
            
          </View>
          <View className='buttonBox'>
            <AtButton size='normal' type='primary' full={false} formType='submit' customStyle='width:375px'>提交</AtButton>
            {/* <Button type='primary' onClick={this.onSubmit.bind(this)}>提交</Button> */}
            {/* <AtButton type='secondary' formType='reset'>重置</AtButton> */}
          </View>
        </Form>
      </View>
    )
  }
}
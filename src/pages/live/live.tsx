
import { Component } from '@tarojs/taro'

import {
  View,
  Text,
  Label,
  Radio,
  Checkbox,
  Button,
  RadioGroup,
  Form,
  CheckboxGroup,
  Picker,Input,
  Image
} from '@tarojs/components'
import { AtFloatLayout ,AtToast,AtNoticebar}  from 'taro-ui'
import './live.scss'
import gzh from './gzh.jpg'
// import { Text, Image } from '@tarojs/components';
export default class PageForm extends Component {

  // config = {
  //   navigationBarTitleText: '上海市居转户积分计算'
  // }

  constructor() {
    super(...arguments)
  }

 
  state = {
    isChecked: false,
    educationList: [
      {
        value: 0,
        text: '大专（高职）学历以下',
        checked: false
      },
      {
        value: 50,
        text: '大专（高职）学历 (50分)',
        checked: false
      },
      {
        value: 60,
        text: '大学本科学历 (60分)',
        checked: false
      },
      {
        value: 90,
        text: '大学本科学历和学士学位 (90分)',
        checked: false
      },
      {
        value: 100,
        text: '硕士研究生学历学位 (100分)',
        checked: false
      },
      {
        value: 110,
        text: '博士研究生学历学位 (110分)',
        checked: false
      }
    ],
    technologyList:[
      {
        value:15,
        text:'技能类国家职业资格五级 (15分)',
        checked: false
      },
      {
        value:30,
        text:'技能类国家职业资格四级 (30分)',
        checked: false
      },{
        value:60,
        text:'技能类国家职业资格三级 (60分)',
        checked: false
      },{
        value:100,
        text:'技能类国家职业资格二级或中级职称 (100分)',
        checked: false
      },{
        value:140,
        text:'技能类国家职业资格一级或高级职称  (140分)',
        checked: false
      }
    ],
    addScore1List:[
      {
       value:120,
       text:'创业人才' ,
       desc:'须符合由市教委会同相关部门制定的积分具体条件 (120分)'
      },{
        value:120,
        text:'创新创业中介服务人才' ,
        desc:'须符合由市教委会同相关部门制定的积分具体条件 (120分)'
       },{
        value:30,
        text:'紧缺急需专业' ,
        desc:'所学专业属于上海市紧缺急需专业目录，且工作岗位与所学专业一致 (30分)'
       }
    ],
    safeList:[
      {
        value:0,
        text:'缴纳社保基数低于平均工资80%',
        desc:'最近4年内累计36个月在上海市缴纳职工社会保险费基数低于上海市上年度职工平均工资80',
        checked: false
       },{
         value:25,
         text:'缴纳社保基数高于等于平均工资80%低于1倍' ,
         desc:'最近4年内累计36个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资80%低于1倍 (25分)',
         checked: false
        },{
         value:50,
         text:'最缴纳职工社保基数高于等于平均工资1倍低于2倍' ,
         desc:'最近4年内累计36个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资1倍低于2倍 (50分)',
         checked: false
        },{
          value:100,
          text:'最缴纳职工社保基数高于等于平均工资2倍低于3倍' ,
          desc:'最近4年内累计36个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资2倍低于3倍 (100分)',
          checked: false
         },{
          value:120,
          text:'最缴纳职工社保基数高于等于平均工资3倍' ,
          desc:'最近3年内累计24个月在上海市缴纳职工社会保险费基数高于等于上海市上年度职工平均工资3倍 (120分)',
          checked: false
         }
    ],

    freshList:[
      {
        value:0,
        text:"否",
        checked: true
      },
      {
        value:10,
        text:"是(10分)",
        checked: false
      },
    ],
    

    honorList:[
      {
        value:0,
        text:"否",
        checked: true
      },
      {
        value:30,
        text:"获得过上海市委办局等市级机关专项性表彰奖励 (30分)",
        checked: false
      },{
        value:60,
        text:"获得过上海市委办局等市级机关综合性表彰奖励 (60分)",
        checked: false
      },
      {
        value:110,
        text:"获得过省部级及以上政府表彰奖励 (110分)",
        checked: false
      },
    ],

    wifeList:[
      {
        value:0,
        text:"否",
        checked: true
      },
      {
        value:1,
        text:"配偶是上海户口，且结婚已满",
        checked: false
      }
    ],
    fakeList:['无','一次','两次'],
    fakeChecked:'无',
    holdList:['无','一次','两次'],
    holdChecked:'无',
    commitList:['无','一次','两次'],
    commitChecked:'无',

    editableMarry:true,

    score:'',
    isOpened:false,
    isToastOpened:false,
    toastText:''
  }
// 您的年龄
  changeAge = e => {
    this.setState({
      age:e.detail.value
    })
    console.log(e)
  }
//教育背景
  educationChange = e => {
    this.setState({
      education:e.detail.value
    })
  }
//专业技术能力
technologyChange=e=>{
  this.setState({
    technology:e.detail.value
  })
}
//社保年限
safeYearChange=e=>{
  this.setState({
    safeYear:e.detail.value
  })
}
//创新创业人才
addScore1Change=e=>{
  this.setState({
    addScore1:e.detail.value
  })
}
//最近三年投资纳税
payChange = e=>{
  console.log(e)
  this.setState({
    pay:e.detail.value
  })
}

//最近三年带动就业
jobChange = e=>{
  console.log(e)
  this.setState({
    job:e.detail.value
  })
}
//社保基数
safeChange = e=>{
  this.setState({
    safe:e.detail.value
  })
}

//公共服务领域
commonChange = e=>{
  this.setState({
    common:e.detail.value
  })
}
//远郊地区
outerChange = e=>{
  this.setState({
    outer:e.detail.value
  })
}
//应届毕业生
freshChange=e=>{
  this.setState({
    fresh:e.detail.value
  })
}

//表彰奖励
honorChange = e => {
    // console.log(e)
    this.setState({
      honor:e.detail.value
    })
  }
  //是否结婚
  isMarryChange= e =>{
    console.log('是否结婚',e.detail.value)
    if (e.detail.value == 0){//0-没结婚；1-结婚
      this.setState({
        editableMarry:true
      })
    }else{
      this.setState({
        editableMarry:false
      })
    }
    
  }
//结婚满几年
  marryChange = e => {
    console.log(this.state.editableMarry)
    this.setState({
      marry:e.detail.value
    })
  }
//欺骗
  fakeChange = e => {
    this.setState({
      fakeChecked: this.state.fakeList[e.detail.value],
    })
  }
  //拘留
  holdChange = e => {
    this.setState({
      holdChecked: this.state.holdList[e.detail.value],
    })
  }

  //犯罪
  commitChange = e => {
    this.setState({
      commitChecked: this.state.commitList[e.detail.value],
    })
  }

  formSubmit = e => {
    this.setState({
      isOpened:true
    })
    let {addScore1,age,commit,common,education,fake,fresh,hold,honor,marry,outer,pay,job,safe,safeYear,technology} = e.detail.value;
      //教育和专业技能二选一
      //console.log('education pre',typeof education,'technology pre',typeof technology)
      education=Number(education);
      technology=Number(technology)
      if(education > technology || education===technology){
        //console.log('education ing',education,'technology ing',technology,education>technology)
        education=education;
        technology=0
      }else{
        education=0;
        technology=technology
      }
      console.log('age',age,'age type',typeof age)
    //50-60岁积5分，每减少1岁 增加2分
    age=Number(age)
    if(age>=56 && age<=60){
      age = 5
    }else if(age == ''){
      this.setState({
        isToastOpened:true,
        toastText:'请输入年龄'
      })
    }else{
      age = 5+(56-age)*2
      if(age>30){
        age=30
      }else{
        age=age
      }
    }
    // console.log('age',age)

    //缴费年限，每缴费1年加3分
    safeYear = safeYear * 3;

    //每纳税10万元加10分
    pay=Number(pay);
    job=Number(job);
    pay = (Math.floor(pay/10))*10
    if(pay>120){
      pay = 120
    }

    //每纳税10万元加10分
    job = (Math.floor(job/10))*10
    if(job>120){
      job = 120
    }
    if(pay>=job){
      pay=pay;
      job=0
    }else{
      pay=0;
      job=job
    }
   // console.log('pay,job',pay,job)

    //在公共服务领域
    common=Number(common);
    if(common < 5){
      common = 0;
    }else{
      common = common*4
    }

    //远郊地区 面1年加2分
    outer=Number(outer);
    if(outer<5){
      outer = 0
    }else{
      outer = outer * 2;
      if(outer>20){
        outer = 20
      }
    }

    //  配偶为本市户籍
    marry=Number(marry);
    marry = marry*4;
    if(marry > 40){
      marry = 40
    }

    //虚假材料
    fake = Number(fake*(-150));
    //拘留
    hold = Number(hold*(-50));  
    //犯罪
    commit = Number(commit*(-150))

    this.setState({
      score:Number(addScore1)+Number(age)+Number(commit)+Number(common)+Number(education)+Number(fake)+Number(fresh)+Number(hold)+
      Number(honor)+Number(marry)+Number(outer)+Number(pay)+Number(job)+Number(safe)+Number(safeYear)+Number(technology)
    })
    console.log(e)

  }
  handleClose=()=>{
    this.setState({
      isOpened:false
    })
  }

  toastClose=()=>{
    this.setState({
      isToastOpened:false
    })
  }
  formReset = e => {
    console.log(e)
  }

  componentDidMount(){
    this.setState({
      score:0
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View style='display:flex;justify-content: center;background-color:#6190e8;color:white'>
          <Text >上海市居转户积分计算</Text>
        </View>


        {/* <View className='components-page__header'>
          
        </View> */}
        <Form onSubmit={this.formSubmit} onReset={this.formReset}>
          <View   className='components-page__body'>

          <View className='example-body'>
              <View className='example-body__input' >
                <Text className='example-body__radios-item' >您的年龄:</Text>
                <View className='input' style='width:80px;'>
                  <Input
                    maxLength='4'
                    name='age'
                    type='number'
                    placeholder='请输入年龄'
                    confirmType='done'
                    placeholderStyle='font-size:14px'
                    value={this.state.age}
                    onChange={this.changeAge}
                  />
                </View>    
                  <Text className='example-body__radios-item' >周岁</Text>               
              </View> 
          </View> 


            <View className='example-body' >
                <View className='components-page__header'>
                  <Text>教育背景</Text><br/>
                  
                </View>
                 <View className='example-body__radios'>
                 <AtNoticebar marquee>
                 请注意：教育背景、专业技术职称和技能等级二选一！！！！！！     请注意：教育背景、专业技术职称和技能等级二选一！！！！！！
                </AtNoticebar>
                 {/* <Text style='color:red;font-size:14px'>教育背景、专业技术职称和技能等级二选一</Text> */}
                   <RadioGroup onChange={this.educationChange} name='education'>
                     {this.state.educationList.map((item, i) => {
                      return (
                        <Label className='example-body__radios-item' for={i} key={i}>
                          <Radio
                            value={item.value}
                            checked={item.checked}>
                            {item.text}
                          </Radio>
                        </Label>
                      )
                    })}
                  </RadioGroup>
                </View>
            </View>



            <View className='example-body' >
                <View className='components-page__header'>
                  <Text>专业技术职称和技能等级</Text>
                </View>
                 <View className='example-body__radios'>
                 <AtNoticebar marquee>
                 请注意：教育背景、专业技术职称和技能等级二选一！！！！！！     请注意：教育背景、专业技术职称和技能等级二选一！！！！！！
                </AtNoticebar>
                <AtNoticebar marquee>
                 持证人以中、高级专业技术职务任职资格和技能类国家职业资格二级、一级申请积分的，最近1年内累计6个月的缴纳职工社会保险费基数应不低于本市上年度职工社会平均工资
                </AtNoticebar>
                   <RadioGroup onChange={this.technologyChange} name='technology'>
                     {this.state.technologyList.map((item, i) => {
                      return (
                        <Label className='example-body__radios-item' for={i} key={i}>
                          <Radio
                            name='radio'
                            value={item.value}
                            checked={item.checked}>
                            {item.text}
                          </Radio>
                        </Label>
                      )
                    })}
                  </RadioGroup>
                </View>
            </View>                   


            <View className='example-body' >
                <View className='components-page__header'>
                  <Text>缴纳职工社会保险费</Text>
                </View>
                <View className='example-body'>
              <View className='example-body__input' >
                <Text className='example-body__radios-item' >缴费年限:</Text>
                <View className='input' style='width:100px;'>
                  <Input
                    //name=''
                    maxLength='4'
                    name='safeYear'
                    type='number'
                    placeholder='请输入缴费年限'
                    confirmType='done'
                    placeholderStyle='font-size:14px'
                    value={this.state.value}
                    onChange={this.safeYearChange.bind(this)}
                  />
                </View>    
                  <Text className='example-body__radios-item' >年</Text>               
              </View> 
          </View>      
            </View> 
           

     

            <View className='example-body'>
            <View className='components-page__header'>
              <Text className='sortName'> 创新创业人才与紧缺专业</Text>
            </View>
              <View className='example-body__radios'>
                 <CheckboxGroup name='checkbox' onChange={this.addScore1Change} name='addScore1' id='sigcheckbox'>
                    {this.state.addScore1List.map(item => {
                      return (
                        <Label 
                          className='checkbox-list__label'
                          for={item.value}
                          key={item.value}>
                          <Checkbox style='padding-top:5px'
                            className='checkbox-list__checkbox'
                            value={item.value}                            
                            checked={item.checked}>
                            {item.text} 
                            <View><Text className='text-checkBox'>{item.desc}</Text></View>                          
                          </Checkbox>
                          
                        </Label>
                      )
                    })}
                  </CheckboxGroup>
              </View>
            </View>      



            <View className='example-body'>
              <View className='components-page__header'>
                <Text className='sortName'> 投资纳税或带动本地就业</Text>
                <AtNoticebar marquee>
                 请注意：投资纳税、聘用上海户籍人员二选一！！！！！！     请注意：投资纳税、聘用上海户籍人员二选一！！！！！！
                </AtNoticebar>
              </View>
              <View className='example-body__input' >
                <Text className='example-body__radios-item' >最近3年投资纳税:</Text>
                <View className='input' style='width:130px;'>
                  <Input
                    maxLength='4'
                    name='pay'
                    type='number'
                    placeholder='请输入纳税总额'
                    placeholderStyle='font-size:14px'
                    value={this.state.value}
                    onChange={this.payChange.bind(this)}
                  />
                  </View>    
                  <Text className='example-body__radios-item' >万元</Text>               
              </View> 

              <View className='example-body__input' >
                <Text className='example-body__radios-item' >最近3年聘用上海户籍人员:</Text>
                <View className='input' style='width:130px;'>
                  <Input
                    maxLength='4'
                    name='job'
                    type='number'
                    placeholder='请输入聘用人数'
                    placeholderStyle='font-size:14px'
                    value={this.state.value}
                    onChange={this.jobChange.bind(this)}
                  />
                  </View>    
                  <Text className='example-body__radios-item' >人</Text>               
              </View>          
            </View> 
             



            <View className='example-body'>
            <View className='components-page__header'>
              <Text className='sortName'> 缴纳职工社会保险费基数</Text>
            </View>
              <View className='example-body__radios'>
                   <RadioGroup onChange={this.safeChange} name='safe'>
                     {this.state.safeList.map((item, i) => {
                      return (
                        <Label className='example-body__radios-item' for={i} key={i}>
                          <Radio style='padding-top:5px'
                            className='checkbox-list__checkbox'
                            value={item.value}
                            checked={item.checked}>
                            {item.text}
                            <View><Text className='text-checkBox'>{item.desc}</Text></View>
                          </Radio>
                        </Label>
                      )
                    })}
                  </RadioGroup>
                </View>
            </View> 


             
            
            <View className='example-body'>
              <View className='components-page__header'>
                <Text className='sortName'> 特定的公共服务领域</Text>
              </View>
              <View className='example-body__input' >
                <Text className='example-body__radios-item' >至今为止在该领域已工作</Text>
                <View className='input' style='width:80px'>
                  <Input
                    maxLength='4'
                    name='common'
                    type='number'
                    placeholder='请输入'
                    placeholderStyle='font-size:14px'
                    value={this.state.value}
                    onChange={this.commonChange.bind(this)}
                  />
                </View>    
                  <Text className='example-body__radios-item' >年</Text>               
              </View>
              <View style='text-align: left' className='example-body__radios-item'>
                <Text>积分管理办法试行期间，特定的公共服务领域范围是指环卫领域，满5年后开始计入总积分</Text>           
              </View>  
            </View> 



            <View className='example-body'>
              <View className='components-page__header'>
                <Text className='sortName'> 远郊重点区域</Text>
              </View>
              <View className='example-body__input' >
                <Text className='example-body__radios-item' >至今为止已经居住</Text>
                <View className='input' style='width:80px'>
                  <Input
                    maxLength='4'
                    name='outer'
                    type='number'
                    placeholder='请输入'
                    placeholderStyle='font-size:14px'
                    value={this.state.value}
                    onChange={this.outerChange.bind(this)}
                  />
                </View>    
                  <Text className='example-body__radios-item' >年</Text>               
              </View>
              <View style='text-align: left' className='example-body__radios-item'>
                <Text>积分管理办法试行期间，远郊重点区域是指临港地区，满5年后开始计入总积分</Text>           
              </View>  
            </View> 




            <View className='example-body' >
                <View className='components-page__header'>
                  <Text>是否全日制应届高校大学毕业生</Text>
                </View>
                 <View className='example-body__radios'>
                   <RadioGroup onChange={this.freshChange} name='fresh'>
                     {this.state.freshList.map((item, i) => {
                      return (
                        <Label className='example-body__radios-item' for={i} key={i}>
                          <Radio
                            style='width:500px'
                            value={item.value}
                            checked={item.checked}>
                            {item.text}
                          </Radio>
                        </Label>
                      )
                    })}
                  </RadioGroup>
                </View>
            </View>



            <View className='example-body' >
                <View className='components-page__header'>
                  <Text>在上海工作期间是否获得过表彰奖励</Text>
                </View>
                 <View className='example-body__radios'>
                   <RadioGroup onChange={this.honorChange} name='honor'>
                     {this.state.honorList.map((item, i) => {
                      return (
                        <Label className='example-body__radios-item' for={i} key={i}>
                          <Radio
                            style='width:700px'
                            
                            value={item.value}
                            checked={item.checked}>
                            {item.text}
                          </Radio>
                        </Label>
                      )
                    })}
                  </RadioGroup>
                </View>
            </View>



            <View className='example-body' >
                <View className='components-page__header'>
                  <Text>配偶为本市户籍人员</Text>
                </View>
                 <View className='example-body__radios'>
                   <RadioGroup onChange={this.isMarryChange}>
                     {this.state.wifeList.map((item, i) => {
                      return (
                        <Label className='example-body__radios-item' style="display: flex;direction: row;align-items: center;flex-wrap: wrap;justify-content: flex-start" for={i} key={i}>
                          <Radio
                          //style='width:00px'
                            name='radio'
                            value={item.value}
                            checked={item.checked}>
                            {item.text}
                          </Radio>
                          {i===1&&<View className='example-body__input' >
                            <View className='input' style='width:80px;margin-left:10px'>
                              <Input
                                disabled={this.state.editableMarry}
                                maxLength='4'
                                name='marry'
                                type='number'
                                placeholder='请输入'
                                placeholderStyle='font-size:14px'
                                value={this.state.value}
                                onChange={this.marryChange.bind(this)}
                              />
                            </View>    
                              <Text className='example-body__radios-item' >年</Text>               
                          </View>}
                        </Label>
                      )
                    })}
                  </RadioGroup>
                </View>
            </View>


            <View className='example-body'>
              <View className='components-page__header'>
                <Text className='sortName'> 减分指标及一票否决</Text>
              </View>
              <View>
                <Picker mode='selector' name='fake' range={this.state.fakeList} onChange={this.fakeChange} id='selector'>
                  <View className='picker'>
                  三年内申请积分提供虚假材料：<Text className='itemText'>{this.state.fakeChecked}</Text>
                  </View>
                </Picker>
                <Picker mode='selector' name='hold' range={this.state.holdList} onChange={this.holdChange} id='selector'>
                  <View className='picker'>
                  五年内行政拘留记录：<Text className='itemText'>{this.state.holdChecked}</Text>
                  </View>
                </Picker>
                <Picker mode='selector' name='commit' range={this.state.commitList} onChange={this.commitChange} id='selector'>
                  <View className='picker'>
                  五年内一般刑事犯罪记录：<Text className='itemText'>{this.state.commitChecked}</Text>
                  </View>
                </Picker>
                <Text style='color:red;font-size:18px' >违规生育或严重犯罪，取消申请积分落户资格</Text>
              </View>
            </View>                     




            <View className='components-page__body-example example'>
              <View className='example-body'>
                <Button formType='submit' type='primary'>
                  提交
                </Button>
                {/* <Button formType='reset' type='default'>
                  重置
                </Button> */}
              </View>
            </View>
          </View>
        </Form>

        <AtToast duration='1000' isOpened={this.state.isToastOpened} onClose={ this.toastClose } text={this.state.toastText} icon="{icon}"></AtToast>

        <AtFloatLayout isOpened={this.state.isOpened} title="分数计算详情" onClose={ this.handleClose }>
        <View style='display:flex;flex-direction: column;'>
          <Text style='font-size:18px'>你目前的总积分是:{this.state.score}。</Text>
          {this.state.score>=120?<Text>恭喜您已经达到上海居转户积分要求！请尽快准备相关材料。您也可以关注微信公众号“上海落户小助手”，第一时间获得落户相关资讯，微信公众号回复“落户”，加入上海落户交流群。</Text>:<Text>很遗憾，您目前的积分尚未达到上海居转户积分要求。</Text>}
          {/* <Image src={gzh}></Image> */}
        </View>
        </AtFloatLayout>
      </View>
    )
  }
}
import Taro from '@tarojs/taro'
import { AtCheckbox } from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      checkedList: [5]
    }
    this.checkboxOption = [{
        id:1,
        value: '5',
        label: '基本要素',
        desc: '用人单位招聘高校毕业生行为符合诚信规范，并与毕业生签订劳动或聘用合同期薇一年及以上的就业协议，劳动派遣方式除外 5分'
      }
      ,{
        id:2,
        value: '3',
        label: '引进重点领域人才',
        desc: '用人单位录用上海市重点发展领域所需学科毕业生 3分',
      },{
        id:3,
        value: '3',
        label: '引进重点领域人才',
        desc: '用人单位录用上海市重点发展领域所需学科中的教育部、上海市、上海市教委重点学科毕业研究生 3分',
      },{
        id:4,
        value: '3',
        label: '承担重大项目',
        desc: '用人单位承担国家和上海经济社会发展重大项目且录用的毕业生专业与行业相匹配 3分',
      },{
        id:5,
        value: '3',
        label: '承担重大项目',
        desc: '用人单位为远郊地区教育、卫生、农业等社会公益事业单位 3分',
      },{
        id:6,
        value: '6',
        label: '自主创业',
        desc: '在校或休学期间创业，企业经营情况良好 5分',
      }
    ]
  }
  handleChange (value) {
    //console.log(value)
    this.setState({
      checkedList: values
    })
  }
  render () {
    return (
      <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange}
      />
    )
  }
}
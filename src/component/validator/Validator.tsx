import * as React from 'react'
import { Input, Button, message } from 'antd'
import { ValidatorService } from '../../service/validator/ValidatorService'
import { Table, Space } from 'antd'
import { UserVO } from '../../model/validator/UserVO'
import { UserControllerInstance } from './ValidatorController'

export interface IValidatorProps {}

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'phoneNumber',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
]
export default class Validator extends React.Component<IValidatorProps> {
  userControllerInstance = UserControllerInstance.userControllerInstance

  state = {
    email: '',
  }

  componentDidMount() {
    
  }
  async getAllList() {
    let userList = await this.userControllerInstance.getUserList()
    return userList
  }
  changeInput(e: any) {
    this.setState({
      email: e.target.value,
    })
  }
  async addUser() {
    // let data = await this.validatorService.addUser(this.state.email)
    // if (!!data) {
    //   message.success('您已添加成功！')
    //   this.getAllList()
    // } else {
    //   message.warning('您未能添加成功！')
    // }
    // this.setState({
    //   email: '',
    // })
  }
  public render() {
    getAllList()
     const { email } = this.state
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Table<UserVO> columns={columns} dataSource={userList} />
        <div style={{ paddingLeft: '50px', display: 'flex' }}>
          <Input value={email} onChange={(e) => this.changeInput(e)}></Input>
          <Button type="primary" onClick={() => this.addUser()}>
            新增
          </Button>
        </div>
      </div>
    )
  }
}

import * as React from 'react'
import { Input, Button, message } from 'antd'
import { ValidatorService } from '../../service/validator/ValidatorService'
import { Table, Space } from 'antd'
import { UserVO } from '../../model/validator/UserVO'

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
  validatorService = new ValidatorService()
  state = {
    userData: [],
    email: '',
  }

  componentDidMount() {
    this.getAllList()
  }
  async getAllList() {
    this.setState({
      userData: await this.validatorService.getList(),
    })
  }
  changeInput(e: any) {
    this.setState({
      email: e.target.value,
    })
  }
  async addUser() {
    let data = await this.validatorService.addUser(this.state.email)
    if (!!data) {
      message.success('您已添加成功！')
      this.getAllList()
    } else {
      message.warning('您未能添加成功！')
    }
    this.setState({
      email: '',
    })
  }
  public render() {
    const { userData, email } = this.state
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Table<UserVO> columns={columns} dataSource={userData} />
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

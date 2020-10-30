import * as React from 'react'
import { Input, Button } from 'antd'
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
  }
  async componentDidMount() {
    this.setState({
      userData: await this.validatorService.getList(),
    })
  }
  public render() {
    const { userData } = this.state
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Table<UserVO> columns={columns} dataSource={userData} />
        <div style={{ paddingLeft: '50px', display: 'flex' }}>
          <Input></Input>
          <Button>新增</Button>
        </div>
      </div>
    )
  }
}
